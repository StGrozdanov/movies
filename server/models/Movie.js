const { model, Schema, Types: { ObjectId } } = require('mongoose');

const currentDate = new Date(Date.now());
const currentYear = currentDate.getFullYear();

const movieSchema = new Schema({
    title: { 
        type: String, 
        required: [true, 'Movie title is required.'],
        unique: true,
    },
    year: {
        type: Number,
        required: [true, 'Movie year is required.'],
        min: [1988, 'Movie year cannot be before 1988.'],
        max: [currentYear, 'Movie year cannot be in the future.'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Movie image is required.'],
        validate: {
            validator: function() {
                return this.imageUrl.startsWith('http');
            },
            message: 'You should provide valid image url.'
        } 
    },
    description: {
        type: String,
        required: [true, 'Movie description is required.'],
    },
    likedBy: [ { type: ObjectId, ref: 'User' } ],
    _ownerId: { type: ObjectId, ref: 'User' }
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;