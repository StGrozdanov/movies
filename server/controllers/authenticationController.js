const router = require('express').Router();

const errorMapper = require('../utils/errorMapper');
const authenticationService = require('../services/authenticationService');

router.post('/register', async (request, response) => {
    try {
        const registeredUser = await authenticationService.register(request.body);
        response.json(registeredUser);
    } catch (error) {
        console.log(`Error happened durring user registration: ${error}`);
        let errorMessage = handleUniqueConstraintError(errorMapper(error));
        response.status(400).json({ message: errorMessage });
    }
});

function handleUniqueConstraintError(errorMessage) {
    if (errorMessage.includes('duplicate')) {
        errorMessage = 'There is already a user with the same username.';
    }
    return errorMessage;
}

module.exports = router;