import * as React from "react"
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
    <Card className="w-full max-w-6xl mx-auto shadow-2xl border-0 bg-zinc-800">
      <CardHeader className="space-y-4 bg-card text-white rounded-t-xl pb-8">
        <div className="flex items-center gap-3">
          <UserPlus className="h-8 w-8" />
          <div>
            <CardTitle className="text-2xl font-medium">Registro de clientes</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-8 px-8 sm:px-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-sidebar">
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-green-native data-[state=active]:text-white"
                >
                  <User className="mr-2 h-4 w-4" />
                  Información Personal
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-green-native data-[state=active]:text-white"
                >
                  <Contact className="mr-2 h-4 w-4" />
                  Información de Contacto
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-green-cpt border-b border-[#3c5543] pb-2">
                    <UserPlus size={20} />
                    <h3 className="text-lg font-semibold">Datos Personales</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">
                            Nombre del cliente <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa nombre"
                              {...field}
                              className="bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271]"
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
                        <FormItem>
                          <FormLabel className="text-gray-300">
                            Apellidos <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa apellidos"
                              {...field}
                              className="border-[#3c5543] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] focus:ring-[#50C271]/20"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="route"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">
                            Ruta a asignar <span className="text-red-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-[#3c5543] bg-sidebar text-white focus:border-[#50C271] focus:ring-[#50C271]/20">
                                <SelectValue placeholder="Selecciona una ruta" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-sidebar border-[#3c5543]">
                              <SelectItem value="1">Ruta del norte</SelectItem>
                              <SelectItem value="2">Masaya</SelectItem>
                              <SelectItem value="3">Ruta del sur</SelectItem>
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
                        <FormItem className="col-span-full mt-4">
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <FileText size={16} />
                            Notas
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Información adicional sobre el cliente"
                              className="resize-none border-[#3c5543] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] focus:ring-[#50C271]/20 min-h-[100px]"
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

              <TabsContent value="contact" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-green-cpt border-b pb-2">
                    <Mail size={20} />
                    <h3 className="text-lg font-semibold">Datos de Contacto</h3>
                  </div>

                  <FormField
                    control={form.control}
                    name="direction"
                    render={({ field }) => (
                      <FormItem className="col-span-full">
                        <FormLabel className="text-gray-300 flex items-center gap-2">
                          <MapPin size={16} />
                          Dirección <span className="text-red-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ingresa la dirección completa"
                            className="resize-none border-[#3c5543] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] focus:ring-[#50C271]/20 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <FormField
                      control={form.control}
                      name="cellphone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <Phone size={16} />
                            Teléfono celular <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ej: 88888888"
                              type="tel"
                              {...field}
                              className="border-[#3c5543] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] focus:ring-[#50C271]/20"
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
                        <FormItem>
                          <FormLabel className="text-gray-300 flex items-center gap-2">
                            <Mail size={16} />
                            Correo electrónico <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="ejemplo@correo.com"
                              type="email"
                              {...field}
                              className="border-[#3c5543] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] focus:ring-[#50C271]/20"
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
                      <FormItem className="mt-4">
                        <FormLabel className="text-gray-300 flex items-center gap-2">
                          <Phone size={16} />
                          Teléfono fijo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: 22222222"
                            type="tel"
                            {...field}
                            className="border-[#3c5543] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] focus:ring-[#50C271]/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <CardFooter className="flex justify-center pt-8 px-0">
              <Button
                type="submit"
                className="w-full sm:w-auto min-w-[250px] px-8 py-3 bg-green-native hover:bg-[#44995C] transition-all duration-300 shadow-lg shadow-[#50C271]/25 text-lg"
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