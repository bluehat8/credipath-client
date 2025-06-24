import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "react-hot-toast"
import { useClientRegistration, ClientRegistrationData } from "hooks/clients/useClientRegistration"

// Esquema base que coincide con el tipo ClientFormValues
export const clientFormSchema = z.object({
  // Campos obligatorios
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  lastname: z.string().min(2, { message: "El apellido es obligatorio" }),
  phone: z.string().min(8, { message: "El teléfono es obligatorio" }),
  routeId: z.number({ required_error: "Por favor selecciona una ruta" }),
  
  // Campos opcionales
  email: z.string()
    .email({ message: "Por favor ingresa un correo electrónico válido" })
    .or(z.literal('')) // Permite cadena vacía
    .optional()
    .transform(val => val || ''), // Convierte null/undefined a cadena vacía
  landlinePhone: z.string()
    .regex(/^[\d\s\-+()]*$/, { message: "Formato de teléfono fijo inválido" })
    .max(20, { message: "El teléfono fijo no puede superar los 20 caracteres" })
    .optional()
    .or(z.literal('')),
    
  // Campos adicionales
  identification: z.string().min(5, { message: "La identificación es obligatoria" }),
  code: z.string().max(100, { message: "El código no puede superar los 100 caracteres" }).optional(),
  homeAddress: z.string().max(200, { message: "La dirección de casa no puede superar los 200 caracteres" }).optional(),
  businessAddress: z.string().max(200, { message: "La dirección de negocio no puede superar los 200 caracteres" }).optional(),
  gender: z.string().max(20, { message: "El género no puede superar los 20 caracteres" }).optional(),
  municipality: z.string().max(100, { message: "El municipio no puede superar los 100 caracteres" }).optional(),
  city: z.string().max(100, { message: "La ciudad no puede superar los 100 caracteres" }).optional(),
  neighborhood: z.string().max(100, { message: "El barrio/colonia no puede superar los 100 caracteres" }).optional(),
  note: z.string().max(500, { message: "La nota no puede superar los 500 caracteres" }).optional()
})

// Extraer el tipo del esquema para garantizar que coincida
type ClientFormValues = z.infer<typeof clientFormSchema> & {
  // Agregar cualquier campo adicional que no esté en el esquema pero sea necesario
  phone: string;  // Aseguramos que phone esté presente
}

export const useClientForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { registerClient, isLoading: isSubmitting } = useClientRegistration();

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      // Campos base
      name: "",
      lastname: "",
      phone: "",
      email: "",
      routeId: 0, // Se establecerá al seleccionar
      note: "",
      landlinePhone: "",
      
      // Campos adicionales
      identification: "",
      code: "",
      homeAddress: "",
      businessAddress: "",
      gender: "",
      municipality: "",
      city: "",
      neighborhood: ""
    },
  })

  const onSubmit = async (formData: ClientFormValues) => {
    try {
      console.log('Datos del formulario:', formData);
      
      // Asegurarse de que el email sea una cadena vacía si es null o undefined
      const emailValue = formData.email?.trim() || '';
      
      // Preparar los datos para la API exactamente como los espera el backend
      const clientData: ClientRegistrationData = {
        // Campos requeridos
        name: formData.name,
        lastname: formData.lastname,
        phone: formData.phone,
        email: emailValue, // Ya aseguramos que es string vacío, no null
        routeId: formData.routeId,
        identification: formData.identification,
        
        // Campos opcionales
        ...(formData.note && { note: formData.note }),
        ...(formData.landlinePhone && { landlinePhone: formData.landlinePhone }),
        ...(formData.code && { code: formData.code }),
        ...(formData.homeAddress && { homeAddress: formData.homeAddress }),
        ...(formData.businessAddress && { businessAddress: formData.businessAddress }),
        ...(formData.gender && { gender: formData.gender }),
        ...(formData.municipality && { municipality: formData.municipality }),
        ...(formData.city && { city: formData.city }),
        ...(formData.neighborhood && { neighborhood: formData.neighborhood })
      };
      
      console.log('Datos a enviar a la API:', clientData);
      
      // Llamar a la API a través de nuestro hook
      await registerClient(clientData);
      
      // Mostrar mensaje de éxito
      toast.success("Cliente registrado exitosamente");
      
      // Reiniciar el formulario en caso de éxito
      form.reset();
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      
    } catch (error: any) {
      console.error('Error al registrar el cliente:', error);
      toast.error( error?.message || "Error al registrar el cliente. Por favor, inténtalo de nuevo.");
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    onSubmit: form.handleSubmit(onSubmit),
  }
}