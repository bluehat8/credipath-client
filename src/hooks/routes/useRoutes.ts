import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createApiClient, handleAxiosResponse, handleAxiosError } from 'utils/axiosClient';
import { AxiosError } from 'axios';
import { ROUTES_ENDPOINTS } from 'constants/endpoints';

export interface Route {
  id: string;
  name: string;
  description?: string;
  district: string;
  location: string;
  status: 'active' | 'inactive';
  clientsCount?: number;
  collaboratorsCount?: number;
  createdAt?: string;
  lastVisit?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  errors?: any;
}

const apiClient = createApiClient();

export const useRoutes = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [limit, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Obtener lista de rutas con paginación
  const { 
    data: apiResponse, 
    isLoading, 
    isError, 
    error 
  } = useQuery<{ data: { items: Route[], pagination: any } }, Error>(
    ['routes', page, limit, searchQuery],
    async () => {
      try {
        const params = { 
          page, 
          limit, 
          ...(searchQuery && { search: searchQuery }) 
        };
        
        const response = await apiClient.get(ROUTES_ENDPOINTS.GET_ROUTES, { params });
        return handleAxiosResponse<{ data: { items: Route[], pagination: any } }>(response);
      } catch (error) {
        throw handleAxiosError(error as AxiosError);
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  // Transform the API response to match the expected format
  const routesData = {
    data: apiResponse?.data.items || [],
    total: apiResponse?.data.pagination?.total || 0,
    page: apiResponse?.data.pagination?.page || page,
    limit: apiResponse?.data.pagination?.pageSize || limit,
    totalPages: apiResponse?.data.pagination?.totalPages || 1
  };

  // Mutación para crear una nueva ruta
  const createRouteMutation = useMutation<ApiResponse<Route>, Error, Omit<Route, 'id'>>(
    async (newRoute) => {
      try {
        const response = await apiClient.post(ROUTES_ENDPOINTS.ADD_ROUTES, newRoute);
        return handleAxiosResponse(response);
      } catch (error) {
        throw handleAxiosError(error as AxiosError);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('routes');
      },
    }
  );

  // Mutación para actualizar una ruta existente
  const updateRouteMutation = useMutation<ApiResponse<Route>, Error, Route>(
    async (updatedRoute) => {
      try {
        const { id, ...data } = updatedRoute;
        const response = await apiClient.put(
          ROUTES_ENDPOINTS.UPDATE_ROUTE(Number(id)),
          data
        );
        return handleAxiosResponse(response);
      } catch (error) {
        throw handleAxiosError(error as AxiosError);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('routes');
      },
    }
  );

  // Mutación para eliminar una ruta
  const deleteRouteMutation = useMutation<ApiResponse<null>, Error, string>(
    async (id) => {
      try {
        const response = await apiClient.delete(
          `${ROUTES_ENDPOINTS.DELETE_ROUTE}/${id}`
        );
        return handleAxiosResponse(response);
      } catch (error) {
        throw handleAxiosError(error as AxiosError);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('routes');
      },
    }
  );

  // Función para crear una ruta
  const createRoute = useCallback(
    async (routeData: Omit<Route, 'id'>) => {
      return await createRouteMutation.mutateAsync(routeData);
    },
    [createRouteMutation]
  );

  // Función para actualizar una ruta
  const updateRoute = useCallback(
    async (routeData: Route) => {
      return await updateRouteMutation.mutateAsync(routeData);
    },
    [updateRouteMutation]
  );

  // Función para eliminar una ruta
  const deleteRoute = useCallback(
    async (id: string) => {
      return await deleteRouteMutation.mutateAsync(id);
    },
    [deleteRouteMutation]
  );

  return {
    // Datos
    routes: routesData?.data || [],
    pagination: {
      page: routesData?.page || page,
      limit: routesData?.limit || limit,
      total: routesData?.total || 0,
      totalPages: routesData?.totalPages || 0,
    },
    isLoading,
    isError,
    error,
    searchQuery,
    
    // Acciones
    createRoute,
    updateRoute,
    deleteRoute,
    
    // Configuración de paginación
    setPage,
    setPageSize,
    setSearchQuery,
    
    // Estados de las mutaciones
    isCreating: createRouteMutation.isLoading,
    isUpdating: updateRouteMutation.isLoading,
    isDeleting: deleteRouteMutation.isLoading,
  };
};

export default useRoutes;
