import { useState, useCallback, useEffect } from 'react';
import axiosInstance from '../../utils/axios';

export interface Permission {
  id: number;
  module: string;
  action: string;
  createdAt: string;
  updatedAt: string;
}

export interface PermissionState {
  [key: string]: boolean; // key será `${module}_${action}`
}

export interface DynamicPermissions {
  [module: string]: {
    [action: string]: boolean;
  };
}

export interface PermissionGroup {
  name: string;
  modules: string[];
}

export interface FriendlyNames {
  [key: string]: string;
}

export const usePermissions = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [permissionsByModule, setPermissionsByModule] = useState<Record<string, Permission[]>>({});
  const [uniqueModules, setUniqueModules] = useState<string[]>([]);
  const [uniqueActions, setUniqueActions] = useState<string[]>([]);
  const [dynamicPermissions, setDynamicPermissions] = useState<DynamicPermissions>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  const permissionGroups: PermissionGroup[] = [
    {
      name: "Operaciones Principales",
      modules: ["Prestamos", "Pagos"]
    },
    {
      name: "Módulos de Visualización",
      modules: ["Colaboradores", "Reportes"]
    },
    {
      name: "Seguimiento de Pagos",
      modules: ["PagosVencidos", "PagosProximos", "PagoPrestamos"]
    }
  ];

  // Mapeo de nombres más amigables para módulos y acciones
  const friendlyModuleNames: FriendlyNames = {
    "Prestamos": "Préstamos",
    "Pagos": "Pagos",
    "Colaboradores": "Colaboradores",
    "PagosVencidos": "Pagos Vencidos",
    "PagosProximos": "Pagos Próximos",
    "PagoPrestamos": "Pago de Préstamos",
    "Reportes": "Reportes"
  };

  const friendlyActionNames: FriendlyNames = {
    "Agregar": "Agregar",
    "Editar": "Editar",
    "Eliminar": "Eliminar",
    "Ver": "Ver"
  };


  const fetchPermissions = useCallback(async () => {
    try {
      console.log('Iniciando fetchPermissions');
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get('/Permission');
      console.log('Respuesta del API de permisos:', response.data);
      
      // Extraer array de permisos - revisar diferentes estructuras posibles
      let permissionsArray: Permission[] = [];
      if (Array.isArray(response.data)) {
        // Si la respuesta es directamente un array
        permissionsArray = response.data;
      } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
        // Si la respuesta tiene un objeto data que contiene el array
        permissionsArray = response.data.data;
      } else if (response.data && typeof response.data === 'object') {
        // Si la respuesta es un objeto, intentar convertirlo a array
        permissionsArray = Object.values(response.data);
      }
      
      console.log('Array de permisos procesado:', permissionsArray);

      setPermissions(permissionsArray);

      // Extraer módulos y acciones únicos
      const modules = [...new Set(permissionsArray.map((p: Permission) => p.module))] as string[];
      const actions = [...new Set(permissionsArray.map((p: Permission) => p.action))] as string[];
      console.log('Módulos únicos:', modules);
      console.log('Acciones únicas:', actions);
      setUniqueModules(modules);
      setUniqueActions(actions);

      // Agrupar permisos por módulo para el UI
      const moduleGroups: Record<string, Permission[]> = {};
      modules.forEach((module: string) => {
        moduleGroups[module] = permissionsArray.filter((p: Permission) => p.module === module);
      });
      console.log('Permisos agrupados por módulo:', moduleGroups);
      setPermissionsByModule(moduleGroups);

      const dynamicPerms: DynamicPermissions = {};
      modules.forEach(module => {
        dynamicPerms[module] = {};
        actions.forEach(action => {
          dynamicPerms[module][action] = false;
        });
      });
      setDynamicPermissions(dynamicPerms);

      setIsReady(true);
      console.log('fetchPermissions completado, isReady=true');
      return permissionsArray;
    } catch (err: any) {
      console.error('Error al cargar permisos:', err);
      setError(err.message || 'Error al cargar permisos');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Convertir IDs de permisos al formato de estado dinámico
  const convertPermissionIdsToState = (permissionIds: number[]) => {
    const state: PermissionState = {};

    // Inicializar todos los permisos como false
    permissions.forEach(perm => {
      const key = `${perm.module}_${perm.action}`;
      state[key] = false;
    });
    
    // Marcar como activos los permisos que tiene asignados
    permissionIds.forEach(id => {
      const foundPermission = permissions.find(p => p.id === id);
      if (foundPermission) {
        const permKey = `${foundPermission.module}_${foundPermission.action}`;
        state[permKey] = true;
      }
    });
    
    return state;
  };

  // Convertir estado de permisos a array de IDs para la API
  const convertStateToPermissionIds = (permState: PermissionState) => {
    const permissionIds: number[] = [];
    
    // Recorrer el estado y agregar los IDs de permisos activos
    Object.entries(permState).forEach(([key, isActive]) => {
      if (isActive === true) {
        
        const [module, action] = key.split('_');
        
        const foundPermission = permissions.find(
          p => p.module === module && p.action === action
        );
        
        if (foundPermission) {
          permissionIds.push(foundPermission.id);
        }
      }
    });
    
    return permissionIds;
  };

  // Actualizar el estado de 'isReady' cuando los permisos estén cargados
  useEffect(() => {
    if (permissions.length > 0 && Object.keys(permissionsByModule).length > 0) {
      setIsReady(true);
    }
  }, [permissions, permissionsByModule]);

  // Cargar permisos al montar el componente
  useEffect(() => {
    if (!isReady) {
      fetchPermissions().catch(err => console.error('Error cargando permisos:', err));
    }
  }, [isReady, fetchPermissions]);

  const getGroupedModules = () => {
    // Crear un mapa para verificar rápidamente a qué grupo pertenece cada módulo
    const moduleToGroupMap: Record<string, string> = {};
    permissionGroups.forEach(group => {
      group.modules.forEach(module => {
        moduleToGroupMap[module] = group.name;
      });
    });
    
    // Agrupar módulos disponibles por categoría
    const result: Record<string, string[]> = {};
    uniqueModules.forEach(module => {
      const groupName = moduleToGroupMap[module] || "Otros";
      if (!result[groupName]) {
        result[groupName] = [];
      }
      result[groupName].push(module);
    });
    
    return result;
  };
  
  const getFriendlyModuleName = (module: string): string => {
    return friendlyModuleNames[module] || module;
  };
  
  const getFriendlyActionName = (action: string): string => {
    return friendlyActionNames[action] || action;
  };
  
  return {
    permissions,
    permissionsByModule,
    uniqueModules,
    uniqueActions,
    dynamicPermissions,
    loading,
    error,
    isReady,
    fetchPermissions,
    convertPermissionIdsToState,
    convertStateToPermissionIds,
    permissionGroups,
    getGroupedModules,
    getFriendlyModuleName,
    getFriendlyActionName
  };
};
