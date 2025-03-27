"use client";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as api from "services/routesApi";
import { Route } from "types/types";

const routesApi = api.mockRoutesApi;

export function useRoutes(page = 1, limit = 10, search = "") {
  const query = useQuery(
    ["routes", page, limit, search],
    () => routesApi.getRoutes(page, limit, search),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
    }
  );

  return {
    routes: query.data?.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    pagination: {
      page: query.data?.page || page,
      limit: query.data?.limit || limit,
      total: query.data?.total || 0,
      totalPages: query.data?.totalPages || 0,
    },
  };
}


export function useCreateRoute() {
  const queryClient = useQueryClient();
  return useMutation(routesApi.createRoute, {
    onSuccess: () => queryClient.invalidateQueries("routes"),
  });
}

export function useUpdateRoute() {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, data }: { id: string; data: Partial<Route> }) => 
      routesApi.updateRoute(id, data),
    {
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries(["route", id]);
        queryClient.invalidateQueries("routes");
      },
    }
  );
}

export function useDeleteRoute() {
  const queryClient = useQueryClient();
  return useMutation(routesApi.deleteRoute, {
    onSuccess: () => queryClient.invalidateQueries("routes"),
  });
}