const router = require('express').Router();

const idPreloadMiddleware = require('../middlewares/idPreloadMiddleware');
const movieService = require('../services/movieService');
const errorMapper = require('../utils/errorMapper');
const isAuthorized = require('../middlewares/authorizationMiddleware');
const isOwner = require('../middlewares/resourceOwnerMiddleware');

router.get('/', async (request, response) => {
    const { search, limit, skip } = request.query;
    const allMovies = search ? await movieService.findMoviesByTitle(search) : await movieService.getAllMovies(limit, skip);
    response.json(allMovies);
});

router.post('/', isAuthorized(), async (request, response) => {
    try {
        console.log(request.user)
        const createdMovie = await movieService.createMovie(request.body, request.user._id);
        response.status(201).json(createdMovie);
    } catch (error) {
        console.log(`Error happened durring movie edit: ${error}`);
        let errorMessage = handleUniqueConstraintError(errorMapper(error));
        response.status(400).json({ message: errorMessage });
    }
});

router.delete('/:id', idPreloadMiddleware(movieService), isAuthorized(), isOwner(), async (request, response) => {
    await movieService.deleteMovie(request.params.id);
    response.json({});
});

router.put('/:id', idPreloadMiddleware(movieService), isAuthorized(), isOwner(), async (request, response) => {
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

router.post('/like/:id', isAuthorized(), idPreloadMiddleware(movieService), async (request, response) => {
    try {
        const likesCount = await movieService.likeMovie(response.locals.item, request.user._id)
        response.json({ likesCount: likesCount }).status(201);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

router.post('/dislike/:id', isAuthorized(), idPreloadMiddleware(movieService), async (request, response) => {
    try {
        const likesCount = await movieService.dislikeMovie(response.locals.item, request.user._id)
        response.json({ likesCount: likesCount }).status(201);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

router.get('/count/all', async (request, response) => {
    const moviesCount = await movieService.moviesCount();
    response.json({ count: moviesCount })
});

function handleUniqueConstraintError(errorMessage) {
    if (errorMessage.includes('duplicate')) {
        errorMessage = 'There is already a movie with the same title.';
    }
    return errorMessage;
}

module.exports = router;