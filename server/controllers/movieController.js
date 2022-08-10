const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', async (request, response) => {
    const allMovies = await movieService.getAllMovies();
    response.json(allMovies);
});

module.exports = router;