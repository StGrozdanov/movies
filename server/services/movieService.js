const Movie = require('../models/Movie');

const getAllMovies = (limit, skip) => limit ? Movie.find({}).limit(limit).skip(skip * limit) : Movie.find({});

const getById = (id) => Movie.findById(id);

const createMovie = (requestBody) => Movie.create(requestBody);

const deleteMovie = (movieId) => Movie.findByIdAndDelete(movieId);

const editMovie = async (existingMovie, newMovieData) => {
    existingMovie.title = newMovieData.title;
    existingMovie.description = newMovieData.description;
    existingMovie.imageUrl = newMovieData.imageUrl;
    existingMovie.year = newMovieData.year;

    await existingMovie.save();

    return existingMovie;
}

const findMoviesByTitle = (query) => Movie.find({title: {$regex: new RegExp(query, 'i') }})

module.exports = {
    getAllMovies,
    createMovie,
    deleteMovie,
    editMovie,
    getById,
    findMoviesByTitle,
};