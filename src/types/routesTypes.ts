export interface Route {
    id: string;
    name: string;
    district: string;
    location: string;
  }
  
  export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  }
  
  export interface RouteContextType {
    // Data state
    routes: Route[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    
    // Pagination state
    pagination: Pagination;
    searchQuery: string;
    
    // UI state
    isAddModalOpen: boolean;
    isEditModalOpen: boolean;
    isDeleteDialogOpen: boolean;
    currentRoute: Route | null;
    routeToDelete: Route | null;
    
    // CRUD operations
    addRoute: (route: Omit<Route, 'id'>) => Promise<void>;
    updateRoute: (route: Route) => Promise<void>;
    deleteRoute: (id: string) => Promise<void>;
    
    // UI actions
    openAddModal: () => void;
    openEditModal: (route: Route) => void;
    openDeleteDialog: (route: Route) => void;
    closeModals: () => void;
    
    // Pagination actions
    setPage: (page: number) => void;
    setPageSize: (size: number) => void;
    setSearchQuery: (query: string) => void;
    
    // Operation states
    isAddingRoute: boolean;
    isUpdatingRoute: boolean;
    isDeletingRoute: boolean;
  }