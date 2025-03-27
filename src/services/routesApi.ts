import { Route, ApiResponse, PaginatedResponse, ApiError } from "types/types";

// Base API URL - would typically come from environment variables
const API_BASE_URL = "https://api.example.com/api";

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json();
    throw {
      status: response.status,
      message: errorData.message || "An error occurred",
      errors: errorData.errors,
    };
  }
  return await response.json();
}

// Get all routes with optional pagination and filtering
export async function getRoutes(
  page = 1,
  limit = 10,
  search?: string,
): Promise<PaginatedResponse<Route>> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (search) {
    queryParams.append("search", search);
  }

  const response = await fetch(`${API_BASE_URL}/routes?${queryParams}`);
  return handleResponse<PaginatedResponse<Route>>(response);
}

// Get a single route by ID
export async function getRouteById(id: string): Promise<ApiResponse<Route>> {
  const response = await fetch(`${API_BASE_URL}/routes/${id}`);
  return handleResponse<ApiResponse<Route>>(response);
}

// Create a new route
export async function createRoute(
  routeData: Omit<Route, "id">,
): Promise<ApiResponse<Route>> {
  const response = await fetch(`${API_BASE_URL}/routes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(routeData),
  });
  return handleResponse<ApiResponse<Route>>(response);
}

// Update an existing route
export async function updateRoute(
  id: string,
  routeData: Partial<Route>,
): Promise<ApiResponse<Route>> {
  const response = await fetch(`${API_BASE_URL}/routes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(routeData),
  });
  return handleResponse<ApiResponse<Route>>(response);
}

// Delete a route
export async function deleteRoute(id: string): Promise<ApiResponse<null>> {
  const response = await fetch(`${API_BASE_URL}/routes/${id}`, {
    method: "DELETE",
  });
  return handleResponse<ApiResponse<null>>(response);
}

// Mock data for development/testing
const mockRoutes: Route[] = [
  {
    id: "1",
    name: "Ruta del norte",
    district: "Distrito V",
    phoneNumber: "505",
    location: "Bo. Larreynaga - Col. 10 junio",
  },
  {
    id: "2",
    name: "Ruta del sur",
    district: "Distrito III",
    phoneNumber: "506",
    location: "Col. Centroamérica - Altamira",
  },
];

// Mock API implementation for development/testing
export const mockRoutesApi = {
  getRoutes: async function (
    page?: number,
    limit?: number,
    search?: string
  ): Promise<PaginatedResponse<Route>> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      data: [...mockRoutes], // Return a copy to prevent mutations
      total: mockRoutes.length,
      page: 1,
      limit: 10,
      totalPages: 1,
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
    // For mock purposes, we'll add to our array (but this won't persist between page refreshes)
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
    // For mock purposes, we'll update our array
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
    // For mock purposes, we'll remove from our array
    mockRoutes.splice(index, 1);

    return {
      data: null,
      status: 200,
      message: "Route deleted successfully",
    };
  },
};
