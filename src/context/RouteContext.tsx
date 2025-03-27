"use client";
import React, { createContext, useContext, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as api from 'services/routesApi';
import { Route, Pagination, RouteContextType } from 'types/routesTypes';

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const RouteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [limit, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  
  // UI state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<Route | null>(null);
  const [routeToDelete, setRouteToDelete] = useState<Route | null>(null);

  // Fetch routes with pagination
  const { 
    data: routesData, 
    isLoading, 
    isError, 
    error: queryError 
  } = useQuery(
    ['routes', page, limit, searchQuery],
    () => api.mockRoutesApi.getRoutes(page, limit, searchQuery),
    { keepPreviousData: true }
  );

  const error = queryError instanceof Error ? queryError : 
             queryError ? new Error(String(queryError)) : null;

  // Mutation for adding a route
  const addMutation = useMutation(api.mockRoutesApi.createRoute, {
    onSuccess: () => {
      queryClient.invalidateQueries('routes');
      closeModals();
    },
  });

  // Mutation for updating a route
  const updateMutation = useMutation(
    (route: Route) => api.updateRoute(route.id, route),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('routes');
        closeModals();
      },
    }
  );

  // Mutation for deleting a route
  const deleteMutation = useMutation(api.deleteRoute, {
    onSuccess: () => {
      queryClient.invalidateQueries('routes');
      closeModals();
    },
  });

  // Helper functions
  const openAddModal = () => setIsAddModalOpen(true);
  
  const openEditModal = (route: Route) => {
    setCurrentRoute(route);
    setIsEditModalOpen(true);
  };
  
  const openDeleteDialog = (route: Route) => {
    setRouteToDelete(route);
    setIsDeleteDialogOpen(true);
  };
  
  const closeModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteDialogOpen(false);
    setCurrentRoute(null);
    setRouteToDelete(null);
  };

  const value: RouteContextType = {
    // Data state
    routes: routesData?.data || [],
    isLoading,
    isError,
    error,
    
    // Pagination state
    pagination: {
      page: routesData?.page || page,
      limit: routesData?.limit || limit,
      total: routesData?.total || 0,
      totalPages: routesData?.totalPages || 0,
    },
    searchQuery,
    
    // UI state
    isAddModalOpen,
    isEditModalOpen,
    isDeleteDialogOpen,
    currentRoute,
    routeToDelete,
    
    // CRUD operations
    addRoute: async (routeData) => {
      await addMutation.mutateAsync(routeData);
    },
    updateRoute: async (routeData) => {
      await updateMutation.mutateAsync(routeData);
    },
    deleteRoute: async (id) => {
      await deleteMutation.mutateAsync(id);
    },
    
    // UI actions
    openAddModal,
    openEditModal,
    openDeleteDialog,
    closeModals,
    
    // Pagination actions
    setPage,
    setPageSize,
    setSearchQuery,
    
    // Operation states
    isAddingRoute: addMutation.isLoading,
    isUpdatingRoute: updateMutation.isLoading,
    isDeletingRoute: deleteMutation.isLoading,
  };

  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};

export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error('useRouteContext must be used within a RouteProvider');
  }
  return context;
};