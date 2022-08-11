const Blacklist = require('../models/Blacklist');

const addToBlacklist = (token) => {
    const addedOn = new Date(Date.now());
    Blacklist.create({ token, addedOn });
}

const clearExpiredTokens = async () => {
    const today = new Date();

    const expirationTime = process.env.JWT_DURRATION;

    const expiredTokens = Blacklist.find({
        $match: { addedOn: addedOn.getTime() - today.getTime() >= expirationTime }
    });

    expiredTokens.deleteMany();
}

module.exports = {
    addToBlacklist,
    clearExpiredTokens,
}