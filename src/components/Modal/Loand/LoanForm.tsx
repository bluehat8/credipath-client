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
        className="flex flex-col px-6 py-7 mx-auto w-full text-lg leading-normal text-white bg-neutral-900 max-w-[580px]"
      >
        <div className="flex gap-5 justify-between w-full text-xl font-medium leading-tight max-w-[273px] mb-5">
          <div>Agregar Préstamo</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["valor", "tipoInteres", "interes", "pago", "fechaPrestamo"].map((field) => (
            <InputField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              id={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleInputChange}
              placeholder={`Ingrese ${field}`}
            />
          ))}
        </div>

          <div className="mt-4">
            <InputField
              label="Nota"
              id="nota"
              value={formData.nota}
              onChange={handleInputChange}
              placeholder="Ingrese nota"
              height="h-[93px]"
            />
          </div>

          <button
            type="button"
            onClick={handleSimulation}
            className="px-4 py-2 mt-4 flex items-center gap-2 font-medium text-green-400 bg-transparent border border-green-native rounded-full transition-all hover:bg-green-500 hover:text-white"
          >
            Simulación
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>

          <button
            type="button"
            className="px-6 py-3 mt-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all"
          >
            Guardar
          </button>
        </form>

      {/* end form */}

      {isLoanListVisible && (
        <div className="fixed inset-0 z-50 flex md:items-center p-8  justify-center bg-black bg-opacity-50 transition-opacity">
          <div className="relative bg-neutral-800 text-white rounded-lg w-[90%] max-w-5xl p-8 flex flex-col md:flex-row gap-8 shadow-xl transition-all">
            <button
              className="absolute top-4 right-4 text-black bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
              onClick={closeLoanList}
            >
              &times;
            </button>

            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold mb-6">Formulario del Préstamo</h2>
              {["valor", "tipoInteres", "interes", "pago", "fechaPrestamo"].map((field) => (
                <InputField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  id={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  placeholder={`Ingrese ${field}`}
                />
              ))}
            </div>

            <div className="flex-1 space-y-4 max-h-[60vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Simulación</h2>
              <LoanSimulation />
            </div>
          </div>
        </div>
      )}

    </>
  );
};
