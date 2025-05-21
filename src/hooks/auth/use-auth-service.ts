import { useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../utils/axios';

interface AuthPayload {
  email: string;
  password: string;
}

interface RegisterPayload extends AuthPayload {
  name: string;
  role?: string;
}

interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export const useAuthService = () => {
  const { login: contextLogin, logout: contextLogout, user, isAuthenticated, isLoading, navigateByRole } = useAuth();

  // Login method that uses the AuthContext
  const login = useCallback(
    async (payload: AuthPayload): Promise<void> => {
      await contextLogin(payload.email, payload.password);
    },
    [contextLogin]
  );

  // Register a new user
  const register = useCallback(
    async (payload: RegisterPayload): Promise<void> => {
      try {
        await axiosInstance.post('/auth/register', payload);
        // Automatically login after successful registration
        await contextLogin(payload.email, payload.password);
      } catch (error) {
        console.error('Registration failed', error);
        throw error;
      }
    },
    [contextLogin]
  );

  // Logout method that uses the AuthContext
  const logout = useCallback(() => {
    contextLogout();
  }, [contextLogout]);

  // Change password for authenticated user
  const changePassword = useCallback(
    async (payload: ChangePasswordPayload): Promise<void> => {
      try {
        await axiosInstance.post('/auth/change-password', payload);
      } catch (error) {
        console.error('Password change failed', error);
        throw error;
      }
    },
    []
  );

  // Forgot password - initiates the reset process
  const forgotPassword = useCallback(async (email: string): Promise<void> => {
    try {
      await axiosInstance.post('/auth/forgot-password', { email });
    } catch (error) {
      console.error('Forgot password request failed', error);
      throw error;
    }
  }, []);

  // Reset password with a token
  const resetPassword = useCallback(
    async (token: string, newPassword: string): Promise<void> => {
      try {
        await axiosInstance.post('/auth/reset-password', { token, newPassword });
      } catch (error) {
        console.error('Password reset failed', error);
        throw error;
      }
    },
    []
  );

  return {
    login,
    register,
    logout,
    changePassword,
    forgotPassword,
    resetPassword,
    user,
    isAuthenticated,
    isLoading,
    navigateByRole // Añadimos el método de navegación basada en roles
  };
};
