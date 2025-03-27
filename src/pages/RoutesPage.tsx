"use client";
import React from "react";
import Rutas from "components/route/Rutas";
import QueryProvider from "utils/QueryProvider";
import { RouteProvider } from "context/RouteContext";

const App: React.FC = () => {
  return (
    <QueryProvider>
      <RouteProvider>
        <Rutas/>
      </RouteProvider>
    </QueryProvider>
  );
};

export default App;