import { COULD_NOT_LOGIN } from "../constants/requestConstants";
import { handleRequest } from "../utils/requestHandler";
import { BASE_HEADERS, BASE_URL } from "./backendService";

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