import { COULD_NOT_CREATE_MOVIE, COULD_NOT_FETCH_MOVIES } from "../constants/requestConstants";
import { handleRequest } from "../utils/requestHandler";
import { BASE_HEADERS, BASE_URL, MODIFIYNG_OPERATIONS_HEADERS } from "./backendService";

export const MOVIES_PER_PAGE = 4;
export const MOVIE_END_POINT = '/movies';

const MOVIES_END_POINTS = {
    ALL_MOVIES: (page) =>  `${MOVIE_END_POINT}?limit=${MOVIES_PER_PAGE}&skip=${(page - 1)}`,
    COUNT_MOVIES: `${MOVIE_END_POINT}/count/all`,
    CREATE_MOVIE: `${MOVIE_END_POINT}`,
    SINGLE_MOVIE: (movieId) => `${MOVIE_END_POINT}/${movieId}`,
    SEARCH_BY_TITLE: (query) => `${MOVIE_END_POINT}?search=${query}`,
    LIKE_MOVIE: (movieId) => `${MOVIE_END_POINT}/like/${movieId}`,
    UNLIKE_MOVIE: (movieId) => `${MOVIE_END_POINT}/dislike/${movieId}`,
    USER_CREATED_MOVIES: (userId) => `${MOVIE_END_POINT}/createdBy/${userId}`,
    USER_LIKED_MOVIES: (userId) => `${MOVIE_END_POINT}/likedBy/${userId}`,
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

export async function searchByMovieTitle(query) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.SEARCH_BY_TITLE(query));
    return handleRequest(response, COULD_NOT_FETCH_MOVIES);
}

export async function likeMovie(movieId, token) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.LIKE_MOVIE(movieId), {
        method: 'POST',
        headers: MODIFIYNG_OPERATIONS_HEADERS(token),
    });
    return handleRequest(response, COULD_NOT_CREATE_MOVIE);
}

export async function unlikeMovie(movieId, token) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.UNLIKE_MOVIE(movieId), {
        method: 'POST',
        headers: MODIFIYNG_OPERATIONS_HEADERS(token),
    });
    return handleRequest(response, COULD_NOT_CREATE_MOVIE);
}

export async function deleteMovie(movieId, token) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.SINGLE_MOVIE(movieId), {
        method: 'DELETE',
        headers: MODIFIYNG_OPERATIONS_HEADERS(token),
    });
    return handleRequest(response, COULD_NOT_CREATE_MOVIE);
}

export async function editMovie(movieId, token, movieData) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.SINGLE_MOVIE(movieId), {
        method: 'PUT',
        headers: MODIFIYNG_OPERATIONS_HEADERS(token),
        body: JSON.stringify(movieData),
    });
    return handleRequest(response, COULD_NOT_CREATE_MOVIE);
}

export async function userCreatedMovies(userId) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.USER_CREATED_MOVIES(userId));
    return handleRequest(response, COULD_NOT_FETCH_MOVIES);
}

export async function userLikedMovies(userId) {
    const response = await fetch(BASE_URL + MOVIES_END_POINTS.USER_LIKED_MOVIES(userId));
    return handleRequest(response, COULD_NOT_FETCH_MOVIES);
}