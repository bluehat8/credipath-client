import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {LoginForm} from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CollaboratorsPage } from './pages/CollaboratorPage.tsx'; 
import { ClientDashboard } from './pages/ClientDashboard.tsx';


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
        <Route path="/collaborators" element={<CollaboratorsPage />} />
        <Route path="/clients" element={<ClientDashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
