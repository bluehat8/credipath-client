// axios.ts
// Axios configuration and interceptors

import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { getToken, clearAuthData } from './localStorage';
import { isTokenExpired } from './tokenUtils';
import { PATHS } from '../routes/routes';

// Create base API instance with type-safe environment variable handling
const baseURL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3000/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getToken();
    
    // Verificar si hay token y si no ha expirado
    if (token) {
      // Verificar si el token ha expirado antes de enviarlo
      if (isTokenExpired()) {
        // Si el token expiró, limpiar datos y redirigir al login
        clearAuthData();
        window.location.href = PATHS.LOGIN;
        // Cancelar la petición si es posible
        throw new axios.Cancel('Token expired');
      }
      
      // Si el token es válido, incluirlo en la cabecera
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: AxiosError): Promise<any> => {
    const originalRequest = error.config as any;
    
    // Handle unauthorized errors (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Marcar que ya intentamos un retry para evitar loops infinitos
      originalRequest._retry = true;
      
      // Aquí puedes implementar lógica de refresh token en el futuro
      // Por ahora, simplemente cerrar sesión y redirigir al login
      console.warn('Sesión expirada o no autorizada');
      
      // Limpiar todos los datos de autenticación del localStorage
      clearAuthData();
      
      // Mostrar mensaje al usuario
      if (typeof window !== 'undefined') {
        // Guardar la URL actual para redirigir después del login si lo deseas
        const currentPath = window.location.pathname;
        if (currentPath !== '/login') {
          // Opcionalmente, almacena la ruta para redirigir después del login
          // sessionStorage.setItem('redirectAfterLogin', currentPath);
          
          // Redirigir al login
          window.location.href = PATHS.LOGIN;
        }
      }
      
      return Promise.reject(new Error('Sesión expirada'));
    }
    
    // Handle other errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
