import { COULD_NOT_LOGOUT } from "../constants/requestConstants";
import { handleRequest } from "../utils/requestHandler";
import { BASE_HEADERS, BASE_URL, MODIFIYNG_OPERATIONS_HEADERS } from "./backendService";

const USER_END_POINT = '/authenticate';

const USERS_END_POINTS = {
    LOGIN: `${USER_END_POINT}/login`,
    REGISTER: `${USER_END_POINT}/register`,
    LOGOUT: `${USER_END_POINT}/logout`,
}

export async function login(credentials) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.LOGIN, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify(credentials)
    });
    return response;
}

export async function logout(sessionToken) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.LOGOUT, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify({ sessionToken })
    });
    await handleRequest(response, COULD_NOT_LOGOUT);
}

export async function register(credentials) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.REGISTER, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify(credentials)
    });
    return response;
}