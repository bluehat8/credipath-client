import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {LoginForm} from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CollaboratorsPage } from './pages/CollaboratorPage'; 
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientDetails } from './pages/ClientDetailsPage';
import { HomePage } from './pages/HomePage';
import { RoutesPage } from './pages/RoutesPage';
import { LoanDetails } from './pages/LoanDetails';
import { ControlBalancePage } from './pages/ControlBalancePage';
import RetanqueoPage from 'pages/RetanqueoPage';
import SolicitudRetanqueo from 'components/retanqueo/SolicitudRetanqueo';
import Desembolso from 'components/retanqueo/Desembolso';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Ruta principal que muestra el formulario de login */}
        <Route path="/" element={<LoginForm />} />
        {/* Ruta para la página de colaboradores */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
        <Route path="/clients" element={<ClientDashboard />} />
        <Route path="/details-client" element={<ClientDetails />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/loan-details" element={<LoanDetails />} />
        <Route path="/control-balance" element={<ControlBalancePage />} />
        
        <Route path="/retanqueo" element={<RetanqueoPage />} />

        <Route path='/solicitud' element={<SolicitudRetanqueo />} />
        <Route path='/desembolso' element={<Desembolso />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
