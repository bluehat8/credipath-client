// interface CollaboratorFormProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: () => void;
// }

// const CollaboratorForm = ({ isOpen, onClose, onSave }: CollaboratorFormProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-primary-native border-green-native rounded-lg shadow-lg w-full max-w-screen-lg p-6 sm:p-8 lg:px-12 lg:py-10">
//         <div className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h2 className="text-xl lg:text-2xl font-semibold text-gray-100">Agregar Colaborador</h2>
//           <button
//             className="text-gray-400 hover:text-gray-200"
//             aria-label="Cerrar"
//             onClick={onClose}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         <form className="mt-6 space-y-6">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="space-y-4">
//               <label htmlFor="identifier" className="block text-gray-300">Identificador</label>
//               <input
//                 type="text"
//                 id="identifier"
//                 placeholder="Identificador"
//                 className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />

//               <label htmlFor="name" className="block text-gray-300">Nombre</label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Nombre"
//                 className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />

//               <label htmlFor="email" className="block text-gray-300">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />

//               <label htmlFor="password" className="block text-gray-300">Contraseña</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Contraseña"
//                 className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />

//               <label htmlFor="confirmPassword" className="block text-gray-300">Repetir contraseña</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 placeholder="Repetir contraseña"
//                 className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />
//             </div>

//             <div className="space-y-4 lg:col-span-2">
//               <fieldset>
//                 <legend className="text-gray-300 font-medium">Permisos de Prestamo</legend>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
//                     >
//                       Agregar
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500"
//                     >
//                       Editar
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
//                     >
//                       Eliminar
//                     </button>
//                   </div>
//                 </div>
//               </fieldset>

//               <fieldset>
//                 <legend className="text-gray-300 font-medium">Permisos de Pago</legend>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
//                     >
//                       Agregar
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500"
//                     >
//                       Editar
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
//                     >
//                       Eliminar
//                     </button>
//                   </div>
//                 </div>
//               </fieldset>

//               <fieldset>
//                 <legend className="text-gray-300 font-medium">Permisos de Módulo</legend>
//                 <div className="space-y-2">
//                   <div className="grid grid-cols-3 gap-4">
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-permission active text-white rounded-lg hover:bg-green-500"
//                     >
//                       Colaboradores
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-permission rounded-lg hover:bg-gray-500"
//                     >
//                       Pagos Vencidos
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-permission active text-white rounded-lg hover:bg-green-500"
//                     >
//                       Próximos Pagos
//                     </button>
//                   </div>

//                   <div className="grid grid-cols-2 mt-3 gap-4">
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-permission active text-white rounded-lg hover:bg-green-500"
//                     >
//                       Abonar Préstamo
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-permission active text-white rounded-lg hover:bg-green-500"
//                     >
//                       Reporte Estimado VS Real
//                     </button>
//                   </div>
//                 </div>
//               </fieldset>
//             </div>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-3">
//             <label htmlFor="address" className="block text-gray-300">Dirección</label>
//             <input
//               type="text"
//               id="address"
//               placeholder="Dirección"
//               className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//             />

//             <label htmlFor="mobile" className="block text-gray-300">Celular</label>
//             <input
//               type="tel"
//               id="mobile"
//               placeholder="Celular"
//               className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//             />

//             <label htmlFor="phone" className="block text-gray-300">Teléfono</label>
//             <input
//               type="tel"
//               id="phone"
//               placeholder="Teléfono"
//               className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//             />
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               className="px-6 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500"
//               onClick={onClose}
//             >
//               Cancelar
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
//             >
//               Guardar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CollaboratorForm;


// "use client"

// import { X } from "lucide-react"
// import { Button } from "components/components/ui/button"
// import { Input } from "components/components/ui/input"
// import { Label } from "components/components/ui/label"
// import { Card } from "components/components/ui/card"

// interface CollaboratorFormProps {
//   isOpen: boolean
//   onClose: () => void
//   onSave: () => void
// }

// const CollaboratorForm = ({ isOpen, onClose, onSave }: CollaboratorFormProps) => {
//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto p-4">
//       <div className="bg-primary-native border-green-native rounded-lg shadow-lg w-full max-w-screen-lg p-6 sm:p-8 lg:px-12 lg:py-10">
//         <div className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h2 className="text-xl lg:text-2xl font-semibold text-gray-100">Agregar Colaborador</h2>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="text-gray-400 hover:text-gray-200 hover:bg-gray-800"
//             onClick={onClose}
//           >
//             <X className="h-5 w-5" />
//           </Button>
//         </div>

//         <form className="mt-6 space-y-6">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="identifier" className="text-gray-300">
//                   Identificador
//                 </Label>
//                 <Input
//                   type="text"
//                   id="identifier"
//                   placeholder="Identificador"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="name" className="text-gray-300">
//                   Nombre
//                 </Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   placeholder="Nombre"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="email" className="text-gray-300">
//                   Email
//                 </Label>
//                 <Input
//                   type="email"
//                   id="email"
//                   placeholder="Email"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="password" className="text-gray-300">
//                   Contraseña
//                 </Label>
//                 <Input
//                   type="password"
//                   id="password"
//                   placeholder="Contraseña"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="confirmPassword" className="text-gray-300">
//                   Repetir contraseña
//                 </Label>
//                 <Input
//                   type="password"
//                   id="confirmPassword"
//                   placeholder="Repetir contraseña"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 />
//               </div>
//             </div>

//             <div className="space-y-5 lg:col-span-2">
//               <Card className="bg-gray-800 border-gray-700 p-4">
//                 <fieldset>
//                   <legend className="text-gray-300 font-medium mb-3">Permisos de Prestamo</legend>
//                   <div className="flex items-center gap-2">
//                     <Button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//                       Agregar
//                     </Button>
//                     <Button type="button" className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500">
//                       Editar
//                     </Button>
//                     <Button type="button" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
//                       Eliminar
//                     </Button>
//                   </div>
//                 </fieldset>
//               </Card>

//               <Card className="bg-gray-800 border-gray-700 p-4">
//                 <fieldset>
//                   <legend className="text-gray-300 font-medium mb-3">Permisos de Pago</legend>
//                   <div className="flex items-center gap-2">
//                     <Button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//                       Agregar
//                     </Button>
//                     <Button type="button" className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500">
//                       Editar
//                     </Button>
//                     <Button type="button" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
//                       Eliminar
//                     </Button>
//                   </div>
//                 </fieldset>
//               </Card>

//               <Card className="bg-gray-800 border-gray-700 p-4">
//                 <fieldset>
//                   <legend className="text-gray-300 font-medium mb-3">Permisos de Módulo</legend>
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-3 gap-4">
//                       <Button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//                         Colaboradores
//                       </Button>
//                       <Button
//                         type="button"
//                         className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600"
//                       >
//                         Pagos Vencidos
//                       </Button>
//                       <Button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//                         Próximos Pagos
//                       </Button>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <Button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//                         Abonar Préstamo
//                       </Button>
//                       <Button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//                         Reporte Estimado VS Real
//                       </Button>
//                     </div>
//                   </div>
//                 </fieldset>
//               </Card>
//             </div>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-3">
//             <div>
//               <Label htmlFor="address" className="text-gray-300">
//                 Dirección
//               </Label>
//               <Input
//                 type="text"
//                 id="address"
//                 placeholder="Dirección"
//                 className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <Label htmlFor="mobile" className="text-gray-300">
//                 Celular
//               </Label>
//               <Input
//                 type="tel"
//                 id="mobile"
//                 placeholder="Celular"
//                 className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <Label htmlFor="phone" className="text-gray-300">
//                 Teléfono
//               </Label>
//               <Input
//                 type="tel"
//                 id="phone"
//                 placeholder="Teléfono"
//                 className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <Button
//               type="button"
//               variant="outline"
//               className="px-6 py-2 bg-gray-700 text-gray-200 border-gray-600 rounded-lg hover:bg-gray-600"
//               onClick={onClose}
//             >
//               Cancelar
//             </Button>
//             <Button
//               type="submit"
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
//               onClick={(e) => {
//                 e.preventDefault()
//                 onSave()
//               }}
//             >
//               Guardar
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CollaboratorForm


// "use client"
// import { X } from "lucide-react"
// import { useForm, type SubmitHandler } from "react-hook-form"
// import { Button } from "components/components/ui/button"
// import { Input } from "components/components/ui/input"
// import { Label } from "components/components/ui/label"
// import { Card } from "components/components/ui/card"

// interface CollaboratorFormProps {
//   isOpen: boolean
//   onClose: () => void
//   onSave: (data: FormValues) => void
// }

// // Definición de la estructura de datos del formulario
// interface FormValues {
//   identifier: string
//   name: string
//   email: string
//   password: string
//   confirmPassword: string
//   address: string
//   mobile: string
//   phone: string
//   permissions: {
//     loan: {
//       add: boolean
//       edit: boolean
//       delete: boolean
//     }
//     payment: {
//       add: boolean
//       edit: boolean
//       delete: boolean
//     }
//     modules: {
//       collaborators: boolean
//       overduePayments: boolean
//       upcomingPayments: boolean
//       loanPayment: boolean
//       report: boolean
//     }
//   }
// }

// const CollaboratorForm = ({ isOpen, onClose, onSave }: CollaboratorFormProps) => {
//   // Inicializar React Hook Form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm<FormValues>({
//     defaultValues: {
//       identifier: "",
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       address: "",
//       mobile: "",
//       phone: "",
//       permissions: {
//         loan: {
//           add: false,
//           edit: false,
//           delete: false,
//         },
//         payment: {
//           add: false,
//           edit: false,
//           delete: false,
//         },
//         modules: {
//           collaborators: false,
//           overduePayments: false,
//           upcomingPayments: false,
//           loanPayment: false,
//           report: false,
//         },
//       },
//     },
//   })

//   // Observar los valores actuales para reflejar el estado en la UI
//   const permissions = watch("permissions")

//   // Función para manejar el toggle de permisos de préstamo y pago
//   const togglePermission = (category: "loan" | "payment", type: "add" | "edit" | "delete") => {
//     const currentValue = permissions[category][type]
//     setValue(`permissions.${category}.${type}`, !currentValue, { shouldValidate: true })
//   }

//   // Función para manejar el toggle de permisos de módulos
//   const toggleModulePermission = (module: keyof typeof permissions.modules) => {
//     const currentValue = permissions.modules[module]
//     setValue(`permissions.modules.${module}`, !currentValue, { shouldValidate: true })
//   }

//   // Manejar el envío del formulario
//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     onSave(data)
//     onClose()
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto p-4">
//       <div className="bg-primary-native border-green-native rounded-lg shadow-lg w-full max-w-screen-lg p-6 sm:p-8 lg:px-12 lg:py-10">
//         <div className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h2 className="text-xl lg:text-2xl font-semibold text-gray-100">Agregar Colaborador</h2>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="text-gray-400 hover:text-gray-200 hover:bg-gray-800"
//             onClick={onClose}
//           >
//             <X className="h-5 w-5" />
//           </Button>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="identifier" className="text-gray-300">
//                   Identificador
//                 </Label>
//                 <Input
//                   id="identifier"
//                   placeholder="Identificador"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                   {...register("identifier", { required: "Este campo es requerido" })}
//                 />
//                 {errors.identifier && <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>}
//               </div>

//               <div>
//                 <Label htmlFor="name" className="text-gray-300">
//                   Nombre
//                 </Label>
//                 <Input
//                   id="name"
//                   placeholder="Nombre"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                   {...register("name", { required: "Este campo es requerido" })}
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//               </div>

//               <div>
//                 <Label htmlFor="email" className="text-gray-300">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                   {...register("email", {
//                     required: "Este campo es requerido",
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Email inválido",
//                     },
//                   })}
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//               </div>

//               <div>
//                 <Label htmlFor="password" className="text-gray-300">
//                   Contraseña
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Contraseña"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                   {...register("password", { required: "Este campo es requerido" })}
//                 />
//                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//               </div>

//               <div>
//                 <Label htmlFor="confirmPassword" className="text-gray-300">
//                   Repetir contraseña
//                 </Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Repetir contraseña"
//                   className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                   {...register("confirmPassword", {
//                     required: "Este campo es requerido",
//                     validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
//                   })}
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-5 lg:col-span-2">
//               <Card className="bg-gray-800 border-gray-700 p-4">
//                 <fieldset>
//                   <legend className="text-gray-300 font-medium mb-3">Permisos de Prestamo</legend>
//                   <div className="flex items-center gap-2">
//                     <Button
//                       type="button"
//                       className={`px-4 py-2 rounded-lg transition-colors ${
//                         permissions.loan.add
//                           ? "bg-green-600 text-white hover:bg-green-500"
//                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                       }`}
//                       onClick={() => togglePermission("loan", "add")}
//                     >
//                       Agregar
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`px-4 py-2 rounded-lg transition-colors ${
//                         permissions.loan.edit
//                           ? "bg-green-600 text-white hover:bg-green-500"
//                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                       }`}
//                       onClick={() => togglePermission("loan", "edit")}
//                     >
//                       Editar
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`px-4 py-2 rounded-lg transition-colors ${
//                         permissions.loan.delete
//                           ? "bg-red-600 text-white hover:bg-red-500"
//                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                       }`}
//                       onClick={() => togglePermission("loan", "delete")}
//                     >
//                       Eliminar
//                     </Button>
//                   </div>
//                 </fieldset>
//               </Card>

//               <Card className="bg-gray-800 border-gray-700 p-4">
//                 <fieldset>
//                   <legend className="text-gray-300 font-medium mb-3">Permisos de Pago</legend>
//                   <div className="flex items-center gap-2">
//                     <Button
//                       type="button"
//                       className={`px-4 py-2 rounded-lg transition-colors ${
//                         permissions.payment.add
//                           ? "bg-green-600 text-white hover:bg-green-500"
//                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                       }`}
//                       onClick={() => togglePermission("payment", "add")}
//                     >
//                       Agregar
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`px-4 py-2 rounded-lg transition-colors ${
//                         permissions.payment.edit
//                           ? "bg-green-600 text-white hover:bg-green-500"
//                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                       }`}
//                       onClick={() => togglePermission("payment", "edit")}
//                     >
//                       Editar
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`px-4 py-2 rounded-lg transition-colors ${
//                         permissions.payment.delete
//                           ? "bg-red-600 text-white hover:bg-red-500"
//                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                       }`}
//                       onClick={() => togglePermission("payment", "delete")}
//                     >
//                       Eliminar
//                     </Button>
//                   </div>
//                 </fieldset>
//               </Card>

//               <Card className="bg-gray-800 border-gray-700 p-4">
//                 <fieldset>
//                   <legend className="text-gray-300 font-medium mb-3">Permisos de Módulo</legend>
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-3 gap-4">
//                       <Button
//                         type="button"
//                         className={`px-4 py-2 rounded-lg transition-colors ${
//                           permissions.modules.collaborators
//                             ? "bg-green-600 text-white hover:bg-green-500"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                         onClick={() => toggleModulePermission("collaborators")}
//                       >
//                         Colaboradores
//                       </Button>
//                       <Button
//                         type="button"
//                         className={`px-4 py-2 rounded-lg transition-colors ${
//                           permissions.modules.overduePayments
//                             ? "bg-green-600 text-white hover:bg-green-500"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                         onClick={() => toggleModulePermission("overduePayments")}
//                       >
//                         Pagos Vencidos
//                       </Button>
//                       <Button
//                         type="button"
//                         className={`px-4 py-2 rounded-lg transition-colors ${
//                           permissions.modules.upcomingPayments
//                             ? "bg-green-600 text-white hover:bg-green-500"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                         onClick={() => toggleModulePermission("upcomingPayments")}
//                       >
//                         Próximos Pagos
//                       </Button>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <Button
//                         type="button"
//                         className={`px-4 py-2 rounded-lg transition-colors ${
//                           permissions.modules.loanPayment
//                             ? "bg-green-600 text-white hover:bg-green-500"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                         onClick={() => toggleModulePermission("loanPayment")}
//                       >
//                         Abonar Préstamo
//                       </Button>
//                       <Button
//                         type="button"
//                         className={`px-4 py-2 rounded-lg transition-colors ${
//                           permissions.modules.report
//                             ? "bg-green-600 text-white hover:bg-green-500"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                         onClick={() => toggleModulePermission("report")}
//                       >
//                         Reporte Estimado VS Real
//                       </Button>
//                     </div>
//                   </div>
//                 </fieldset>
//               </Card>
//             </div>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-3">
//             <div>
//               <Label htmlFor="address" className="text-gray-300">
//                 Dirección
//               </Label>
//               <Input
//                 id="address"
//                 placeholder="Dirección"
//                 className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 {...register("address")}
//               />
//             </div>

//             <div>
//               <Label htmlFor="mobile" className="text-gray-300">
//                 Celular
//               </Label>
//               <Input
//                 id="mobile"
//                 type="tel"
//                 placeholder="Celular"
//                 className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 {...register("mobile")}
//               />
//             </div>

//             <div>
//               <Label htmlFor="phone" className="text-gray-300">
//                 Teléfono
//               </Label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Teléfono"
//                 className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
//                 {...register("phone")}
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <Button
//               type="button"
//               variant="outline"
//               className="px-6 py-2 bg-gray-700 text-gray-200 border-gray-600 rounded-lg hover:bg-gray-600"
//               onClick={onClose}
//             >
//               Cancelar
//             </Button>
//             <Button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
//               Guardar
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CollaboratorForm




"use client"
import { useState } from "react"
import { X } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Label } from "components/components/ui/label"
import { Card } from "components/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"

interface CollaboratorFormProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: FormValues) => void
}

// Definición de la estructura de datos del formulario
interface FormValues {
  identifier: string
  name: string
  email: string
  password: string
  confirmPassword: string
  address: string
  mobile: string
  phone: string
  permissions: {
    loan: {
      add: boolean
      edit: boolean
      delete: boolean
    }
    payment: {
      add: boolean
      edit: boolean
      delete: boolean
    }
    modules: {
      collaborators: boolean
      overduePayments: boolean
      upcomingPayments: boolean
      loanPayment: boolean
      report: boolean
    }
  }
}

const CollaboratorForm = ({ isOpen, onClose, onSave }: CollaboratorFormProps) => {
  const [activeTab, setActiveTab] = useState("personal")

  // Inicializar React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
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
      permissions: {
        loan: {
          add: false,
          edit: false,
          delete: false,
        },
        payment: {
          add: false,
          edit: false,
          delete: false,
        },
        modules: {
          collaborators: false,
          overduePayments: false,
          upcomingPayments: false,
          loanPayment: false,
          report: false,
        },
      },
    },
  })

  // Observar los valores actuales para reflejar el estado en la UI
  const permissions = watch("permissions")

  // Función para manejar el toggle de permisos de préstamo y pago
  const togglePermission = (category: "loan" | "payment", type: "add" | "edit" | "delete") => {
    const currentValue = permissions[category][type]
    setValue(`permissions.${category}.${type}`, !currentValue, { shouldValidate: true })
  }

  // Función para manejar el toggle de permisos de módulos
  const toggleModulePermission = (module: keyof typeof permissions.modules) => {
    const currentValue = permissions.modules[module]
    setValue(`permissions.modules.${module}`, !currentValue, { shouldValidate: true })
  }

  // Manejar el envío del formulario
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSave(data)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto p-4">
      <div className="bg-primary-native border-green-native rounded-lg shadow-lg w-full max-w-screen-lg p-6 sm:p-8 lg:px-12 lg:py-10">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-100">Agregar Colaborador</h2>
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

            <TabsContent value="permissions" className="space-y-6 mt-4">
              <Card className="bg-card border-zinc-800 p-4">
                <fieldset>
                  <legend className="text-gray-300 font-medium mb-3">Permisos de Prestamo</legend>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        permissions.loan.add
                          ? "bg-green-600 text-white hover:bg-green-500"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => togglePermission("loan", "add")}
                    >
                      Agregar
                    </Button>
                    <Button
                      type="button"
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        permissions.loan.edit
                          ? "bg-green-600 text-white hover:bg-green-500"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => togglePermission("loan", "edit")}
                    >
                      Editar
                    </Button>
                    <Button
                      type="button"
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        permissions.loan.delete
                          ? "bg-red-600 text-white hover:bg-red-500"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => togglePermission("loan", "delete")}
                    >
                      Eliminar
                    </Button>
                  </div>
                </fieldset>
              </Card>

              <Card className="bg-card border-zinc-800 p-4">
                <fieldset>
                  <legend className="text-gray-300 font-medium mb-3">Permisos de Pago</legend>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        permissions.payment.add
                          ? "bg-green-600 text-white hover:bg-green-500"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => togglePermission("payment", "add")}
                    >
                      Agregar
                    </Button>
                    <Button
                      type="button"
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        permissions.payment.edit
                          ? "bg-green-600 text-white hover:bg-green-500"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => togglePermission("payment", "edit")}
                    >
                      Editar
                    </Button>
                    <Button
                      type="button"
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        permissions.payment.delete
                          ? "bg-red-600 text-white hover:bg-red-500"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => togglePermission("payment", "delete")}
                    >
                      Eliminar
                    </Button>
                  </div>
                </fieldset>
              </Card>

              <Card className="bg-card border-zinc-800 p-4">
                <fieldset>
                  <legend className="text-gray-300 font-medium mb-3">Permisos de Módulo</legend>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <Button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          permissions.modules.collaborators
                            ? "bg-green-600 text-white hover:bg-green-500"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                        onClick={() => toggleModulePermission("collaborators")}
                      >
                        Colaboradores
                      </Button>
                      <Button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          permissions.modules.overduePayments
                            ? "bg-green-600 text-white hover:bg-green-500"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                        onClick={() => toggleModulePermission("overduePayments")}
                      >
                        Pagos Vencidos
                      </Button>
                      <Button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          permissions.modules.upcomingPayments
                            ? "bg-green-600 text-white hover:bg-green-500"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                        onClick={() => toggleModulePermission("upcomingPayments")}
                      >
                        Próximos Pagos
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          permissions.modules.loanPayment
                            ? "bg-green-600 text-white hover:bg-green-500"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                        onClick={() => toggleModulePermission("loanPayment")}
                      >
                        Abonar Préstamo
                      </Button>
                      <Button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          permissions.modules.report
                            ? "bg-green-600 text-white hover:bg-green-500"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                        onClick={() => toggleModulePermission("report")}
                      >
                        Reporte Estimado VS Real
                      </Button>
                    </div>
                  </div>
                </fieldset>
              </Card>
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
