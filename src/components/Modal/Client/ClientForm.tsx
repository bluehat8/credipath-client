
"use client"

import * as React from "react"
import { Check, Loader2, User, Contact } from "lucide-react"
import { Button } from "components/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "components/components/ui/form"
import { Input } from "components/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"
import { Textarea } from "components/components/ui/textarea"
import { useClientForm } from "hooks/forms/useClientForm"
import { useSimpleRoutes } from "hooks/routes/useSimpleRoutes"

export const ClientForm: React.FC = () => {
  const { form, isSubmitting, isSuccess, onSubmit } = useClientForm()
  const [activeTab, setActiveTab] = React.useState<"personal" | "contact">("personal")
  const { routes = [], isLoading: isLoadingRoutes, error: routesError } = useSimpleRoutes()

  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Registro de clientes</h1>
          <p className="text-zinc-400">Complete la información del cliente</p>
        </div>

        {/* Formulario */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
          <div className="bg-zinc-800 rounded-xl shadow-lg border border-zinc-700">
            {/* Tabs */}
            <div className="border-b border-zinc-700">
              <nav className="flex">
                <button
                  type="button"
                  onClick={() => setActiveTab("personal")}
                  className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition-colors rounded-tl-xl ${
                    activeTab === "personal"
                      ? "border-green-500 text-green-400 bg-zinc-700/50"
                      : "border-transparent text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  <User className="w-4 h-4 inline mr-2" />
                  Información Personal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("contact")}
                  className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition-colors rounded-tr-xl ${
                    activeTab === "contact"
                      ? "border-green-500 text-green-400 bg-zinc-700/50"
                      : "border-transparent text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  <Contact className="w-4 h-4 inline mr-2" />
                  Información de Contacto
                </button>
              </nav>
            </div>

            <div className="p-6">
              {/* Tab Personal */}
              {activeTab === "personal" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4"> {/* Nombre y Apellido en la misma fila */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Nombre <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa nombre"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Apellidos <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa apellidos"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="identification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Identificación <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa la identificación"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="routeId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Ruta a asignar <span className="text-red-400">*</span>
                          </FormLabel>
                          <Select 
                            onValueChange={(value) => field.onChange(Number(value))} 
                            value={field.value ? field.value.toString() : ""}
                            disabled={isLoadingRoutes}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500">
                                <SelectValue placeholder={isLoadingRoutes ? "Cargando rutas..." : "Selecciona una ruta"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                              {routesError ? (
                                <div className="py-2 px-4 text-sm text-red-400">{routesError}</div>
                              ) : routes.length > 0 ? (
                                routes.map((route) => (
                                  <SelectItem key={route.id} value={route.id.toString()}>
                                    {route.name}
                                  </SelectItem>
                                ))
                              ) : (
                                <div className="py-2 px-4 text-sm text-zinc-400">No hay rutas disponibles</div>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-200">Notas</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Información adicional"
                            {...field}
                            className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Tab Contacto */}
              {activeTab === "contact" && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="direction"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Dirección <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ingresa la dirección completa"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              rows={2}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="homeAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Dirección de casa
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Dirección de residencia"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              rows={2}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Dirección de negocio
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Dirección del negocio"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              rows={2}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="cellphone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-zinc-200">
                              Teléfono <span className="text-red-400">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Ej: 88888888"
                                {...field}
                                className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="landlinePhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-zinc-200">
                              Teléfono fijo
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Ej: 22222222"
                                {...field}
                                className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-zinc-200">
                              Correo electrónico
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="ejemplo@correo.com"
                                {...field}
                                className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-zinc-200">
                              Código
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Código del cliente"
                                {...field}
                                className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="municipality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Municipio
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Municipio"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Ciudad
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ciudad"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="neighborhood"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Barrio/Colonia
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Barrio o colonia"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-200">Género</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ''}>
                          <FormControl>
                            <SelectTrigger className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500">
                              <SelectValue placeholder="Selecciona un género" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                            <SelectItem value="masculino">Masculino</SelectItem>
                            <SelectItem value="femenino">Femenino</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                            <SelectItem value="prefiero-no-decir">Prefiero no decir</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />


                </div>
              )}

              {/* Botón de envío */}
              <div className="mt-8 pt-6 border-t border-zinc-700">
                <Button
                  type="submit"
                  disabled={isSubmitting || isLoadingRoutes}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isSuccess ? (
                    <Check className="w-4 h-4" />
                  ) : null}
                  {isLoadingRoutes ? "Cargando rutas..." : isSubmitting ? "Registrando..." : isSuccess ? "¡Registrado!" : "Registrar Cliente"}
                </Button>
              </div>
            </div>
          </div>
          </form>
        </Form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-500 mt-4">
          Los campos marcados con <span className="text-red-400">*</span> son obligatorios
        </p>
      </div>
    </div>
  )
}
