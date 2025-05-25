import { useEffect } from 'react';
import { usePermissionStore } from '../../store/usePermissionStore';

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
  // Zustand store
  const permissions = usePermissionStore(state => state.permissions);
  const loading = usePermissionStore(state => state.loading);
  const error = usePermissionStore(state => state.error);
  const fetched = usePermissionStore(state => state.fetched);
  const fetchPermissions = usePermissionStore(state => state.fetchPermissions);

  // Derived/calculated state
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

  // Derived helpers (igual que antes, pero usando permisos del store)
  const uniqueModules = [...new Set(permissions.map((p: Permission) => p.module))] as string[];
  const uniqueActions = [...new Set(permissions.map((p: Permission) => p.action))] as string[];

  const permissionsByModule: Record<string, Permission[]> = {};
  uniqueModules.forEach((module: string) => {
    permissionsByModule[module] = permissions.filter((p: Permission) => p.module === module);
  });

  const dynamicPermissions: DynamicPermissions = {};
  uniqueModules.forEach(module => {
    dynamicPermissions[module] = {};
    uniqueActions.forEach(action => {
      dynamicPermissions[module][action] = false;
    });
  });

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

  // Cargar permisos al montar el componente (solo si no están cargados)
  useEffect(() => {
    if (!fetched) {
      fetchPermissions();
    }
  }, [fetched, fetchPermissions]);

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
    fetched,
    fetchPermissions,
    convertPermissionIdsToState,
    convertStateToPermissionIds,
    permissionGroups,
    getGroupedModules,
    getFriendlyModuleName,
    getFriendlyActionName
  };
};
