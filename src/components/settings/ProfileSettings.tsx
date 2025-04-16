import React, { useState } from "react";
import { Button } from "components/components/ui/button";
import { Input } from "components/components/ui/input";
import { Label } from "components/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "components/components/ui/avatar";
import { Card } from "components/components/ui/card";
import { Upload } from "lucide-react";

export default function ProfileSettings() {
  const [user, setUser] = useState({
    name: "Administrador",
    email: "admin@credipath.com",
    phone: "+52 555 123 4567",
    role: "Administrador",
    avatarUrl: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios en el backend
    setIsEditing(false);
    // Mostrar notificación de éxito
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback className="bg-zinc-800 text-white text-xl">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-medium text-slate-50">{user.name}</h3>
          <p className="text-sm text-slate-400">{user.role}</p>
          
          <div className="mt-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-zinc-700 text-slate-50 hover:bg-zinc-700 hover:text-green-cpt">
              <Upload className="h-4 w-4" />
              <span>Cambiar foto</span>
            </Button>
          </div>
        </div>
      </div>

      <Card className="p-4 border border-zinc-700 bg-zinc-800">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-50">Nombre completo</Label>
              <Input
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="border-zinc-700 bg-zinc-700 text-slate-50 focus:border-green-cpt focus:ring-green-cpt"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-50">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="border-zinc-700 bg-zinc-700 text-slate-50 focus:border-green-cpt focus:ring-green-cpt"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-50">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="border-zinc-700 bg-zinc-700 text-slate-50 focus:border-green-cpt focus:ring-green-cpt"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-slate-50">Rol</Label>
              <Input
                id="role"
                name="role"
                value={user.role}
                disabled
                className="border-zinc-700 bg-zinc-600 text-slate-50"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            {isEditing ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="border-zinc-700 text-slate-50 hover:bg-zinc-700"
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-zinc-800 hover:bg-zinc-700 text-slate-50 hover:text-green-cpt">
                  Guardar cambios
                </Button>
              </>
            ) : (
              <Button
                type="button"
                className="bg-zinc-800 hover:bg-zinc-700 text-slate-50 hover:text-green-cpt"
                onClick={() => setIsEditing(true)}
              >
                Editar perfil
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
