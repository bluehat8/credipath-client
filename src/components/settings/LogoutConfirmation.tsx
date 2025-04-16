import React from "react";
import { Button } from "components/components/ui/button";
import { Card } from "components/components/ui/card";
import { AlertTriangle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LogoutConfirmation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    // Por ejemplo, eliminar tokens de autenticación, limpiar el estado, etc.
    
    // Redirigir al usuario a la página de inicio de sesión
    navigate("/auth/login");
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 border border-zinc-700 bg-zinc-800">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-slate-50">¿Estás seguro que deseas cerrar sesión?</h3>
            <p className="text-slate-400">
              Al cerrar sesión, tendrás que volver a iniciar sesión para acceder a tu cuenta.
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="border-zinc-700 text-slate-50 hover:bg-zinc-700"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-zinc-800 hover:bg-zinc-700 text-slate-50 hover:text-green-cpt flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesión</span>
            </Button>
          </div>
        </div>
      </Card>
      
      <div className="space-y-4 mt-8">
        <h4 className="text-sm font-medium text-slate-50">Información de sesión</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-zinc-700 rounded-md border border-zinc-600">
            <p className="text-sm font-medium text-slate-400">Último inicio de sesión</p>
            <p className="text-sm text-slate-50">15 de abril, 2025 - 10:30 AM</p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-md border border-zinc-600">
            <p className="text-sm font-medium text-slate-400">Dispositivo</p>
            <p className="text-sm text-slate-50">Windows - Chrome</p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-md border border-zinc-600">
            <p className="text-sm font-medium text-slate-400">Ubicación</p>
            <p className="text-sm text-slate-50">Ciudad de México, México</p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-md border border-zinc-600">
            <p className="text-sm font-medium text-slate-400">Dirección IP</p>
            <p className="text-sm text-slate-50">192.168.1.XXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
