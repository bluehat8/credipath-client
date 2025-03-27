import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "components/hooks/use-toast"

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

export const useClientForm = () => {
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

  return {
    form,
    isSubmitting,
    isSuccess,
    onSubmit,
  }
}