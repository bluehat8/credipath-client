import { Route, ApiResponse, PaginatedResponse } from "types/types";
import { createApiClient, handleAxiosResponse, handleAxiosError } from 'utils/axiosClient';
import { AxiosError } from 'axios';
import { ROUTES_ENDPOINTS } from "constants/endpoints";

const API_BASE_URL = ROUTES_ENDPOINTS;
const routesClient = createApiClient();

export const routesApi = {
  async getRoutes(
    page = 1,
    limit = 10,
    search?: string,
  ): Promise<PaginatedResponse<Route>> {
    try {
      const params = { page, limit, ...(search && { search }) };
      const response = await routesClient.get<PaginatedResponse<Route>>(
        `${ROUTES_ENDPOINTS.GET_ROUTES}`,
        { params }
      );
      return handleAxiosResponse(response);
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  async getRouteById(id: string): Promise<ApiResponse<Route>> {
    try {
      const response = await routesClient.get<ApiResponse<Route>>(
        `${ROUTES_ENDPOINTS.GET_ROUTES}/${id}`
      );
      return handleAxiosResponse(response);
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  async createRoute(routeData: Omit<Route, "id">): Promise<ApiResponse<Route>> {
    try {
      const response = await routesClient.post<ApiResponse<Route>>(
        `${ROUTES_ENDPOINTS.ADD_ROUTES}`,
        routeData
      );
      return handleAxiosResponse(response);
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  async updateRoute(
    id: string,
    routeData: Partial<Route>,
  ): Promise<ApiResponse<Route>> {
    try {
      const response = await routesClient.put<ApiResponse<Route>>(
        `${ROUTES_ENDPOINTS.UPDATE_ROUTE}/${id}`,
        routeData
      );
      return handleAxiosResponse(response);
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  async deleteRoute(id: string): Promise<ApiResponse<null>> {
    try {
      const response = await routesClient.delete<ApiResponse<null>>(
        `${API_BASE_URL.DELETE_ROUTE}/routes/${id}`
      );
      return handleAxiosResponse(response);
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },
};


// Mock API implementation for development/testing
export const mockRoutesApi = {
    getRoutes: async function (
        page: number = 1,
        limit: number = 10,
        search?: string
        ): Promise<PaginatedResponse<Route>> {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Filter routes if search query is provided
        let filteredRoutes = [...mockRoutes];
        if (search) {
            const searchTerm = search.toLowerCase();
            filteredRoutes = filteredRoutes.filter(route => 
            route.name.toLowerCase().includes(searchTerm) ||
            route.district.toLowerCase().includes(searchTerm) ||
            route.location.toLowerCase().includes(searchTerm)
            );
        }

        const total = filteredRoutes.length;
        const totalPages = Math.ceil(total / limit);
        
        // Validate page number
        const currentPage = Math.max(1, Math.min(page, totalPages));
        
        // Implement pagination
        const startIndex = (currentPage - 1) * limit;
        const endIndex = Math.min(startIndex + limit, total);
        const paginatedRoutes = filteredRoutes.slice(startIndex, endIndex);

        return {
            data: paginatedRoutes,
            total,
            page: currentPage,
            limit,
            totalPages,
        };
    },

  getRouteById: async function (id: string): Promise<ApiResponse<Route>> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const route = mockRoutes.find((r) => r.id === id);

    if (!route) {
      throw {
        status: 404,
        message: "Route not found",
      };

    }

    return {
      data: { ...route }, // Return a copy to prevent mutations
      status: 200,
      message: "Route retrieved successfully",

    };
  },

  createRoute: async function (
    routeData: Omit<Route, "id">,
  ): Promise<ApiResponse<Route>> {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const newRoute: Route = {
      id: (mockRoutes.length + 1).toString(),
      ...routeData,
    };

    // In a real implementation, we would add to the database
    mockRoutes.push(newRoute);

    return {
      data: { ...newRoute }, // Return a copy to prevent mutations
      status: 201,
      message: "Route created successfully",
    };
  },

  updateRoute: async function (
    id: string,
    routeData: Partial<Route>,
  ): Promise<ApiResponse<Route>> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const index = mockRoutes.findIndex((r) => r.id === id);

    if (index === -1) {
      throw {
        status: 404,
        message: "Route not found",
      };
    }

    // Update the route
    const updatedRoute: Route = {
      ...mockRoutes[index],
      ...routeData,
    };

    // In a real implementation, we would update the database
    mockRoutes[index] = updatedRoute;

    return {
      data: { ...updatedRoute }, // Return a copy to prevent mutations
      status: 200,
      message: "Route updated successfully",
    };
  },

  deleteRoute: async function (id: string): Promise<ApiResponse<null>> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const index = mockRoutes.findIndex((r) => r.id === id);

    if (index === -1) {
      throw {
        status: 404,
        message: "Route not found",
      };
    }

    // In a real implementation, we would delete from the database
    mockRoutes.splice(index, 1);

    return {
      data: null,
      status: 200,
      message: "Route deleted successfully",
    };
  },
};


const mockRoutes: Route[] = [
  {
    id: "1",
    name: "Ruta Norte",
    district: "Distrito V",
    location: "Bo. Larreynaga - Col. 10 junio"
  },
  {
    id: "2",
    name: "Ruta Sur",
    district: "Distrito III", 
    location: "Col. Centroamérica"
  },
  {
    id: "3",
    name: "Ruta Este",
    district: "Distrito II",
    location: "Reparto Schick"
  },
  {
    id: "4", 
    name: "Ruta Oeste",
    district: "Distrito IV",
    location: "Barrio Martha Quezada"
  },
  {
    id: "5",
    name: "Ruta Central",
    district: "Distrito I",
    location: "Col. Primero de Mayo"
  },
  {
    id: "6",
    name: "Ruta Universitaria",
    district: "Distrito I",
    location: "UNI - UCA"
  },
  {
    id: "7",
    name: "Ruta Histórica",
    district: "Distrito II",
    location: "Centro Histórico"
  },
  {
    id: "8",
    name: "Ruta Comercial",
    district: "Distrito V",
    location: "Mercado Oriental"
  },
  {
    id: "9",
    name: "Ruta Residencial",
    district: "Distrito IV",
    location: "Las Colinas"
  },
  {
    id: "10",
    name: "Ruta Express",
    district: "Distrito III",
    location: "Carretera a Masaya"
  },
  {
    id: "11",
    name: "Ruta Escolar",
    district: "Distrito II",
    location: "Zona de Colegios"
  },
  {
    id: "12",
    name: "Ruta Hospitalaria",
    district: "Distrito I",
    location: "Hospitales principales"
  }
];
