"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Route, ApiError } from "types/types";
import { RouteFormData } from "schemas/routeSchema";
import { mockRoutesApi as api } from "services/routesApi";

// Context type definition
interface RouteContextType {
  // Data
  routes: Route[];
  isLoading: boolean;
  isError: boolean;
  error: ApiError | null;

  // CRUD operations
  addRoute: (data: RouteFormData) => Promise<void>;
  updateRoute: (data: RouteFormData) => Promise<void>;
  deleteRoute: (id: string) => Promise<void>;

  // UI state
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteDialogOpen: boolean;
  currentRoute: RouteFormData | null;
  routeToDelete: Route | null;

  // UI actions
  openAddModal: () => void;
  openEditModal: (route: Route) => void;
  openDeleteDialog: (route: Route) => void;
  closeModals: () => void;

  // Operation states
  isAddingRoute: boolean;
  isUpdatingRoute: boolean;
  isDeletingRoute: boolean;
  updatingRouteId: string | null;
  deletingRouteId: string | null;
}

// Create context with default values
const RouteContext = createContext<RouteContextType | undefined>(undefined);

// Helper function to convert RouteFormData to Route data
const formDataToRouteData = (formData: RouteFormData): Omit<Route, "id"> => {
  return {
    name: formData.name,
    district: formData.district,
    phoneNumber: formData.phoneNumber,
    location: formData.location,
  };
};

// Helper function to convert Route to RouteFormData
const routeToFormData = (route: Route): RouteFormData => {
  return {
    id: route.id,
    name: route.name,
    district: route.district,
    phoneNumber: route.phoneNumber,
    location: route.location,
  };
};

// Provider component
export const RouteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient();

  // UI state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<RouteFormData | null>(null);
  const [routeToDelete, setRouteToDelete] = useState<Route | null>(null);

  // Fetch routes data
  // const {
  //   data: routesData,
  //   isLoading: isRoutesLoading,
  //   isError: isRoutesError,
  //   error: routesError,
  //   refetch: refetchRoutes,
  // } = useQuery(["routes"], () => api.getRoutes(), {
  //   staleTime: 5 * 60 * 1000, // 5 minutes
  //   refetchOnWindowFocus: false,
  // });

  const {
    data: routesData,
    isLoading: isRoutesLoading,
    isError: isRoutesError,
    error: routesError,
  } = useQuery<Route[], ApiError>(
    ["routes"],
    async () => {
      const response = await api.getRoutes();
      return response.data; // Extraemos solo la propiedad 'data'
    },
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    }
  );


  // Create route mutation
  const createMutation = useMutation(
    (data: Omit<Route, "id">) => api.createRoute(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["routes"]);
        setIsAddModalOpen(false);
      },
    },
  );

  // Update route mutation
  const updateMutation = useMutation(
    ({ id, data }: { id: string; data: Partial<Route> }) =>
      api.updateRoute(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["routes"]);
        setIsEditModalOpen(false);
      },
    },
  );

  // Delete route mutation
  const deleteMutation = useMutation((id: string) => api.deleteRoute(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["routes"]);
      setIsDeleteDialogOpen(false);
    },
  });

  // UI actions
  const openAddModal = useCallback(() => {
    setCurrentRoute(null);
    setIsAddModalOpen(true);
    setIsEditModalOpen(false);
    setIsDeleteDialogOpen(false);
  }, []);

  const openEditModal = useCallback((route: Route) => {
    setCurrentRoute(routeToFormData(route));
    setIsEditModalOpen(true);
    setIsAddModalOpen(false);
    setIsDeleteDialogOpen(false);
  }, []);

  const openDeleteDialog = useCallback((route: Route) => {
    setRouteToDelete(route);
    setIsDeleteDialogOpen(true);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  }, []);

  const closeModals = useCallback(() => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteDialogOpen(false);
  }, []);

  // CRUD operations
  const addRoute = useCallback(
    async (data: RouteFormData) => {
      await createMutation.mutateAsync(formDataToRouteData(data));
    },
    [createMutation],
  );

  const updateRoute = useCallback(
    async (data: RouteFormData) => {
      if (!data.id) return;
      await updateMutation.mutateAsync({
        id: data.id,
        data: formDataToRouteData(data),
      });
    },
    [updateMutation],
  );

  const deleteRoute = useCallback(
    async (id: string) => {
      await deleteMutation.mutateAsync(id);
      setRouteToDelete(null);
    },
    [deleteMutation],
  );

  // Context value
  const value: RouteContextType = {
    // Data
    // routes: routesData?.data || [],
    routes: routesData || [], 
    isLoading: isRoutesLoading,
    isError: isRoutesError,
    error: routesError || null,

    // CRUD operations
    addRoute,
    updateRoute,
    deleteRoute,

    // UI state
    isAddModalOpen,
    isEditModalOpen,
    isDeleteDialogOpen,
    currentRoute,
    routeToDelete,

    // UI actions
    openAddModal,
    openEditModal,
    openDeleteDialog,
    closeModals,

    // Operation states
    isAddingRoute: createMutation.isLoading,
    isUpdatingRoute: updateMutation.isLoading,
    isDeletingRoute: deleteMutation.isLoading,
    updatingRouteId: updateMutation.variables?.id || null,
    deletingRouteId: deleteMutation.variables || null,
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

// Custom hook to use the context
export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error("useRouteContext must be used within a RouteProvider");
  }
  return context;
};
