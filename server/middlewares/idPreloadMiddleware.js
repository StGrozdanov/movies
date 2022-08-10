module.exports = (service) => async (request, response, next) => {
    const id = request.params.id;
    let item;

    try {
        item = await service.getById(id);
    } catch (error) {
        console.log(`Error happened while trying to get/manipulate movie with id ${id}: ${error}`);
        return response.status(404).json({ message: `The requested id - ${id} was not found.` });
    }

    response.locals.item = item;

    next();
}