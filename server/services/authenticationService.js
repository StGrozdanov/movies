const User = require('../models/User');

const register = ({ username, password }) => User.create({ username, password });

module.exports = {
    register,
    
}