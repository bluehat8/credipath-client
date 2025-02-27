// pages/index.tsx
import * as React from 'react';
import { Layout } from '../components/sidebar/Layout';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-white">Bienvenido a la Página Principal</h1>
      <p className="text-gray-300">Este es el contenido principal de la página.</p>
    </Layout>
  );
};

export default HomePage;