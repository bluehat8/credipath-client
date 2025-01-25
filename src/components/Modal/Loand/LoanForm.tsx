import * as React from "react";
import { InputField } from "./LoandInputField.tsx";
import { LoanSimulation } from "./LoandSimulation.tsx";

interface LoanFormProps {
  valor: string;
  tipoInteres: string;
  interes: string;
  pago: string;
  fechaPrestamo: string;
  nota: string;
}

export const LoanForm: React.FC<LoanFormProps> = (prop) => {
  const [formData, setFormData] = React.useState({
    valor: prop?.valor || "100",
    tipoInteres: prop?.tipoInteres || "anual",
    interes: prop?.interes || "5",
    pago: prop?.pago || "100",
    fechaPrestamo: prop?.fechaPrestamo || "2024-01-01",
    nota: prop?.nota || "",
  });

  const [isLoanListVisible, setLoanListVisible] = React.useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSimulation = () => {
    console.log("Simulación ejecutada con los datos:", formData);
    setLoanListVisible(true);
  };

  const closeLoanList = () => {
    setLoanListVisible(false);
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col px-6 py-7 mx-auto w-full text-lg leading-normal text-white bg-neutral-900 max-w-[480px] rounded-[42px]"
      >
        <div className="flex gap-5 justify-between w-full text-xl font-medium leading-tight max-w-[273px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f15bf28aed9434cafdaee35978df0f6c76ddaedadff30b9b2673601cf75c6d04?placeholderIfAbsent=true&apiKey=7930382fac3c4525a2ab54962694cee8"
            alt=""
            className="object-contain shrink-0 self-start rounded-none aspect-square w-[21px]"
          />
          <div>Agregar Préstamo</div>
        </div>

        <InputField
          label="Valor"
          id="valor"
          value={formData.valor}
          onChange={handleInputChange}
          placeholder="Ingrese el valor del préstamo"
        />
        <InputField
          label="Tipo de Interés"
          id="tipoInteres"
          value={formData.tipoInteres}
          onChange={handleInputChange}
          placeholder="Anual, mensual, etc."
        />
        <InputField
          label="Interés"
          id="interes"
          value={formData.interes}
          onChange={handleInputChange}
          placeholder="Ingrese la tasa de interés"
        />
        <InputField
          label="Pago"
          id="pago"
          value={formData.pago}
          onChange={handleInputChange}
          placeholder="Ingrese el monto del pago"
        />
        <InputField
          label="Fecha de Préstamo"
          id="fechaPrestamo"
          value={formData.fechaPrestamo}
          onChange={handleInputChange}
          placeholder="YYYY-MM-DD"
        />
        <InputField
          label="Nota"
          id="nota"
          value={formData.nota}
          height="h-[93px]"
          onChange={handleInputChange}
          placeholder="Notas adicionales"
        />

        <button
          type="button"
          onClick={handleSimulation}
          className="px-16 py-5 mt-4 font-medium whitespace-nowrap bg-green-600 rounded-3xl"
        >
          Simulación
        </button>
      </form>

      {/* Modal de Simulación */}
      {isLoanListVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-neutral-900 text-white rounded-lg w-[90%] max-w-6xl p-8 flex flex-col md:flex-row gap-8">
            {/* Botón de Cerrar */}
            <button
              className="absolute top-4 right-4 text-black bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeLoanList}
            >
              &times;
            </button>

            {/* Primera mitad: Formulario */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Formulario del Préstamo</h2>
              <div className="space-y-4">
                <InputField
                  label="Valor"
                  id="valor"
                  value={formData.valor}
                  onChange={handleInputChange}
                  placeholder="Ingrese el valor del préstamo"
                />
                <InputField
                  label="Tipo de Interés"
                  id="tipoInteres"
                  value={formData.tipoInteres}
                  onChange={handleInputChange}
                  placeholder="Anual, mensual, etc."
                />
                <InputField
                  label="Interés"
                  id="interes"
                  value={formData.interes}
                  onChange={handleInputChange}
                  placeholder="Ingrese la tasa de interés"
                />
                <InputField
                  label="Pago"
                  id="pago"
                  value={formData.pago}
                  onChange={handleInputChange}
                  placeholder="Ingrese el monto del pago"
                />
                <InputField
                  label="Fecha de Préstamo"
                  id="fechaPrestamo"
                  value={formData.fechaPrestamo}
                  onChange={handleInputChange}
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>

            {/* Segunda mitad: Simulación */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Simulación</h2>
              <LoanSimulation />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
