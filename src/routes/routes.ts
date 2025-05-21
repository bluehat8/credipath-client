// routes.ts
// Define all application routes and their configuration

// Route types
export interface Route {
  path: string;
  label: string;
  requiresAuth: boolean;
  roles?: string[];
  children?: Route[];
}

// Define route paths as constants to avoid typos
export const PATHS = {
  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  
  // Main navigation routes
  HOME: '/home',
  DASHBOARD: '/dashboard',
  
  // Client routes
  CLIENTS: '/clients',
  CLIENT_DETAILS: '/details-client',
  
  // Collaborator routes
  COLLABORATORS: '/collaborators',
  
  // Routes
  ROUTES: '/routes',
  
  // Loan routes
  LOAN_DETAILS: '/loan-details',
  CONTROL_BALANCE: '/control-balance',
  
  // Retanqueo routes
  RETANQUEO: '/retanqueo',
  RETANQUEO_SOLICITUD: '/solicitud',
  RETANQUEO_DESEMBOLSOS: '/retanqueo/desembolsos',
  RETANQUEO_GESTION: '/retanqueo/gestion-solicitudes',
  
  // Settings routes
  SETTINGS: '/settings',
};

// Define routes and their authorization requirements
export const routes: Route[] = [
  // Public routes (don't require authentication)
  {
    path: PATHS.LOGIN,
    label: 'Login',
    requiresAuth: false,
  },
  {
    path: PATHS.REGISTER,
    label: 'Register',
    requiresAuth: false,
  },
  {
    path: PATHS.FORGOT_PASSWORD,
    label: 'Forgot Password',
    requiresAuth: false,
  },
  {
    path: PATHS.RESET_PASSWORD,
    label: 'Reset Password',
    requiresAuth: false,
  },
  
  // Private routes (require authentication)
  {
    path: PATHS.HOME,
    label: 'Home',
    requiresAuth: true,
    roles: ['admin', 'user', 'collaborator'],
  },
  {
    path: PATHS.DASHBOARD,
    label: 'Dashboard',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  
  // Client routes
  {
    path: PATHS.CLIENTS,
    label: 'Clients',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  {
    path: PATHS.CLIENT_DETAILS,
    label: 'Client Details',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  
  // Collaborator routes
  {
    path: PATHS.COLLABORATORS,
    label: 'Collaborators',
    requiresAuth: true,
    roles: ['admin'],
  },
  
  // Routes
  {
    path: PATHS.ROUTES,
    label: 'Routes',
    requiresAuth: true,
    roles: ['admin', 'collaborator'],
  },
  
  // Loan routes
  {
    path: PATHS.LOAN_DETAILS,
    label: 'Loan Details',
    requiresAuth: true,
    roles: ['admin', 'user', 'collaborator'],
  },
  {
    path: PATHS.CONTROL_BALANCE,
    label: 'Control Balance',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  
  // Retanqueo routes
  {
    path: PATHS.RETANQUEO,
    label: 'Retanqueo',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  {
    path: PATHS.RETANQUEO_SOLICITUD,
    label: 'Solicitud Retanqueo',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  {
    path: PATHS.RETANQUEO_DESEMBOLSOS,
    label: 'Desembolsos Retanqueo',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  {
    path: PATHS.RETANQUEO_GESTION,
    label: 'Gestión Retanqueo',
    requiresAuth: true,
    roles: ['admin', 'user'],
  },
  
  // Settings routes
  {
    path: PATHS.SETTINGS,
    label: 'Settings',
    requiresAuth: true,
    roles: ['admin', 'user', 'collaborator'],
  },
];

// Helper function to check if a route requires authentication
export const routeRequiresAuth = (path: string): boolean => {
  // First find the route in our routes array
  const route = routes.find(r => r.path === path);
  
  // If the route exists and requires authentication, return true
  return route ? route.requiresAuth : false;
};

// Helper function to check if user has permission for a route
export const userHasRouteAccess = (path: string, userRoles: string[]): boolean => {
  // First find the route
  const route = routes.find(r => r.path === path);
  
  // If the route doesn't exist or doesn't require authentication, permit access
  if (!route || !route.requiresAuth) {
    return true;
  }
  
  // If the route doesn't have specific roles defined, allow access to any authenticated user
  if (!route.roles || route.roles.length === 0) {
    return true;
  }
  
  // Check if any of the user's roles match the route's required roles
  return userRoles.some(role => route.roles?.includes(role));
};
