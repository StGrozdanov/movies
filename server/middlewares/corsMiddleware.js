module.exports = () => (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

    next();
}