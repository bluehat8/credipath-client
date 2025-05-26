import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { MainSidebar } from '../components/sidebar/Sidebar';
import { ThemeProvider } from '../context/ThemeContext';
import { usePermissionStore } from '../store/usePermissionStore';
import { Toaster } from 'react-hot-toast';


export const MainLayout = () => {
  const fetchPermissions = usePermissionStore(state => state.fetchPermissions);

  useEffect(() => {
    console.log('MainLayout: iniciando fetch de permisos');
    fetchPermissions()
      .then(() => {
        console.log('MainLayout: permisos cargados correctamente');
        // Verificar que el store se actualizó
        const permisos = usePermissionStore.getState().permissions;
        console.log('MainLayout: permisos en store después de fetch:', permisos);
      })
      .catch(error => {
        console.error('MainLayout: error al cargar permisos:', error);
      });
  }, [fetchPermissions]);

  return (
    <ThemeProvider>
      <Toaster
        position="top-right"
        gutter={16}
        toastOptions={{
          className: 'toast-glass',
          duration: 4000,
          style: {
            background: 'transparent',
            color: 'white',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: 'white',
            },
          },
          loading: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: 'transparent',
            },
          },
        }}
      />
      <MainSidebar>
        <Outlet />
      </MainSidebar>
    </ThemeProvider>
  );
};
