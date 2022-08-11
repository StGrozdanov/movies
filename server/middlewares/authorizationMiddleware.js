const { validateToken } = require('../services/authenticationService');

module.exports = () => async (request, response, next) => {
    const token = request.headers['x-authorization'];

    if (token) {
        try {
            const payload = await validateToken(token);

            request.user = {
                username: payload.username,
                _id: payload._id,
                sessionToken: token,
            };

            next();
        } catch (err) {
            console.error(err);
            return response.status(401).json({ message: 'Invalid access token.' });
        }
    } else {
        return response.status(403).json({ message: 'You are not allowed to access this resource.' });
    }

};