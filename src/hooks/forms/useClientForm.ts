import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "react-hot-toast"
import { useClientRegistration } from "hooks/clients/useClientRegistration"

// Esquema base que coincide con el tipo ClientFormValues
export const clientFormSchema = z.object({
  // Campos obligatorios
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  lastname: z.string().min(2, { message: "El apellido es obligatorio" }),
  direction: z.string().min(5, { message: "La dirección es obligatoria" }),
  cellphone: z.string().min(8, { message: "El teléfono es obligatorio" }),
  routeId: z.number({ required_error: "Por favor selecciona una ruta" }),
  
  // Campos opcionales
  email: z.string()
    .email({ message: "Correo electrónico inválido" })
    .max(100, { message: "El correo no puede superar los 100 caracteres" })
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
  note: z.string().max(500, { message: "La nota no puede superar los 500 caracteres" }).optional(),
  landlinePhone: z.string()
    .regex(/^[\d\s\-+()]*$/, { message: "Formato de teléfono fijo inválido" })
    .max(20, { message: "El teléfono fijo no puede superar los 20 caracteres" })
    .optional()
    .or(z.literal(''))
})

// Definir el tipo manualmente para asegurar la coincidencia con el esquema
type ClientFormValues = {
  // Campos base
  name: string;
  lastname: string;
  direction: string;
  cellphone: string;
  email: string;
  routeId: number;
  note?: string;
  landlinePhone?: string;
  
  // Campos adicionales
  identification: string;
  code?: string;
  homeAddress?: string;
  businessAddress?: string;
  gender?: string;
  municipality?: string;
  city?: string;
  neighborhood?: string;
}

export const useClientForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { registerClient, isLoading: isSubmitting } = useClientRegistration();

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(clientFormSchema) as any, // Temporal hasta que se resuelva la discrepancia de tipos
    defaultValues: {
      // Campos base
      name: "",
      lastname: "",
      direction: "",
      cellphone: "",
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
      // Preparar los datos para la API
      const clientData = {
        // Campos base
        name: formData.name,
        lastname: formData.lastname,
        direction: formData.direction,
        cellphone: formData.cellphone,
        email: formData.email || '',
        routeId: formData.routeId,
        
        // Campos adicionales requeridos
        identification: formData.identification,
        
        // Campos opcionales
        ...(formData.note && { note: formData.note }),
        ...(formData.landlinePhone && { landlinePhone: formData.landlinePhone }),
        ...(formData.code && formData.code.trim() !== '' && { code: formData.code }),
        ...(formData.homeAddress && formData.homeAddress.trim() !== '' && { homeAddress: formData.homeAddress }),
        ...(formData.businessAddress && formData.businessAddress.trim() !== '' && { businessAddress: formData.businessAddress }),
        ...(formData.gender && formData.gender.trim() !== '' && { gender: formData.gender }),
        ...(formData.municipality && formData.municipality.trim() !== '' && { municipality: formData.municipality }),
        ...(formData.city && formData.city.trim() !== '' && { city: formData.city }),
        ...(formData.neighborhood && formData.neighborhood.trim() !== '' && { neighborhood: formData.neighborhood })
      } as const;

      // Llamar a la API a través de nuestro hook
      await registerClient(clientData);
      
      // Mostrar mensaje de éxito
      toast.success("Cliente registrado exitosamente");
      
      // Reiniciar el formulario en caso de éxito
      form.reset();
      setIsSuccess(true);
      
      // Reiniciar el estado de éxito después de mostrar el mensaje
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      // Mostrar mensaje de error
      toast.error("Error al registrar el cliente. Por favor, inténtalo de nuevo.");
      console.error("Error en el envío del formulario:", error);
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    onSubmit: form.handleSubmit(onSubmit),
  }
}