const router = require('express').Router();
const authenticationService = require('../services/authenticationService');

router.post('/register', async (request, response) => {
    try {
        const registeredUser = await authenticationService.register(request.body);
        response.json(registeredUser);
    } catch (error) {
        response.status(400).json({ message: error });
    }
});

module.exports = router;