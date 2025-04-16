import React, { useState } from "react";
import { Button } from "components/components/ui/button";
import { Input } from "components/components/ui/input";
import { Label } from "components/components/ui/label";
import { Card } from "components/components/ui/card";
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "components/components/ui/alert";

export default function PasswordSettings() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Las contraseñas nuevas no coinciden");
      return;
    }
    
    if (formData.newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    
    // Aquí iría la lógica para cambiar la contraseña en el backend
    // Simulación de éxito
    setSuccess("Contraseña actualizada correctamente");
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    
    // Limpiar mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card className="p-4 border border-zinc-700 bg-zinc-800">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {success && (
          <Alert className="mb-4 bg-green-50 border-green-200 text-green-800">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-slate-50">Contraseña actual</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={formData.currentPassword}
                onChange={handleChange}
                className="border-zinc-700 bg-zinc-700 text-slate-50 focus:border-green-cpt focus:ring-green-cpt pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-slate-50">Nueva contraseña</Label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={formData.newPassword}
                onChange={handleChange}
                className="border-zinc-700 bg-zinc-700 text-slate-50 focus:border-green-cpt focus:ring-green-cpt pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-400">
              La contraseña debe tener al menos 8 caracteres
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-slate-50">Confirmar nueva contraseña</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border-zinc-700 bg-zinc-700 text-slate-50 focus:border-green-cpt focus:ring-green-cpt pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" className="bg-zinc-800 hover:bg-zinc-700 text-slate-50 hover:text-green-cpt">
              Actualizar contraseña
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
