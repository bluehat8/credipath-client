import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PATHS, userHasRouteAccess } from './routes';
import { useAuth } from '../context/AuthContext';

// Import layouts
import { MainLayout } from '../layouts/MainLayout';

// Import pages
import LoginPage from '../pages/auth/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ClientDashboard } from '../pages/ClientDashboard';
import { ClientDetails } from '../pages/ClientDetailsPage';
import { CollaboratorsPage } from '../pages/CollaboratorPage';
import Rutas from '../pages/RoutesPage';
import { LoanDetails } from '../pages/LoanDetails';
import { ControlBalancePage } from '../pages/ControlBalancePage';
import RetanqueoPage from '../pages/RetanqueoPage';
import SolicitudRetanqueo from '../components/retanqueo/SolicitudRetanqueo';
import Desembolso from '../components/retanqueo/Desembolso';
import GestionRetanqueo from '../pages/GestionRetanqueo';
import SettingsPage from '../pages/SettingsPage';

// Auth Guard component to protect routes
interface AuthGuardProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRoles = [] }) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  // Check role-based permissions if requiredRoles are specified
  if (requiredRoles.length > 0 && user) {
    // Verificar si el rol del usuario está en los roles requeridos
    const hasRequiredRole = requiredRoles.includes(user.role);
    
    if (!hasRequiredRole) {
      console.log(`Usuario con rol '${user.role}' no tiene permiso para acceder a ${location.pathname} que requiere roles: [${requiredRoles.join(', ')}]`);
      // Redirect to home if user doesn't have required role
      return <Navigate to={PATHS.HOME} replace />;
    }
  }

  // User is authenticated and has the required role, render the children
  return <>{children}</>;
};

// Public route component for non-authenticated pages
interface PublicRouteProps {
  children: React.ReactNode;
  restricted?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, restricted = false }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If the route is restricted and the user is authenticated, redirect to home
  if (restricted && isAuthenticated) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  // Route is not restricted or user is not authenticated, render the children
  return <>{children}</>;
};

// Main application router
export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path={PATHS.LOGIN}
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
        }
      />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        }
      >
        <Route index element={<Navigate to={PATHS.HOME} replace />} />
        
        {/* Home route */}
        <Route path={PATHS.HOME} element={<HomePage />} />
        
        {/* Client routes */}
        <Route 
          path={PATHS.CLIENTS} 
          element={
            <AuthGuard requiredRoles={['admin', 'user']}>
              <ClientDashboard />
            </AuthGuard>
          } 
        />
        <Route 
          path={PATHS.CLIENT_DETAILS} 
          element={
            <AuthGuard requiredRoles={['admin', 'user']}>
              <ClientDetails />
            </AuthGuard>
          }
        />
        
        {/* Collaborator routes */}
        <Route 
          path={PATHS.COLLABORATORS} 
          element={
            <AuthGuard requiredRoles={['admin']}>
              <CollaboratorsPage />
            </AuthGuard>
          } 
        />
        
        {/* Routes */}
        <Route 
          path={PATHS.ROUTES} 
          element={
            <AuthGuard requiredRoles={['admin', 'collaborator']}>
              <Rutas />
            </AuthGuard>
          } 
        />
        
        {/* Loan routes */}
        <Route 
          path={PATHS.LOAN_DETAILS} 
          element={
            <AuthGuard>
              <LoanDetails />
            </AuthGuard>
          } 
        />
        <Route 
          path={PATHS.CONTROL_BALANCE} 
          element={
            <AuthGuard requiredRoles={['admin', 'user']}>
              <ControlBalancePage />
            </AuthGuard>
          } 
        />
        
        {/* Retanqueo routes */}
        <Route 
          path={PATHS.RETANQUEO} 
          element={
            <AuthGuard requiredRoles={['admin', 'user']}>
              <RetanqueoPage />
            </AuthGuard>
          } 
        />
        <Route 
          path={PATHS.RETANQUEO_SOLICITUD} 
          element={
            <AuthGuard requiredRoles={['collaborator', 'admin']}>
              <SolicitudRetanqueo />
            </AuthGuard>
          } 
        />
        <Route 
          path={PATHS.RETANQUEO_DESEMBOLSOS} 
          element={
            <AuthGuard requiredRoles={['admin', 'user']}>
              <Desembolso />
            </AuthGuard>
          } 
        />
        <Route 
          path={PATHS.RETANQUEO_GESTION} 
          element={
            <AuthGuard requiredRoles={['admin', 'user']}>
              <GestionRetanqueo />
            </AuthGuard>
          } 
        />
        
        {/* Settings route */}
        <Route 
          path={PATHS.SETTINGS} 
          element={
            <AuthGuard>
              <SettingsPage />
            </AuthGuard>
          } 
        />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<Navigate to={PATHS.HOME} replace />} />
    </Routes>
  );
};

// AppRouter ya se exporta como una constante nombrada arriba
