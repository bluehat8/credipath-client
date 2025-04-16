import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  amount: z.string()
    .min(1, 'El monto es requerido')
    .regex(/^\d+$/, 'Solo se permiten números')
    .transform(val => Number(val))
    .refine(val => val > 0, 'El monto debe ser mayor a 0'),
  reason: z.string().optional(),
  requestDate: z.string(),
});

type FormData = z.infer<typeof formSchema>;

function SolicitudRetanqueo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestDate: new Date().toLocaleDateString(),
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Aquí iría la lógica para enviar los datos
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
  };

  return (
    <div className="min-h-screen bg-[#121316]">
    <div className="mx-auto">
      <section className="bg-[#1D1E21] p-8 rounded-lg shadow-xl">
        <section className="flex items-center gap-x-8 px-8 py-6 bg-[#121316] rounded-lg">
          <button className="rounded-full p-2 bg-[#3F4245] hover:bg-[#4F5256] transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-white text-2xl font-semibold">Solicitud de retanqueo</h1>
            <p className="text-gray-400 text-base mt-1">Completa el formulario para solicitar una reposición de fondos. Tu solicitud será revisada por un supervisor</p>
          </div>
        </section>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-8">
          <div className="text-white">
            <label className="text-xl text-gray-300 block">Monto solicitado</label>
            <input 
              type="text"
              {...register('amount')}
              className="mt-2 py-3 px-4 w-full border-b outline-none bg-transparent border-gray-600 focus:border-green-500 transition-colors"
              placeholder="1000"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-2">{errors.amount.message}</p>
            )}
            <p className="text-green-500 text-sm mt-2">Ingresa el monto que necesitas para tus operaciones</p>
          </div>

          <div className="text-white">
            <label className="text-xl text-gray-300 block">Motivo (opcional)</label>
            <textarea
              {...register('reason')}
              className="w-full border bg-transparent outline-none border-gray-600 p-4 mt-3 rounded-lg placeholder:text-gray-500 focus:border-green-500 transition-colors min-h-[120px]"
              placeholder="Describe brevemente porqué necesitas los fondos"
            />
            <p className="text-green-500 text-sm mt-2">Un motivo claro puede ayudar a que tu solicitud sea aprobada más rápido</p>
          </div>

          <div className="text-white">
            <label className="text-xl text-gray-300 block">Fecha de solicitud</label>
            <input 
              type="text"
              {...register('requestDate')}
              className="mt-2 py-3 px-4 w-full border-b outline-none bg-transparent border-gray-600"
              disabled
            />
            <p className="text-green-500 text-sm mt-2">Fecha actual (no editable)</p>
          </div>

          <div className="text-white">
            <label className="text-xl text-gray-300 block">Estado</label>
            <div className="mt-2 p-4 bg-[#AF8738] bg-opacity-50 rounded-lg font-medium">
              Pendiente
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-x-3 px-6 py-3 text-white bg-green-600 rounded-lg ml-auto hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </section>
    </div>
  </div>
  );
}

export default SolicitudRetanqueo;
