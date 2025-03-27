import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const createApiClient = (baseURL?: string): AxiosInstance => {
  const client = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Interceptor para JWT
  client.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!token) {
      // Redirige a login si no hay token y no es un endpoint de auth
      return Promise.reject(new Error('No authentication token found'));
    }
    return config;
  });

  return client;
};

// Función para manejar respuestas
export const handleAxiosResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

// Función para manejar errores
export const handleAxiosError = (error: AxiosError): never => {
  if (error.response) {
    const errorData = error.response.data as { message?: string; errors?: any };
    throw {
      status: error.response.status,
      message: errorData?.message || "An error occurred",
      errors: errorData?.errors,
    };
  }
  throw {
    status: 500,
    message: "Network error",
    errors: null,
  };
};