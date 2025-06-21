
"use client"

import * as React from "react"
import { Check, Loader2, User, Contact } from "lucide-react"
import { Button } from "components/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "components/components/ui/form"
import { Input } from "components/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"
import { Textarea } from "components/components/ui/textarea"
import { useClientForm } from "hooks/forms/useClientForm"

export const ClientForm: React.FC = () => {
  const { form, isSubmitting, isSuccess, onSubmit } = useClientForm()
  const [activeTab, setActiveTab] = React.useState("personal")

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
                          value={field.value?.toString()}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500">
                              <SelectValue placeholder="Selecciona una ruta" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                            <SelectItem value="1">Ruta del norte</SelectItem>
                            <SelectItem value="2">Masaya</SelectItem>
                            <SelectItem value="3">Ruta del sur</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                      </FormItem>
                    )}
                  />

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
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4"> {/* Teléfono y Email en la misma fila */}
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
                          <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-200">
                            Correo <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="ejemplo@correo.com"
                              {...field}
                              className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="landlinePhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-200">Teléfono fijo</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Ej: 22222222"
                            {...field}
                            className="bg-zinc-700 border-zinc-600 text-white focus:ring-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" /> {/* Rojo más claro */}
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Botón de envío */}
              <div className="mt-8 pt-6 border-t border-zinc-700">
                <Button
                  type="submit"
                  onClick={onSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isSuccess ? (
                    <Check className="w-4 h-4" />
                  ) : null}
                  {isSubmitting ? "Registrando..." : isSuccess ? "¡Registrado!" : "Registrar Cliente"}
                </Button>
              </div>
            </div>
          </div>
        </Form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-500 mt-4">
          Los campos marcados con <span className="text-red-400">*</span> son obligatorios
        </p>
      </div>
    </div>
  )
}
