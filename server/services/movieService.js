const Movie = require('../models/Movie');

const getAllMovies = () => Movie.find({});

const createMovie = (requestBody) => Movie.create(requestBody) 

module.exports = {
    getAllMovies,
    createMovie,
};