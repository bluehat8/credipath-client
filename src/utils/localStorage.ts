// localStorage.ts
// Utility functions for handling localStorage

export const TOKEN_KEY = 'auth_token';
export const USER_KEY = 'user_data';

/**
 * Store authentication token in localStorage
 */
export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Retrieve authentication token from localStorage
 */
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Remove authentication token from localStorage
 */
export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * Store user data in localStorage
 */
export const setUserData = (userData: any): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(userData));
};

/**
 * Retrieve user data from localStorage
 */
export const getUserData = (): any | null => {
  const userData = localStorage.getItem(USER_KEY);
  return userData ? JSON.parse(userData) : null;
};

/**
 * Remove user data from localStorage
 */
export const removeUserData = (): void => {
  localStorage.removeItem(USER_KEY);
};

/**
 * Clear all authentication data from localStorage
 */
export const clearAuthData = (): void => {
  removeToken();
  removeUserData();
};

/**
 * Check if user is authenticated based on token presence
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
