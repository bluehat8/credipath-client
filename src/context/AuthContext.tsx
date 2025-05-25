import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getUserData, getToken, setToken, setUserData, clearAuthData, isAuthenticated as checkIsAuthenticated } from '../utils/localStorage';
import axiosInstance from '../utils/axios';
import { jwtDecode } from 'jwt-decode';
import { isTokenExpired, checkTokenOnPageLoad } from '../utils/tokenUtils';
import { PATHS } from '../routes/routes';
import { usePermissionStore } from 'store/usePermissionStore';


interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  navigateByRole: () => void; // Nuevo método para redirección basada en roles
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage on initial render
    const loadUser = () => {
      try {
        // Verificar si el token ha expirado
        if (isTokenExpired()) {
          console.warn('Token expirado al cargar la aplicación');
          clearAuthData();
          setUser(null);
          setIsLoading(false);
          
          // No redirigimos aquí para evitar loops de redirección
          // La redirección se maneja en los guardianes de ruta
          return;
        }
        
        // Si el token es válido, cargar datos del usuario
        const userData = getUserData();
        if (userData && checkIsAuthenticated()) {
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to load user from localStorage', error);
        clearAuthData();
      } finally {
        setIsLoading(false);
      }
    };

    // Verificar token al cargar la página
    checkTokenOnPageLoad();
    
    // Cargar usuario si todo está bien
    loadUser();
  }, []);

  const login = async (usernameOrEmail: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/User/Login', { usernameOrEmail, password });
      
      // La respuesta tiene el formato {success, message, tokenValue}
      const { success, message, tokenValue } = response.data;
      
      if (!success || !tokenValue) {
        throw new Error(message || 'Error de autenticación');
      }
      
      // Decodificar el token JWT para obtener los datos del usuario
      type DecodedToken = {
        id: string;
        user: string;
        usertype: string;
        exp: number;
        [key: string]: any;
      };
      
      // Decodificar el token para extraer información
      const decoded = jwtDecode<DecodedToken>(tokenValue);
      
      // Crear objeto de usuario con datos del token
      const userData = {
        id: decoded.id,
        name: decoded.user,
        email: usernameOrEmail, // El email no está en el token, usamos el del login
        role: decoded.usertype   // 'admin', 'user', etc.
      };
      
      // Guardar token y datos
      setToken(tokenValue);
      setUserData(userData);
      setUser(userData);
      console.log("Login successful:", userData);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    clearAuthData();
    usePermissionStore.getState().clearPermissions();
    setUser(null);
  };

  const updateUser = (userData: Partial<User>): void => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      setUserData(updatedUser);
    }
  };
  
  /**
   * Navega a diferentes rutas según el rol del usuario
   * Este método centraliza la lógica de navegación basada en roles
   */
  const navigateByRole = (): void => {
    if (!user) return;
    
    // Redirección basada en el rol del usuario
    switch (user.role) {
      case 'admin':
        window.location.href = PATHS.HOME; // Dashboard para administradores
        break;
      case 'collaborator':
        window.location.href = PATHS.ROUTES; // Vista de rutas para colaboradores
        break;
      default:
        window.location.href = PATHS.CLIENTS; // Vista general de clientes para otros roles
        break;
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
    navigateByRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
