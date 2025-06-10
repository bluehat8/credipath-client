import * as React from 'react';
import { useMutation, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { CLIENT_ENDPOINTS } from 'constants/endpoints';
import axios from 'utils/axios';
import { useToast } from 'components/hooks/use-toast';

export interface Client {
  id: number;
  name: string;
  lastname: string;
  routeId: number;
  routeName?: string;
  note?: string;
  direction: string;
  cellphone: string;
  email: string;
  landlinePhone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ClientRegistrationData extends Omit<Client, 'id' | 'createdAt' | 'updatedAt' | 'routeName'> {}

export interface ClientsFilters {
  routeId?: number;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}

// Base API functions (not React hooks)
const registerClientAPI = async (clientData: ClientRegistrationData) => {
  try {
    const response = await axios.post(CLIENT_ENDPOINTS.REGISTER_CLIENT, clientData);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Error al registrar el cliente';
    throw new Error(errorMessage);
  }
};

const getClientsAPI = async (filters: ClientsFilters = {}) => {
  try {
    const { data } = await axios.get(CLIENT_ENDPOINTS.GET_CLIENTS, { params: filters });
    return data as Client[];
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Error al obtener la lista de clientes';
    throw new Error(errorMessage);
  }
};

const getClientByIdAPI = async (id: number) => {
  try {
    const { data } = await axios.get(CLIENT_ENDPOINTS.GET_CLIENT_BY_ID(id));
    return data as Client;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Error al obtener el cliente';
    throw new Error(errorMessage);
  }
};

// Hook for client registration
const useRegisterClient = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: registerClientAPI,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      
      toast({
        title: 'Cliente registrado',
        description: `${variables.name} ${variables.lastname} ha sido registrado exitosamente.`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error al registrar',
        description: error.message,
        variant: 'destructive',
      });
    },
  });
};

// Hook for getting clients list
export const useClients = (filters: ClientsFilters = {}): UseQueryResult<Client[], Error> => {
  const { toast } = useToast();
  const queryResult = useQuery<Client[], Error>({
    queryKey: ['clients', filters],
    queryFn: () => getClientsAPI(filters)
  });

  // Handle errors with useEffect
  React.useEffect(() => {
    if (queryResult.error) {
      toast({
        title: 'Error',
        description: queryResult.error.message,
        variant: 'destructive',
      });
    }
  }, [queryResult.error, toast]);

  return queryResult;
};

// Hook for getting a single client
export const useClient = (id: number): UseQueryResult<Client, Error> => {
  const { toast } = useToast();
  const queryResult = useQuery<Client, Error>({
    queryKey: ['client', id],
    queryFn: () => getClientByIdAPI(id),
    enabled: !!id
  });

  // Handle errors with useEffect
  React.useEffect(() => {
    if (queryResult.error) {
      toast({
        title: 'Error',
        description: queryResult.error.message,
        variant: 'destructive',
      });
    }
  }, [queryResult.error, toast]);

  return queryResult;
};

// Main hook that exports all client-related operations
export const useClientRegistration = () => {
  const { mutateAsync: registerClient, ...mutationState } = useRegisterClient();
  
  return {
    // Mutation
    registerClient,
    
    // Query hooks
    useClients,
    useClient,
    
    // Loading and error states
    isLoading: mutationState.isPending,
    isSuccess: mutationState.isSuccess,
    error: mutationState.error,
    
    // Raw functions (use with caution, prefer the hooks above)
    _getClients: getClientsAPI,
    _getClientById: getClientByIdAPI,
  };
};

export default useClientRegistration;
