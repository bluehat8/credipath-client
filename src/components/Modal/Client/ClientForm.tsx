// import * as React from 'react';
// import { InputFieldClient } from './ClientInputField';
// import { ClientFormData } from './TypesClient';

// export const ClientForm: React.FC = () => {
//   const [formData, setFormData] = React.useState<ClientFormData>({
//     name: '',
//     lastname: '',
//     route: '',
//     note: '',
//     direction: '',
//     cellphone: '',
//     email: '',
//     landlinePhone: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="flex flex-col px-6 py-8 bg-white max-w-4xl mx-auto rounded-xl shadow-md">
//       <form onSubmit={handleSubmit} className="flex flex-col items-start w-full gap-6">
//         <h1 className="text-2xl font-extrabold text-neutral-800">Ingresar cliente</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//           <InputFieldClient label="Nombre del cliente" placeholder="Ingresa nombre" />
//           <InputFieldClient label="Apellidos" placeholder="Ingresa apellidos" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//           <div className="flex flex-col">
//             <label htmlFor="route" className="text-neutral-900">Ruta a asignar</label>
//             <select
//               id="route"
//               className="mt-2 px-3 py-2 border border-stone-300 rounded-xl text-neutral-800 w-full"
//               aria-label="Select route"
//             >
//               <option value="">Selecciona una ruta</option>
//               <option value="1">Ruta del norte</option>
//               <option value="2">Masaya</option>
//               <option value="3">Ruta del sur</option>


//             </select>
//           </div>
//           <InputFieldClient label="Notas" placeholder="Enter Note" />
//         </div>

//         <button
//           type="button"
//           className="flex items-center gap-3 mt-4 text-neutral-800"
//           aria-label="Toggle extra information"
//         >
//           <span>Información extra</span>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/2755f31392fe7a864c675c28ed8cb8399f8d4100b0dec2e6491abc121ab67257?placeholderIfAbsent=true&apiKey=7930382fac3c4525a2ab54962694cee8"
//             alt="Toggle extra information icon"
//             className="w-6 h-6"
//           />
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//           <InputFieldClient label="Direccion" placeholder="Ingresa la direccion" />
//           <InputFieldClient label="Teléfono celular" placeholder="Ingresa el número de teléfono" />
//           <InputFieldClient label="Correo" placeholder="Ingresa el correo electronico" />
//           <InputFieldClient label="Teléfono fijo" placeholder="Ingresa el teléfono fijo" />
//         </div>

//         <button
//           type="submit"
//           className="self-center px-6 py-3 mt-6 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800"
//         >
//           Crear
//         </button>
//       </form>
//     </div>
//   );
// };


// "use client"

// import * as React from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Check, ChevronDown, ChevronUp, Loader2 } from "lucide-react"

// import { Button } from "components/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components/components/ui/card"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "components/components/ui/form"
// import { Input } from "components/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"
// import { Textarea } from "components/components/ui/textarea"
// import { useToast } from "components/hooks/use-toast"

// // Esquema de validación para el formulario
// const clientFormSchema = z.object({
//   name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
//   lastname: z.string().min(2, { message: "Los apellidos deben tener al menos 2 caracteres" }),
//   route: z.string({ required_error: "Por favor selecciona una ruta" }),
//   note: z.string().optional(),
//   direction: z.string().min(5, { message: "La dirección debe tener al menos 5 caracteres" }),
//   cellphone: z.string().regex(/^\d{8}$/, { message: "El número debe tener 8 dígitos" }),
//   email: z.string().email({ message: "Correo electrónico inválido" }),
//   landlinePhone: z
//     .string()
//     .regex(/^\d{8}$/, { message: "El número debe tener 8 dígitos" })
//     .optional(),
// })

// type ClientFormValues = z.infer<typeof clientFormSchema>

// export const ClientForm: React.FC = () => {
//   const [showExtraInfo, setShowExtraInfo] = React.useState(false)
//   const [isSubmitting, setIsSubmitting] = React.useState(false)
//   const [isSuccess, setIsSuccess] = React.useState(false)
//   const { toast } = useToast()

//   // Configuración del formulario con React Hook Form y Zod
//   const form = useForm<ClientFormValues>({
//     resolver: zodResolver(clientFormSchema),
//     defaultValues: {
//       name: "",
//       lastname: "",
//       route: "",
//       note: "",
//       direction: "",
//       cellphone: "",
//       email: "",
//       landlinePhone: "",
//     },
//   })

//   const onSubmit = async (data: ClientFormValues) => {
//     setIsSubmitting(true)

//     try {
//       // Simulación de envío al servidor
//       await new Promise((resolve) => setTimeout(resolve, 1500))
//       console.log("Form data submitted:", data)

//       setIsSuccess(true)
//       toast({
//         title: "Cliente registrado",
//         description: `${data.name} ${data.lastname} ha sido registrado exitosamente.`,
//       })

//       // Resetear el formulario después de 2 segundos
//       setTimeout(() => {
//         form.reset()
//         setIsSuccess(false)
//       }, 2000)
//     } catch (error) {
//       toast({
//         title: "Error al registrar",
//         description: "Hubo un problema al registrar el cliente. Intenta nuevamente.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Card className="w-full max-w-4xl mx-auto shadow-lg border-0">
//       <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
//         <CardTitle className="text-2xl font-bold text-blue-800">Registro de Cliente</CardTitle>
//         <CardDescription>Ingresa la información del nuevo cliente para registrarlo en el sistema</CardDescription>
//       </CardHeader>

//       <CardContent className="pt-6">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium text-blue-700">Información básica</h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         Nombre del cliente <span className="text-red-500">*</span>
//                       </FormLabel>
//                       <FormControl>
//                         <Input placeholder="Ingresa nombre" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="lastname"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         Apellidos <span className="text-red-500">*</span>
//                       </FormLabel>
//                       <FormControl>
//                         <Input placeholder="Ingresa apellidos" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="route"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         Ruta a asignar <span className="text-red-500">*</span>
//                       </FormLabel>
//                       <Select onValueChange={field.onChange} defaultValue={field.value}>
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Selecciona una ruta" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="1">Ruta del norte</SelectItem>
//                           <SelectItem value="2">Masaya</SelectItem>
//                           <SelectItem value="3">Ruta del sur</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="note"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Notas</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="Información adicional sobre el cliente"
//                           className="resize-none"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             </div>

//             <div className="border-t pt-4">
//               <Button
//                 type="button"
//                 variant="ghost"
//                 className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
//                 onClick={() => setShowExtraInfo(!showExtraInfo)}
//               >
//                 <span>Información de contacto</span>
//                 {showExtraInfo ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//               </Button>
//             </div>

//             {showExtraInfo && (
//               <div className="space-y-4 animate-in fade-in-50 duration-300">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <FormField
//                     control={form.control}
//                     name="direction"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>
//                           Dirección <span className="text-red-500">*</span>
//                         </FormLabel>
//                         <FormControl>
//                           <Textarea placeholder="Ingresa la dirección completa" className="resize-none" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="cellphone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>
//                           Teléfono celular <span className="text-red-500">*</span>
//                         </FormLabel>
//                         <FormControl>
//                           <Input placeholder="Ej: 88888888" type="tel" {...field} />
//                         </FormControl>
//                         <FormDescription>Formato: 8 dígitos sin espacios ni guiones</FormDescription>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>
//                           Correo electrónico <span className="text-red-500">*</span>
//                         </FormLabel>
//                         <FormControl>
//                           <Input placeholder="ejemplo@correo.com" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="landlinePhone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Teléfono fijo</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Ej: 22222222" type="tel" {...field} />
//                         </FormControl>
//                         <FormDescription>Formato: 8 dígitos sin espacios ni guiones</FormDescription>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//             )}

//             <CardFooter className="flex justify-center pt-4 px-0">
//               <Button
//                 type="submit"
//                 className="w-full sm:w-auto px-8 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 ) : isSuccess ? (
//                   <Check className="mr-2 h-4 w-4" />
//                 ) : null}
//                 {isSubmitting ? "Registrando..." : isSuccess ? "Registrado" : "Registrar Cliente"}
//               </Button>
//             </CardFooter>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   )
// }



"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, Loader2, UserPlus, MapPin, Phone, Mail, FileText, User, Contact } from "lucide-react"

import { Button } from "components/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "components/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "components/components/ui/form"
import { Input } from "components/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"
import { Textarea } from "components/components/ui/textarea"
import { useToast } from "components/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"

const clientFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  lastname: z.string().min(2, { message: "Los apellidos deben tener al menos 2 caracteres" }),
  route: z.string({ required_error: "Por favor selecciona una ruta" }),
  note: z.string().optional(),
  direction: z.string().min(5, { message: "La dirección debe tener al menos 5 caracteres" }),
  cellphone: z.string().regex(/^\d{8}$/, { message: "El número debe tener 8 dígitos" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  landlinePhone: z
    .string()
    .regex(/^\d{8}$/, { message: "El número debe tener 8 dígitos" })
    .optional(),
})

type ClientFormValues = z.infer<typeof clientFormSchema>

export const ClientForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const { toast } = useToast()

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      route: "",
      note: "",
      direction: "",
      cellphone: "",
      email: "",
      landlinePhone: "",
    },
  })

  const onSubmit = async (data: ClientFormValues) => {
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form data submitted:", data)

      setIsSuccess(true)
      toast({
        title: "Cliente registrado",
        description: `${data.name} ${data.lastname} ha sido registrado exitosamente.`,
      })

      setTimeout(() => {
        form.reset()
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      toast({
        title: "Error al registrar",
        description: "Hubo un problema al registrar el cliente. Intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-6xl  mx-auto shadow-2xl border-0 bg-zinc-800">
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
                              className="] bg-sidebar text-white placeholder:text-gray-500 focus:border-[#50C271] "
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
                  <div className="flex items-center gap-2 text-green-cpt border-bpb-2">
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

