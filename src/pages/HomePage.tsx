// pages/index.tsx
import * as React from 'react';
import { Layout } from '../components/sidebar/Layout';
import FilterButtons from 'components/dashboard/FilterButtons';
import PaymentWidget from 'components/dashboard/PaymentWidget';
import GeneralWidget from 'components/dashboard/GeneralWidget';
import ListWidget from 'components/dashboard/ListWidget';
import PendingPayments from 'components/dashboard/PendingPayments';

export const HomePage: React.FC = () => {
  const [filterDays, setFilterDays] = React.useState(0)

  const filterData = (days : number) => {
    setFilterDays(days)
  }

  return (
    <Layout>
      <h1 className="text-white">Bienvenido a la Página Principal</h1>
      <p className="text-gray-300">Este es el contenido principal de la página.</p>

      <section>
        <h1 className='text-white text-xl font-medium'>Dashboard</h1>
        <h2 className='text-white text-xl font-medium'>Seleccione una fecha:</h2>
        <FilterButtons onFilterChange={filterData}/>
        
        <div className='max-w-[400px] sm:max-w-[600px] md:max-w-[800px]'>
          <PaymentWidget filterDays={filterDays} />
          <GeneralWidget />
          <ListWidget />
          <PendingPayments />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;