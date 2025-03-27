//SE MANDARÁN A LLAMAR LAS VARIABLES DE ENTORNO CUANDO LA API YA ESTÉ ALOJADA EN UN HOSTING O VPS
export const API_URL = "https://credipath/api"

/**
 * Endpoints relacionados con autenticación.
 */
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}/User/login`,
  REGISTER: `${API_URL}/User/register`,
};

export const ROUTES_ENDPOINTS = {
    GET_ROUTES: `${API_URL}/Routes/getRoutes`,
    ADD_ROUTES: `${API_URL}/Routes/addRoutes`,
    GET_ROUTE_BY_ID: (id: number) => `${API_URL}/Routes/getRoute/${id}`,
    UPDATE_ROUTE: (id: number) => `${API_URL}/Routes/updateRoute/${id}`,
    DELETE_ROUTE: (id: number) => `${API_URL}/Routes/deleteRoutes/${id}`,
};