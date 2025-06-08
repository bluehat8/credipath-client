"use client";
import React from "react";
import Rutas from "components/route/Rutas";
import { QueryClient, QueryClientProvider } from "react-query";
import { RoutesProvider } from "context/RoutesContext";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const RoutesPage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesProvider>
        <Rutas />
      </RoutesProvider>
    </QueryClientProvider>
  );
};

export default RoutesPage;