"use client"

import type * as React from "react"
import { Check, Loader2, UserPlus, MapPin, Phone, Mail, FileText, User, Contact } from "lucide-react"
import { Button } from "components/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "components/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "components/components/ui/form"
import { Input } from "components/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"
import { Textarea } from "components/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"
import { useClientForm } from "hooks/forms/useClientForm"

export const ClientForm: React.FC = () => {
  const { form, isSubmitting, isSuccess, onSubmit } = useClientForm()

  return (
    <Card className="w-full max-w-6xl mx-auto shadow-xl border-0 bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden">
      <CardHeader className="space-y-4 bg-gradient-to-r from-green-900/80 to-zinc-800 text-white rounded-t-xl border-b border-green-800/30">
        <div className="flex items-center gap-4">
            <CardTitle className="text-2xl font-medium">Registro de clientes</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-8 px-6 sm:px-8 lg:px-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-8">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-1">
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-md transition-all duration-200"
                >
                  <User className="mr-2 h-4 w-4" />
                  Información Personal
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-md transition-all duration-200"
                >
                  <Contact className="mr-2 h-4 w-4" />
                  Información de Contacto
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-8">
                <div className="space-y-8">
                  

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-gray-200 font-medium">
                            Nombre del cliente <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa nombre"
                              {...field}
                              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-gray-200 font-medium">
                            Apellidos <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa apellidos"
                              {...field}
                              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <FormField
                      control={form.control}
                      name="routeId"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-gray-200 font-medium">
                            Ruta a asignar <span className="text-red-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                            <FormControl>
                              <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white focus:border-green-500 focus:ring-green-500/20 transition-all">
                                <SelectValue placeholder="Selecciona una ruta" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-zinc-900 border-zinc-700">
                              <SelectItem value="1" className="focus:bg-green-800/30 focus:text-white">
                                Ruta del norte
                              </SelectItem>
                              <SelectItem value="2" className="focus:bg-green-800/30 focus:text-white">
                                Masaya
                              </SelectItem>
                              <SelectItem value="3" className="focus:bg-green-800/30 focus:text-white">
                                Ruta del sur
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem className="col-span-full mt-2 space-y-3">
                          <FormLabel className="text-gray-200 font-medium flex items-center gap-2">
                            <div className="bg-green-900/30 p-1 rounded-md">
                              <FileText size={14} className="text-green-400" />
                            </div>
                            Notas
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Información adicional sobre el cliente"
                              className="resize-none bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 min-h-[120px] transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="mt-8">
                <div className="space-y-8">
              

                  <FormField
                    control={form.control}
                    name="direction"
                    render={({ field }) => (
                      <FormItem className="col-span-full space-y-3">
                        <FormLabel className="text-gray-200 font-medium flex items-center gap-2">
                          <div className="bg-green-900/30 p-1 rounded-md">
                            <MapPin size={14} className="text-green-400" />
                          </div>
                          Dirección <span className="text-red-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ingresa la dirección completa"
                            className="resize-none bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 min-h-[120px] transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <FormField
                      control={form.control}
                      name="cellphone"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-gray-200 font-medium flex items-center gap-2">
                            <div className="bg-green-900/30 p-1 rounded-md">
                              <Phone size={14} className="text-green-400" />
                            </div>
                            Teléfono celular <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ej: 88888888"
                              type="tel"
                              {...field}
                              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-gray-200 font-medium flex items-center gap-2">
                            <div className="bg-green-900/30 p-1 rounded-md">
                              <Mail size={14} className="text-green-400" />
                            </div>
                            Correo electrónico <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="ejemplo@correo.com"
                              type="email"
                              {...field}
                              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="landlinePhone"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-gray-200 font-medium flex items-center gap-2">
                          <div className="bg-green-900/30 p-1 rounded-md">
                            <Phone size={14} className="text-green-400" />
                          </div>
                          Teléfono fijo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: 22222222"
                            type="tel"
                            {...field}
                            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 transition-all"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <CardFooter className="flex justify-center pt-10 px-0">
              <Button
                type="submit"
                className="w-full sm:w-auto min-w-[250px] px-8 py-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg shadow-green-600/20 text-lg rounded-xl font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : isSuccess ? (
                  <Check className="mr-2 h-5 w-5" />
                ) : (
                  <FileText className="mr-2 h-5 w-5" />
                )}
                {isSubmitting ? "Registrando..." : isSuccess ? "¡Registrado!" : "Registrar Cliente"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
