// tokenUtils.ts
// Utilidades para gestionar tokens JWT

import { jwtDecode } from 'jwt-decode';
import { getToken, clearAuthData } from './localStorage';
import { PATHS } from '../routes/routes';

/**
 * Comprueba si el token JWT ha expirado o está a punto de expirar
 * @param bufferSeconds Segundos de margen antes de la expiración real (por defecto 60s)
 * @returns true si el token ha expirado o no existe, false si es válido
 */
export const isTokenExpired = (bufferSeconds = 60): boolean => {
  const token = getToken();
  
  // Si no hay token, consideramos que ha expirado
  if (!token) return true;
  
  try {
    // Decodificar el token para obtener la fecha de expiración
    const decoded = jwtDecode<{ exp: number }>(token);
    
    // Tiempo actual en segundos (formato UNIX timestamp)
    const currentTime = Math.floor(Date.now() / 1000);
    
    // Verificar si el token ya expiró o está a punto de expirar
    return decoded.exp < (currentTime + bufferSeconds);
  } catch (error) {
    // Si hay algún error al decodificar, consideramos que el token no es válido
    console.error('Error al verificar expiración del token:', error);
    return true;
  }
};

/**
 * Comprueba el token al cargar la página y redirige al login si ha expirado
 */
export const checkTokenOnPageLoad = (): void => {
  if (isTokenExpired()) {
    // Limpiar datos de autenticación
    clearAuthData();
    
    // Definir las rutas públicas que no requieren redirección
    const publicRoutes = [
      PATHS.LOGIN,
      PATHS.REGISTER,
      PATHS.FORGOT_PASSWORD,
      PATHS.RESET_PASSWORD
    ];
    
    // Verificar si la ruta actual es una ruta pública
    const isPublicRoute = publicRoutes.some(route => 
      window.location.pathname.includes(route)
    );
    
    // Solo redirigir si no estamos en una ruta pública
    if (!isPublicRoute) {
      window.location.href = PATHS.LOGIN;
    }
  }
};
