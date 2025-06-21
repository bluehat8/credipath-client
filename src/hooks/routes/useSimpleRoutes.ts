import { useState, useEffect } from 'react';
import { createApiClient, handleAxiosResponse, handleAxiosError } from 'utils/axiosClient';
import { AxiosError } from 'axios';
import { ROUTES_ENDPOINTS } from 'constants/endpoints';

const apiClient = createApiClient();

export interface SimpleRoute {
  id: number;
  name: string;
}

interface SimpleRoutesResponse {
  success: boolean;
  data: SimpleRoute[];
}

/**
 * Hook personalizado para obtener la lista simplificada de rutas
 */
export const useSimpleRoutes = () => {
  const [routes, setRoutes] = useState<SimpleRoute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRoutes = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiClient.get<SimpleRoutesResponse>(
        ROUTES_ENDPOINTS.GET_SIMPLE_ROUTES
      );
      
      const result = handleAxiosResponse<SimpleRoutesResponse>(response);
      
      if (result.success && Array.isArray(result.data)) {
        setRoutes(result.data);
      } else {
        throw new Error('Formato de respuesta inesperado');
      }
    } catch (err) {
      const error = err as AxiosError | Error;
      const errorMessage = handleAxiosError(error as AxiosError);
      setError(errorMessage);
      console.error('Error al cargar rutas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  // Función para recargar las rutas manualmente si es necesario
  const refetch = () => {
    return fetchRoutes();
  };

  return {
    routes,
    isLoading,
    error,
    refetch,
  };
};

export default useSimpleRoutes;
