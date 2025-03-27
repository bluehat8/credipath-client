"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { Route, PaginatedResponse, ApiError } from "types/types";
import { RouteFormData } from "schemas/routeSchema";
import * as api from "services/routesApi";

// Se usa el mock api por ahora
const routesApi = api.mockRoutesApi;

interface UseRoutesOptions {
  page?: number;
  limit?: number;
  search?: string;
}

export function useRoutes(options: UseRoutesOptions = {}): {
  routes: Route[];
  isLoading: boolean;
  isError: boolean;
  error: ApiError | null;
  refetch: () => void;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
} {
  const { page = 1, limit = 10, search } = options;

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  }: UseQueryResult<PaginatedResponse<Route>, ApiError> = useQuery(
    ["routes", page, limit, search],
    () => routesApi.getRoutes(page, limit, search),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  );

  return {
    routes: data?.data || [],
    isLoading,
    isError,
    error: error || null,
    refetch,
    pagination: {
      page: data?.page || page,
      limit: data?.limit || limit,
      total: data?.total || 0,
      totalPages: data?.totalPages || 0,
    },
  };
}

export function useRoute(id: string): {
  route: Route | null;
  isLoading: boolean;
  isError: boolean;
  error: {} | null;
} {
  const { data, isLoading, isError, error } = useQuery(
    ["route", id],
    () => routesApi.getRouteById(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  );

  return {
    route: data?.data || null,
    isLoading,
    isError,
    error: error || null,
  };
}

export function useCreateRoute() {
  const queryClient = useQueryClient();

  return useMutation<Route, ApiError, Omit<Route, "id">>(
    (newRoute) => routesApi.createRoute(newRoute).then((res) => res.data),
    {
      onSuccess: () => {
        // Invalidate and refetch routes list
        queryClient.invalidateQueries("routes");
      },
    },
  );
}

export function useUpdateRoute() {
  const queryClient = useQueryClient();

  return useMutation<Route, ApiError, { id: string; data: Partial<Route> }>(
    ({ id, data }) => routesApi.updateRoute(id, data).then((res) => res.data),
    {
      onSuccess: (data, variables) => {
        // Update the route in the cache
        queryClient.invalidateQueries(["route", variables.id]);
        // Invalidate the routes list
        queryClient.invalidateQueries("routes");
      },
    },
  );
}

export function useDeleteRoute() {
  const queryClient = useQueryClient();

  return useMutation<null, ApiError, string>(
    (id) => routesApi.deleteRoute(id).then((res) => res.data),
    {
      onSuccess: () => {
        // Invalidate and refetch routes list
        queryClient.invalidateQueries("routes");
      },
    },
  );
}

// Helper function to convert RouteFormData to Route data
export function formDataToRouteData(
  formData: RouteFormData,
): Omit<Route, "id"> {
  return {
    name: formData.name,
    district: formData.district,
    phoneNumber: formData.phoneNumber,
    location: formData.location,
  };
}

// Helper function to convert Route data to RouteFormData
export function routeToFormData(route: Route): RouteFormData {
  return {
    id: route.id,
    name: route.name,
    district: route.district,
    phoneNumber: route.phoneNumber,
    location: route.location,
  };
}
