const express = require('express');

const authenticationController = require('./controllers/authenticationController');
const movieController = require('./controllers/movieController');
const userController = require('./controllers/userController');

const router = express.Router();

router.use('/', movieController);

module.exports = router;