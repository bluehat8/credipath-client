import * as React from "react";
import { InputField } from "./LoandInputField";

export const LoanForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    valor: "10000",
    tipoInteres: "Fijo",
    interes: "5%",
    pago: "200",
    fechaPrestamo: "2025-01-01",
    nota: "Préstamo inicial para el cliente A",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex overflow-hidden flex-col px-6 py-7 mx-auto w-full text-lg leading-normal text-white bg-neutral-900 max-w-[480px] rotate-[2.7755575615628914e-17rad] rounded-[42px]"
    >
      <div className="flex gap-5 justify-between w-full text-xl font-medium leading-tight max-w-[273px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f15bf28aed9434cafdaee35978df0f6c76ddaedadff30b9b2673601cf75c6d04?placeholderIfAbsent=true&apiKey=7930382fac3c4525a2ab54962694cee8"
          alt=""
          className="object-contain shrink-0 self-start rounded-none aspect-square w-[21px]"
        />
        <div className="rotate-[-5.316684527466619e-17rad]">Agregar Prestamo</div>
      </div>

      <InputField
        label="Valor"
        id="valor"
        value={formData.valor}
        onChange={handleInputChange} placeholder={""}      />
      <InputField
        label="Tipo de Interes"
        id="tipoInteres"
        value={formData.tipoInteres}
        onChange={handleInputChange} placeholder={""}      />
      <InputField
        label="Interes"
        id="interes"
        value={formData.interes}
        onChange={handleInputChange} placeholder={""}      />
      <InputField
        label="Pago"
        id="pago"
        value={formData.pago}
        onChange={handleInputChange} placeholder={""}      />
      <InputField
        label="Fecha de Prestamo"
        id="fechaPrestamo"
        value={formData.fechaPrestamo}
        onChange={handleInputChange} placeholder={""}      />
      <InputField
        label="Nota"
        id="nota"
        value={formData.nota}
        height="h-[93px]"
        onChange={handleInputChange} placeholder={""}      />

      <button
        type="submit"
        className="px-16 py-5 mt-8 font-medium whitespace-nowrap bg-blue-600 rounded-3xl rotate-[-5.316684527466619e-17rad]"
      >
        Save
      </button>

      <button
        type="button"
        className="self-center mt-9 text-sm leading-loose rotate-[-5.316684527466619e-17rad]"
      >
        Cancel
      </button>
    </form>
  );
};
