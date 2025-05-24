import { useState, useCallback } from 'react';
import axiosInstance from '../../utils/axios';

// Tipos
export interface Collaborator {
  id?: string;
  identifier: string;
  name: string;
  email: string;
  phone: string;
  mobile: string;
  address: string;
  permissions?: {
    loan: {
      add: boolean;
      edit: boolean;
      delete: boolean;
    };
    payment: {
      add: boolean;
      edit: boolean;
      delete: boolean;
    };
    modules: {
      collaborators: boolean;
      overduePayments: boolean;
      upcomingPayments: boolean;
      loanPayment: boolean;
      report: boolean;
    };
  };
}

export interface CollaboratorPayload extends Omit<Collaborator, 'id'> {
  password?: string;
  confirmPassword?: string;
}

export const useCollaboratorService = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener todos los colaboradores
  const fetchCollaborators = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get('/Collaborator');
      
      // Extraer el array desde response.data.data en lugar de response.data
      const collaboratorsArray = response.data.data || [];
      console.log('Datos de colaboradores recibidos:', collaboratorsArray);
      
      setCollaborators(collaboratorsArray);
      return collaboratorsArray;
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || 'Error al obtener colaboradores';
      setError(errorMsg);
      console.error('Error fetching collaborators:', error);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Obtener un colaborador por ID
  const getCollaboratorById = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get(`/Collaborator/${id}`);
      // Extraer el colaborador de data
      return response.data.data;
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || `Error al obtener el colaborador con ID ${id}`;
      setError(errorMsg);
      console.error('Error fetching collaborator:', error);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Crear un nuevo colaborador
  const createCollaborator = useCallback(async (payload: CollaboratorPayload) => {
    try {
      setLoading(true);
      setError(null);
      
      // Asegurarse de que las propiedades existan en el payload
      const collaboratorData = {
        ...payload,
        role: 'collaborator' // Asignamos el rol colaborador por defecto
      };
      
      const response = await axiosInstance.post('/Collaborator', collaboratorData);
      
      // Extraer el colaborador creado de data
      const newCollaborator = response.data.data;
      
      // Actualizar estado local de colaboradores
      setCollaborators(prev => [...prev, newCollaborator]);
      
      return newCollaborator;
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || 'Error al crear el colaborador';
      setError(errorMsg);
      console.error('Error creating collaborator:', error);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Actualizar un colaborador existente
  const updateCollaborator = useCallback(async (id: string, payload: Partial<CollaboratorPayload>) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axiosInstance.put(`/Collaborator/${id}`, payload);
      
      // Extraer el colaborador actualizado de data
      const updatedCollaborator = response.data.data;
      
      // Actualizar estado local de colaboradores
      setCollaborators(prev => 
        prev.map(collab => 
          collab.id === id ? { ...collab, ...updatedCollaborator } : collab
        )
      );
      
      return updatedCollaborator;
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || `Error al actualizar el colaborador con ID ${id}`;
      setError(errorMsg);
      console.error('Error updating collaborator:', error);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Eliminar un colaborador
  const deleteCollaborator = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axiosInstance.delete(`/Collaborator/${id}`);
      
      // Verificar que la operación fue exitosa
      if (response.data.success) {
        // Actualizar estado local de colaboradores
        setCollaborators(prev => prev.filter(collab => collab.id !== id));
      } else {
        throw new Error(response.data.message || 'Error desconocido al eliminar');
      }
      
      return { success: true };
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || `Error al eliminar el colaborador con ID ${id}`;
      setError(errorMsg);
      console.error('Error deleting collaborator:', error);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    collaborators,
    loading,
    error,
    fetchCollaborators,
    getCollaboratorById,
    createCollaborator,
    updateCollaborator,
    deleteCollaborator
  };
};
