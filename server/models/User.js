const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required.'],
        minlength: [3, 'Username cannot be less than 3 symbols long.'] 
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [5, 'Password cannot be less than 5 symbols long.'] 
    }
});

const User = model('User', userSchema);

module.exports = User;