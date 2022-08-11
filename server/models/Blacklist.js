const { model, Schema } = require('mongoose');

const blacklistedSchema = new Schema({
    token: {
        type: String,
        unique: true,
        required: [true, 'Username is required.'],
    },
    addedOn: {
        type: Date,
        required: [true, 'Addition date is required.']
    }
});

const Blacklist = model('Blacklist', blacklistedSchema);

module.exports = Blacklist;