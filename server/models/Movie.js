const { model, Schema } = require('mongoose');

const currentDate = new Date(Date.now());
const currentYear = currentDate.getFullYear();

const movieSchema = new Schema({
    title: { 
        type: String, 
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
        min: [1988, 'Movie year cannot be before 1988.'],
        max: [currentYear, 'Movie year cannot be in the future.'],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function() {
                return this.imageUrl.startsWith('http');
            },
            message: 'You should provide valid image url.'
        } 
    },
    description: {
        type: String,
        required: true,
    }
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;