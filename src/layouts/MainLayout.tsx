import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { MainSidebar } from '../components/sidebar/Sidebar';
import { ThemeProvider } from '../context/ThemeContext';
import { usePermissionStore } from '../store/usePermissionStore';

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
      <MainSidebar>
        <Outlet />
      </MainSidebar>
    </ThemeProvider>
  );
};
