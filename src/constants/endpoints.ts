export const API_URL = (import.meta as any).env?.VITE_API_URL;


/**
 * Endpoints relacionados con autenticación.
 */
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}/User/login`,
  REGISTER: `${API_URL}/User/register`,
};

export const ROUTES_ENDPOINTS = {
    GET_ROUTES: `${API_URL}/Route/getRoutes`,
    ADD_ROUTES: `${API_URL}/Route/addRoutes`,
    GET_ROUTE_BY_ID: (id: number) => `${API_URL}/Route/getRoute/${id}`,
    UPDATE_ROUTE: (id: number) => `${API_URL}/Route/updateRoute/${id}`,
    DELETE_ROUTE: (id: number) => `${API_URL}/Route/deleteRoutes/${id}`,
};