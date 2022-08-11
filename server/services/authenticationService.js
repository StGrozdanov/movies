const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const blacklistService = require('../services/blacklistService');

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

const logout = async (token) => {
    try {
        await blacklistService.addToBlacklist(token.sessionToken);
    } catch (error) {
        console.log(error);
    }
}

function createSession(user) {
    const payload = { username: user.username, _id: user._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_DURRATION,
    });

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

async function validateToken(token) {
    const blacklisted = await blacklistService.contains(token);
    if (blacklisted !== null) {
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    register,
    login,
    logout,
    validateToken
};