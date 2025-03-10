import * as React from 'react';
import FilterButtons from 'components/dashboard/FilterButtons';
import PaymentWidget from 'components/dashboard/PaymentWidget';
import GeneralWidget from 'components/dashboard/GeneralWidget';
import ListWidget from 'components/dashboard/ListWidget';
import PendingPayments from 'components/dashboard/PendingPayments';
import { DashboardHeader } from 'components/dashboard/DashboardHeader';
import { ThemeProvider } from 'context/ThemeContext';
import { MainSidebar } from 'components/sidebar/Sidebar';

export const HomePage: React.FC = () => {
  const [filterDays, setFilterDays] = React.useState(0)

  const filterData = (days : number) => {
    setFilterDays(days)
  }

  return (
    <ThemeProvider>
    <MainSidebar>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1 space-y-4 p-4 pt-4 md:p-4">
          <DashboardHeader />

          <div className="space-y-4">
            <FilterButtons />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <PaymentWidget className="col-span-2" />
              <GeneralWidget className="row-span-2" />
              <ListWidget className="col-span-2" />
            </div>

            <PendingPayments />
          </div>
        </div>
    </div>
    </MainSidebar>
    </ThemeProvider>
  );
};

export default HomePage;