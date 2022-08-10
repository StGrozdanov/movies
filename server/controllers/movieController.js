const router = require('express').Router();

const movieService = require('../services/movieService');
const errorMapper = require('../utils/errorMapper');

router.get('/', async (request, response) => {
    const allMovies = await movieService.getAllMovies();
    response.json(allMovies);
});

router.post('/', async (request, response) => {
    try {
        const createdMovie = await movieService.createMovie(request.body);
        response.status(201).json(createdMovie);
    } catch (error) {
        console.log(`Error happened durring movie creation: ${error}`);
        let errorMessage = handleUniqueConstraintError(errorMapper(error));
        response.status(400).json({ message: errorMessage });
    }
});

router.delete('/:id', async (request, response) => {
    const movieId = request.params.id;
    try {
        await movieService.deleteMovie(movieId);
        response.json({});
    } catch(error) {
        console.log(`Error happened while trying to delete movie with id ${movieId}: ${error}`);
        response.status(404).json({ message: `There is no movie with id ${movieId} in the database.` });
    }
});

function handleUniqueConstraintError(errorMessage) {
    if (errorMessage.includes('duplicate')) {
        errorMessage = 'There is already a movie with the same title.';
    }
    return errorMessage;
}

module.exports = router;