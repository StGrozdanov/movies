const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const register = async ({ username, password }) => {
    password = password.toString();

    if (password.trim().length < 5) {
        throw new Error('Minimum password length is 5 symbols long.');
    }

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

    try {
        const user = await User.create({ username, password: hashedPassword });
        return createSession(user);
    } catch (error) {
        throw new Error(error.message);
    }

};

const login = async ({ username, password }) => {
    const user = await User.findOne({ username });
    handleLoginError(user);

    const match = await bcrypt.compare(password.toString(), user.password);
    handleLoginError(match);

    return createSession(user); l
}

function createSession(user) {
    const payload = { username: user.username, _id: user._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return {
        username: user.username,
        sessionToken: token,
        _id: user._id,
    };
};

function handleLoginError(condition) {
    if (!condition) {
        throw new Error('Incorrect email or password');
    }
}

module.exports = {
    register,
    login,
};