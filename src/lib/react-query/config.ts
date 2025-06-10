// Configuraciones predefinidas para diferentes tipos de datos
export const QUERY_CONFIG = {
    // Para datos que rara vez cambian (ej: rutas, tipos de préstamo)
    STATIC: {
      staleTime: 1000 * 60 * 60 * 2, // 2 horas
      cacheTime: 1000 * 60 * 60 * 24, // 24 horas
      retry: 1
    },
    
    // Para datos que pueden cambiar (ej: lista de clientes)
    DYNAMIC: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      retry: 2
    },
    
    // Para datos críticos (ej: saldos, transacciones)
    CRITICAL: {
      staleTime: 0, // Siempre obsoleto, pide datos frescos
      retry: 3,
      refetchInterval: 1000 * 30 // Actualizar cada 30 segundos
    }
  } as const;