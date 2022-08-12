import { COULD_NOT_CREATE_MOVIE, COULD_NOT_FETCH_MOVIES } from "../constants/requestConstants";
import { handleRequest } from "../utils/requestHandler";
import { BASE_HEADERS, BASE_URL, MODIFIYNG_OPERATIONS_HEADERS } from "./backendService";

export const MOVIES_PER_PAGE = 4;
export const MOVIE_END_POINT = '/movies';

const MOVIES_END_POINTS = {
    ALL_MOVIES: (page) =>  `${MOVIE_END_POINT}?limit=${MOVIES_PER_PAGE}&skip=${(page - 1)}`,
    COUNT_MOVIES: `${MOVIE_END_POINT}/count/all`,
    CREATE_MOVIE: `${MOVIE_END_POINT}`,
    SINGLE_MOVIE: (movieId) => `${MOVIE_END_POINT}/${movieId}`
}

export async function getAllMovies(page) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.ALL_MOVIES(page));
    return handleRequest(response, COULD_NOT_FETCH_MOVIES);
}

export async function countMovies() {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.COUNT_MOVIES);
    return handleRequest(response, COULD_NOT_FETCH_MOVIES);
}

export async function createMovie(movieData, token) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.CREATE_MOVIE, {
        method: 'POST',
        headers: MODIFIYNG_OPERATIONS_HEADERS(token),
        body: JSON.stringify(movieData)
    });
    return handleRequest(response, COULD_NOT_CREATE_MOVIE);
}

export async function getSingleMovie(movieId) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.SINGLE_MOVIE(movieId));
    return handleRequest(response, COULD_NOT_FETCH_MOVIES);
}