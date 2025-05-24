import * as React from "react";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number;
};

export const toast = ({ title, description, variant = "default", duration = 3000 }: ToastProps) => {
  // En un entorno de producción, esto se conectaría con un sistema real de toast
  // Por ahora, simplemente mostramos en consola y mostramos una alerta simple
  console.log(`[${variant}] ${title}: ${description}`);
  
  // Mostrar alerta para el usuario en el desarrollo
  if (variant === "destructive") {
    alert(`Error: ${title}\n${description}`);
  } else {
    alert(`${title}\n${description}`);
  }
  
  // Retornar un objeto que simula la interfaz de un sistema de toast
  return {
    id: Date.now().toString(),
    dismiss: () => {},
    update: (props: ToastProps) => {}
  };
};
