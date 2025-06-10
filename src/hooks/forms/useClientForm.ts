import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "components/hooks/use-toast"
import { useClientRegistration } from "hooks/clients/useClientRegistration"

export const clientFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  lastname: z.string().min(2, { message: "Los apellidos deben tener al menos 2 caracteres" }),
  routeId: z.number({ required_error: "Por favor selecciona una ruta" }),
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

export const useClientForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false)
  const { toast } = useToast()
  const { registerClient, isLoading: isSubmitting } = useClientRegistration()

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      routeId: 0, // Default to 0 or null, will be required by the form
      note: "",
      direction: "",
      cellphone: "",
      email: "",
      landlinePhone: "",
    },
  })

  const onSubmit = async (formData: ClientFormValues) => {
    try {
      // Prepare the data for the API
      const clientData = {
        ...formData,
        // routeId is already a number from the form
      }

      // Call the API through our hook
      await registerClient(clientData)
      
      // Reset form on success
      form.reset()
      setIsSuccess(true)
      
      // Reset success state after showing success message
      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      // Error handling is done in the useClientRegistration hook
      console.error("Error in form submission:", error)
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    onSubmit: form.handleSubmit(onSubmit),
  }
}