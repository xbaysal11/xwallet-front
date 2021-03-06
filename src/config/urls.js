const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_PREFIX = "/api";

export { BASE_URL };

export const LOGIN = `${BASE_URL}${API_PREFIX}/auth/login`;
export const REGISTER = `${BASE_URL}${API_PREFIX}/auth/register`;
export const MONEY_OPERATION = `${BASE_URL}${API_PREFIX}/money-operation`;
export const WALLETS = `${BASE_URL}${API_PREFIX}/wallet`;
export const CATEGORIES = `${BASE_URL}${API_PREFIX}/category`;
export const CANTEENS = `${BASE_URL}${API_PREFIX}/category`;
