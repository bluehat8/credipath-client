import { create } from 'zustand';
import axiosInstance from '../utils/axios';
import { Permission } from '../hooks/collaborator/use-permissions';

interface PermissionStoreState {
  permissions: Permission[];
  loading: boolean;
  error: string | null;
  fetched: boolean;
  fetchPermissions: () => Promise<void>;
  clearPermissions: () => void;
}

export const usePermissionStore = create<PermissionStoreState>((set, get) => ({
  permissions: [],
  loading: false,
  error: null,
  fetched: false,
  fetchPermissions: async () => {
    console.log('Store: Verificando estado actual antes de fetch:', {
      permisosActuales: get().permissions,
      yaObtenidos: get().fetched
    });
    
    // Si ya tenemos permisos, no volvemos a hacer fetch
    if (get().fetched && get().permissions.length > 0) {
      console.log('Store: Permisos ya obtenidos, devolviendo caché');
      return;
    }
    
    console.log('Store: Iniciando fetch de permisos...');
    set({ loading: true, error: null });
    try {
      console.log('Store: Consultando endpoint /Permission...');
      const response = await axiosInstance.get('/Permission');
      console.log('Store: Respuesta completa:', response);
      
      // Intentar diferentes estructuras de respuesta
      let permissionsArray = [];
      if (response.data && Array.isArray(response.data)) {
        permissionsArray = response.data;
        console.log('Store: Permisos encontrados directamente en data (array):', permissionsArray);
      } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
        permissionsArray = response.data.data;
        console.log('Store: Permisos encontrados en data.data:', permissionsArray);
      } else if (response.data && response.data.permissions && Array.isArray(response.data.permissions)) {
        permissionsArray = response.data.permissions;
        console.log('Store: Permisos encontrados en data.permissions:', permissionsArray);
      }
      
      // Log si no hay permisos
      if (permissionsArray.length === 0) {
        console.warn('Store: API devuelve array vacío de permisos');
      }
      
      // Actualizar el store con los permisos
      set({
        permissions: permissionsArray,
        loading: false,
        error: null,
        fetched: true
      });
      
      console.log('Store: Estado actualizado con permisos');
      return permissionsArray; // Devuelve los permisos para encadenar promesas
    } catch (err: any) {
      const errorMsg = err?.message || 'Error al obtener permisos';
      console.error('Store: Error en fetch de permisos:', errorMsg);
      set({ loading: false, error: errorMsg, fetched: false });
      throw err; // Re-lanzar el error para manejo externo
    }
  },
  clearPermissions: () => {
    console.log('Store: Limpiando permisos');
    set({ permissions: [], fetched: false });
  }
}));
