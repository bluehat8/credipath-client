
export interface Route {
    id: string;
    name: string;
    district: string;
    location: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }
  
  export type ApiError = {
    status: number;
    message: string;
    errors?: Record<string, string[]>;
  };
  