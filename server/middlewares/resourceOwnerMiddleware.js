module.exports = () => (request, response, next) => {
    if (!request.user) {
        response.status(401).json({ message: 'You are not logged in.' });
    } else if (request.user._id == response.locals.item._ownerId) {
        next();
    } else {
        response.status(403).json({ message: 'You cannot modify this record' });
    }
}