import * as React from 'react';
import { InputFieldClient } from './ClientInputField';
import { ClientFormData } from './TypesClient';

export const ClientForm: React.FC = () => {
  const [formData, setFormData] = React.useState<ClientFormData>({
    name: '',
    lastname: '',
    route: '',
    note: '',
    direction: '',
    cellphone: '',
    email: '',
    landlinePhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col px-6 py-8 bg-white max-w-4xl mx-auto rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col items-start w-full gap-6">
        <h1 className="text-2xl font-extrabold text-neutral-800">Ingresar cliente</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <InputFieldClient label="Nombre del cliente" placeholder="Ingresa nombre" />
          <InputFieldClient label="Apellidos" placeholder="Ingresa apellidos" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col">
            <label htmlFor="route" className="text-neutral-900">Ruta a asignar</label>
            <select
              id="route"
              className="mt-2 px-3 py-2 border border-stone-300 rounded-xl text-neutral-800 w-full"
              aria-label="Select route"
            >
              <option value="">Selecciona una ruta</option>
              <option value="1">Ruta del norte</option>
              <option value="2">Masaya</option>
              <option value="3">Ruta del sur</option>


            </select>
          </div>
          <InputFieldClient label="Notas" placeholder="Enter Note" />
        </div>

        <button
          type="button"
          className="flex items-center gap-3 mt-4 text-neutral-800"
          aria-label="Toggle extra information"
        >
          <span>Información extra</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2755f31392fe7a864c675c28ed8cb8399f8d4100b0dec2e6491abc121ab67257?placeholderIfAbsent=true&apiKey=7930382fac3c4525a2ab54962694cee8"
            alt="Toggle extra information icon"
            className="w-6 h-6"
          />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <InputFieldClient label="Direccion" placeholder="Ingresa la direccion" />
          <InputFieldClient label="Teléfono celular" placeholder="Ingresa el número de teléfono" />
          <InputFieldClient label="Correo" placeholder="Ingresa el correo electronico" />
          <InputFieldClient label="Teléfono fijo" placeholder="Ingresa el teléfono fijo" />
        </div>

        <button
          type="submit"
          className="self-center px-6 py-3 mt-6 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800"
        >
          Crear
        </button>
      </form>
    </div>
  );
};
