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
        console.log(`Error happended durring movie creation: ${error}`);
        let errorMessage = handleUniqueConstraint(errorMapper(error));
        response.status(400).json({ errorMessage });
    }
});

function handleUniqueConstraint(errorMessage) {
    if (errorMessage.includes('duplicate')) {
        errorMessage = 'There is already a movie with the same title.'
    }
    return errorMessage;
}

module.exports = router;