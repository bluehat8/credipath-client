import { createContext, useContext, ReactNode } from 'react';
import { useRoutes } from 'hooks/routes/useRoutes';

type RoutesContextType = ReturnType<typeof useRoutes>;

const RoutesContext = createContext<RoutesContextType | undefined>(undefined);

export const RoutesProvider = ({ children }: { children: ReactNode }) => {
  const routes = useRoutes();
  
  return (
    <RoutesContext.Provider value={routes}>
      {children}
    </RoutesContext.Provider>
  );
};

export const useRoutesContext = () => {
  const context = useContext(RoutesContext);
  if (context === undefined) {
    throw new Error('useRoutesContext must be used within a RoutesProvider');
  }
  return context;
};

export default RoutesContext;
