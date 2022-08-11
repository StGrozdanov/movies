const router = require('express').Router();

const idPreloadMiddleware = require('../middlewares/idPreloadMiddleware');
const movieService = require('../services/movieService');
const errorMapper = require('../utils/errorMapper');

router.get('/', async (request, response) => {
    const { search, limit, skip } = request.query;
    const allMovies = search ? await movieService.findMoviesByTitle(search) : await movieService.getAllMovies(limit, skip);
    response.json(allMovies);
});

router.post('/', async (request, response) => {
    try {
        const createdMovie = await movieService.createMovie(request.body);
        response.status(201).json(createdMovie);
    } catch (error) {
        console.log(`Error happened durring movie edit: ${error}`);
        let errorMessage = handleUniqueConstraintError(errorMapper(error));
        response.status(400).json({ message: errorMessage });
    }
});

router.delete('/:id', idPreloadMiddleware(movieService), async (request, response) => {
    await movieService.deleteMovie(request.params.id);
    response.json({});
});

router.put('/:id', idPreloadMiddleware(movieService), async (request, response) => {
    try {
        const editedMovie = await movieService.editMovie(response.locals.item, request.body);
        response.json(editedMovie);
    } catch (error) {
        console.log(`Error happened durring movie creation: ${error}`);
        let errorMessage = handleUniqueConstraintError(errorMapper(error));
        response.status(400).json({ message: errorMessage });
    }
});

router.get('/:id', idPreloadMiddleware(movieService), async (request, response) => {
    response.json(response.locals.item);
});

router.post('/like/:id', idPreloadMiddleware(movieService), async (request, response) => {
    try {
        const likesCount = await movieService.likeMovie(response.locals.item, request.body)
        response.json({likesCount: likesCount}).status(201);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

function handleUniqueConstraintError(errorMessage) {
    if (errorMessage.includes('duplicate')) {
        errorMessage = 'There is already a movie with the same title.';
    }
    return errorMessage;
}

module.exports = router;