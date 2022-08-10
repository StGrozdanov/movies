const Movie = require('../models/Movie');

const getAllMovies = () => Movie.find({});

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

module.exports = {
    getAllMovies,
    createMovie,
    deleteMovie,
    editMovie,
    getById,
};