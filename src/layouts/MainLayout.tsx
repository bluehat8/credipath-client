import { Outlet } from 'react-router-dom';
import { MainSidebar } from '../components/sidebar/Sidebar';
import { ThemeProvider } from '../context/ThemeContext';

export const MainLayout = () => {
  return (
    <ThemeProvider>
      <MainSidebar>
        <Outlet />
      </MainSidebar>
    </ThemeProvider>
  );
};
