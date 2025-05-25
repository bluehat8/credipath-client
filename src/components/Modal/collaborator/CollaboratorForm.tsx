
import React, { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "components/components/ui/button";
import { Input } from "components/components/ui/input";
import { Label } from "components/components/ui/label";
import { Card } from "components/components/ui/card";
import { Collaborator } from "../../../hooks/collaborator/use-collaborator-service";
import { usePermissions, PermissionState } from "../../../hooks/collaborator/use-permissions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs";
import { X } from "lucide-react";

interface CollaboratorFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FormValues) => void;
  collaborator?: Collaborator; // Para modo edición
  isEditMode?: boolean;
}

interface FormValues {
  identifier: string
  name: string
  email: string
  password: string
  confirmPassword: string
  address: string
  mobile: string
  phone: string
  permissionState: PermissionState
}

const CollaboratorForm = ({ isOpen, onClose, onSave, collaborator, isEditMode = false }: CollaboratorFormProps) => {
  const [activeTab, setActiveTab] = useState("personal");
  
  const { 
    permissions: allPermissions,
    permissionsByModule,
    dynamicPermissions,
    uniqueModules,
    fetchPermissions,
    convertPermissionIdsToState,
    convertStateToPermissionIds,
    loading: permissionsLoading,
    isReady,
    getGroupedModules,
    getFriendlyModuleName,
    getFriendlyActionName
  } = usePermissions();
  
  useEffect(() => {
    fetchPermissions().catch(error => {
      console.error('Error al cargar permisos:', error);
    });
  }, [fetchPermissions]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<FormValues>({
    defaultValues: {
      identifier: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      mobile: "",
      phone: "",
      permissionState: {}
    },
  })

  const permissionState = watch("permissionState") || {}

  // Función para alternar un permiso
  const togglePermission = (permKey: string) => {
    const currentValue = permissionState[permKey] || false;
    setValue('permissionState', {
      ...permissionState,
      [permKey]: !currentValue
    }, { shouldValidate: true });
  }

  // Solo inicializa el formulario una vez por apertura de modal (no en cada render)
  useEffect(() => {
    if (!isOpen || !isReady) return;
    if (!isEditMode) {
      // Crear un estado de permisos inicial con todos los permisos en false
      const initialPermState: PermissionState = {};
      allPermissions.forEach(perm => {
        const permKey = `${perm.module}_${perm.action}`;
        initialPermState[permKey] = false;
      });
      reset({
        identifier: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        mobile: '',
        phone: '',
        permissionState: initialPermState
      });
    } else if (isEditMode && collaborator) {
      // Extraer los IDs de permisos del colaborador
      const permissionIds = Array.isArray(collaborator.permissions)
        ? collaborator.permissions.map((p: any) => p.id)
        : [];
      const permState = convertPermissionIdsToState(permissionIds);
      reset({
        identifier: collaborator.identifier || '',
        name: collaborator.name || '',
        email: collaborator.email || '',
        password: '',  
        confirmPassword: '',
        address: collaborator.address || '',
        mobile: collaborator.mobile || '',
        phone: collaborator.phone || '',
        permissionState: permState
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isReady]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    const permissionIds = convertStateToPermissionIds(data.permissionState);
    
    const { identifier, name, email, password, confirmPassword, address, mobile, phone } = data;
    
    const finalPayload = {
      identifier,
      name,
      email,
      password,
      confirmPassword,
      address,
      mobile,
      phone,
      role: 'collaborator',
      permissions: permissionIds 
    };
    
    if (isEditMode && !finalPayload.password) {
      finalPayload.password = "";
      finalPayload.confirmPassword = "";
    }
    
    console.log('Enviando datos del colaborador:', finalPayload);
    
    // Llamar a onSave con el payload final (typescript lo trata como any implícitamente)
    onSave(finalPayload as any);
  };

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto p-4">
      <div className="bg-primary-native border-green-native rounded-lg shadow-lg w-full max-w-screen-lg p-6 sm:p-8 lg:px-12 lg:py-10">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-100">
            {isEditMode ? 'Editar Colaborador' : 'Agregar Colaborador'}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-gray-200 hover:bg-gray-800"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 bg-zinc-800">
              <TabsTrigger value="personal" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Información Personal
              </TabsTrigger>
              <TabsTrigger
                value="permissions"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Permisos
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Contacto
              </TabsTrigger>
            </TabsList>

            <TabsContent value="permissions" className="space-y-6 mt-4">
              {/* Permisos de Prestamo */}
              <Card className="bg-card border-zinc-800 p-4">
                <fieldset>
                  <legend className="text-gray-300 font-medium mb-3">Permisos de Prestamo</legend>
                  <div className="flex items-center gap-2">
                    {['Agregar', 'Editar', 'Eliminar'].map(action => {
                      const perm = allPermissions.find(
                        p => p.module.toLowerCase() === 'prestamos' && p.action.toLowerCase() === action.toLowerCase()
                      );
                      if (!perm) return null;
                      const permKey = `${perm.module}_${perm.action}`;
                      const isActive = permissionState[permKey] || false;
                      return (
                        <Button
                          key={perm.id}
                          type="button"
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            isActive
                              ? (action === 'Eliminar'
                                  ? 'bg-red-600 text-white hover:bg-red-500'
                                  : 'bg-green-600 text-white hover:bg-green-500')
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                          onClick={() => togglePermission(permKey)}
                        >
                          {action}
                        </Button>
                      );
                    })}
                  </div>
                </fieldset>
              </Card>

              {/* Permisos de Pago */}
              <Card className="bg-card border-zinc-800 p-4">
                <fieldset>
                  <legend className="text-gray-300 font-medium mb-3">Permisos de Pago</legend>
                  <div className="flex items-center gap-2">
                    {['Agregar', 'Editar', 'Eliminar'].map(action => {
                      const perm = allPermissions.find(
                        p => p.module.toLowerCase() === 'pagos' && p.action.toLowerCase() === action.toLowerCase()
                      );
                      if (!perm) return null;
                      const permKey = `${perm.module}_${perm.action}`;
                      const isActive = permissionState[permKey] || false;
                      return (
                        <Button
                          key={perm.id}
                          type="button"
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            isActive
                              ? (action === 'Eliminar'
                                  ? 'bg-red-600 text-white hover:bg-red-500'
                                  : 'bg-green-600 text-white hover:bg-green-500')
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                          onClick={() => togglePermission(permKey)}
                        >
                          {action}
                        </Button>
                      );
                    })}
                  </div>
                </fieldset>
              </Card>

              {/* Permisos de Módulo */}
              <Card className="bg-card border-zinc-800 p-4">
                <fieldset>
                  <legend className="text-gray-300 font-medium mb-3">Permisos de Módulo</legend>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { module: 'Colaboradores', label: 'Colaboradores' },
                        { module: 'PagosVencidos', label: 'Pagos Vencidos' },
                        { module: 'PagosProximos', label: 'Próximos Pagos' }
                      ].map(({ module, label }) => {
                        const perm = allPermissions.find(
                          p => p.module.toLowerCase() === module.toLowerCase()
                        );
                        if (!perm) return null;
                        const permKey = `${perm.module}_${perm.action}`;
                        const isActive = permissionState[permKey] || false;
                        return (
                          <Button
                            key={perm.id}
                            type="button"
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              isActive
                                ? 'bg-green-600 text-white hover:bg-green-500'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                            onClick={() => togglePermission(permKey)}
                          >
                            {label}
                          </Button>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { module: 'PagoPrestamos', label: 'Abonar Préstamo' },
                        { module: 'Reportes', label: 'Reporte Estimado VS Real' }
                      ].map(({ module, label }) => {
                        const perm = allPermissions.find(
                          p => p.module.toLowerCase() === module.toLowerCase()
                        );
                        if (!perm) return null;
                        const permKey = `${perm.module}_${perm.action}`;
                        const isActive = permissionState[permKey] || false;
                        return (
                          <Button
                            key={perm.id}
                            type="button"
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              isActive
                                ? 'bg-green-600 text-white hover:bg-green-500'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                            onClick={() => togglePermission(permKey)}
                          >
                            {label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>
              </Card>
            </TabsContent>

            <TabsContent value="personal" className="mt-4">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="identifier" className="text-gray-300">
                    Identificador
                  </Label>
                  <Input
                    id="identifier"
                    placeholder="Identificador"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("identifier", { required: "Este campo es requerido" })}
                  />
                  {errors.identifier && <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>}
                </div>
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    placeholder="Nombre"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("name", { required: "Este campo es requerido" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                  {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 mt-4">
                <div>
                  <Label htmlFor="password" className="text-gray-300">
                    Contraseña
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("password", { required: "Este campo es requerido" })}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-300">
                    Repetir contraseña
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repetir contraseña"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("confirmPassword", {
                      required: "Este campo es requerido",
                      validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-4">
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <Label htmlFor="address" className="text-gray-300">
                    Dirección
                  </Label>
                  <Input
                    id="address"
                    placeholder="Dirección"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("address")}
                  />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-gray-300">
                    Celular
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Celular"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("mobile")}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Teléfono"
                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    {...register("phone")}
                  />
                </div>
              </div>
            </TabsContent>

          </Tabs>

          <div className="flex justify-end space-x-4 mt-8 pt-4 border-t border-gray-700">
            <Button
              type="button"
              variant="outline"
              className="px-6 py-2 bg-gray-700 text-gray-200 border-gray-600 rounded-lg hover:bg-gray-600"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CollaboratorForm
