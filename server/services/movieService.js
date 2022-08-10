const Movie = require('../models/Movie');

const getAllMovies = () => Movie.find({});

module.exports = {
    getAllMovies,
};