import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import LoginPage  from './pages/auth/LoginPage';
import { CollaboratorsPage } from './pages/CollaboratorPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientDetails } from './pages/ClientDetailsPage';
import { HomePage } from './pages/HomePage';
import Rutas from './pages/RoutesPage';
import { LoanDetails } from './pages/LoanDetails';
import { ControlBalancePage } from './pages/ControlBalancePage';
import RetanqueoPage from './pages/RetanqueoPage';
import SolicitudRetanqueo from './components/retanqueo/SolicitudRetanqueo';
import Desembolso from './components/retanqueo/Desembolso';

export const App = () => {
  // Aquí puedes agregar tu lógica de autenticación
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<Navigate to="/home" replace />} />
          {/* <Route path="dashboard" element={<DashboardPage />} /> */}
          
          {/* Rutas de clientes */}
          <Route path="clients" element={<ClientDashboard />} />
          <Route path="details-client" element={<ClientDetails />} />
          
          {/* Rutas de colaboradores */}
          <Route path="collaborators" element={<CollaboratorsPage />} />
          
          {/* Otras rutas */}
          <Route path="home" element={<HomePage />} />
          <Route path="routes" element={<Rutas />} />
          <Route path="loan-details" element={<LoanDetails />} />
          <Route path="control-balance" element={<ControlBalancePage />} />
          <Route path="retanqueo" element={<RetanqueoPage />} />
          <Route path="solicitud" element={<SolicitudRetanqueo />} />
          <Route path="/retanqueo/desembolsos" element={<Desembolso />} />
        </Route>

        {/* Ruta 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
