import { z } from "zod";

export const routeSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, { message: "El nombre de la ruta es obligatorio" })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres" }),
  district: z.string().min(1, { message: "El distrito es obligatorio" }),
  phoneNumber: z
    .string()
    .min(1, { message: "El número de teléfono es obligatorio" })
    .regex(/^\d+$/, {
      message: "El número de teléfono debe contener solo dígitos",
    }),
  location: z.string().min(1, { message: "La ubicación es obligatoria" }),
});

export type RouteFormData = z.infer<typeof routeSchema>;
