const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_PREFIX = "/api";

export { BASE_URL };

export const LOGIN = `${BASE_URL}${API_PREFIX}/auth/token/`;
export const USER_ME = `${BASE_URL}${API_PREFIX}/users/me/`;
export const SCHOOLS = `${BASE_URL}${API_PREFIX}/schools/`;
export const CANTEENS = `${BASE_URL}${API_PREFIX}/canteens/`;
