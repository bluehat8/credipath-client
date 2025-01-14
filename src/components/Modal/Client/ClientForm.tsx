import * as React from 'react';
import { InputFieldClient } from './ClientInputField.tsx';
import { ClientFormData } from './TypesClient.tsx';

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
    <div className="flex overflow-hidden flex-col px-10 pt-11 pb-4 bg-white max-w-[838px] max-md:px-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-start py-7 pr-20 pl-6 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full text-xl font-extrabold max-w-[628px] max-md:max-w-full">
          <h1 className="self-start text-neutral-800">Create Client</h1>
          
          <div className="flex flex-wrap gap-10 mt-9 text-sm leading-6 max-md:max-w-full">
            <InputFieldClient label="Client Name" placeholder="Enter User Name" />
            <InputFieldClient label="Client Lastname" placeholder="Enter User Lastname" />
          </div>

          <div className="flex flex-wrap gap-6 mt-8 text-sm leading-6 max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <label htmlFor="route" className="text-neutral-900">Ruta</label>
              <div className="flex flex-col mt-2 max-w-full rounded-none text-neutral-400 w-[350px]">
                <div className="flex z-10 flex-col justify-center px-3 py-3.5 w-full rounded-xl border border-solid border-stone-300 max-md:pr-5">
                  <div className="flex gap-1.5 items-center">
                    <select
                      id="route"
                      className="flex gap-10 justify-between items-center self-stretch my-auto min-h-[24px] min-w-[240px] w-[304px] bg-transparent"
                      aria-label="Select route"
                    >
                      <option value="">Selecciona una ruta</option>
                    </select>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2755f31392fe7a864c675c28ed8cb8399f8d4100b0dec2e6491abc121ab67257?placeholderIfAbsent=true&apiKey=7930382fac3c4525a2ab54962694cee8"
                      alt="Route selection dropdown icon"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <InputFieldClient label="Note" placeholder="Enter Note" />
          </div>

          <button
            type="button"
            className="flex gap-3.5 items-start self-center mt-5 ml-12 max-w-full text-neutral-800 w-[202px]"
            aria-label="Toggle extra information"
          >
            <span className="grow shrink w-40">Extra Information</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2755f31392fe7a864c675c28ed8cb8399f8d4100b0dec2e6491abc121ab67257?placeholderIfAbsent=true&apiKey=7930382fac3c4525a2ab54962694cee8"
              alt="Toggle extra information icon"
              className="object-contain shrink-0 mt-1.5 w-6 aspect-square"
            />
          </button>
        </div>

        <div className="mt-5 w-full max-w-[628px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-6 max-md:mt-10">
                <InputFieldClient label="Direction" placeholder="Enter Direction" />
                <InputFieldClient label="Cellphone" placeholder="Enter Cellphone" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-6 max-md:mt-10">
                <InputFieldClient label="Email" placeholder="Enter Email" />
                <InputFieldClient label="Landline Phone" placeholder="Enter Landline Phone" />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="gap-2.5 self-center px-2.5 py-1.5 mt-12 ml-4 max-w-full text-sm leading-6 text-white whitespace-nowrap rounded-xl bg-[linear-gradient(135deg,#14ADD6_0%,#384295_100%)] min-h-[35px] w-[289px] max-md:mt-10"
        >
          Create
        </button>
      </form>
    </div>
  );
}