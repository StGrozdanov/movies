const Movie = require('../models/Movie');

const getAllMovies = () => Movie.find({});

const createMovie = (requestBody) => Movie.create(requestBody);

const deleteMovie = (movieId) => Movie.findByIdAndDelete(movieId);

module.exports = {
    getAllMovies,
    createMovie,
    deleteMovie,
};