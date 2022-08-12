const Movie = require('../models/Movie');

const getAllMovies = (limit, skip) => limit ? Movie.find({}).limit(limit).skip(skip * limit) : Movie.find({});

const getById = (id) => Movie.findById(id);

const createMovie = (requestBody, _ownerId) => Movie.create({ ...requestBody, _ownerId });

const deleteMovie = (movieId) => Movie.findByIdAndDelete(movieId);

const editMovie = async (existingMovie, newMovieData) => {
    existingMovie.title = newMovieData.title;
    existingMovie.description = newMovieData.description;
    existingMovie.imageUrl = newMovieData.imageUrl;
    existingMovie.year = newMovieData.year;

    await existingMovie.save();

    return existingMovie;
}

const findMoviesByTitle = (query) => Movie.find({ title: { $regex: new RegExp(query, 'i') } });

const likeMovie = (movie, userId) => {
    if (movie.likedBy.includes(userId)) {
        throw new Error('You already liked this movie.');
    }
    movie.likedBy.push(userId);
    movie.save();

    return movie.likedBy.length;
}

const dislikeMovie = async (movie, userId) => {
    if (!movie.likedBy.includes(userId)) {
        throw new Error('You cannot dislike something that you have not liked.');
    }
    await movie.likedBy.pull({ _id: userId });
    movie.save();

    return movie.likedBy.length;
}

const moviesCount = () => Movie.countDocuments({}).exec();

module.exports = {
    getAllMovies,
    createMovie,
    deleteMovie,
    editMovie,
    getById,
    findMoviesByTitle,
    likeMovie,
    moviesCount,
    dislikeMovie,
};