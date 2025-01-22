import * as React from "react";
import { PaymentInfo } from "./PaymentInfo.tsx";
import { InputField } from "./InputFieldPay.tsx";

interface PaymentFormProps {
  onClose: () => void;
}

const paymentInfoData = [
  {
    label: "Valor de la Cuota",
    value: "$50.02",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/13f2e5d4d645a98794b97554ae85ae60facc3abaa6cf169416a194c13702ea7c?apiKey=7930382fac3c4525a2ab54962694cee8&",
  },
  {
    label: "Valor Interes",
    value: "$0.03",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6e8e53096de8c643b4da5621b9defc03ad245b4ca5d155931b92b93ae4b5a89?apiKey=7930382fac3c4525a2ab54962694cee8&",
  },
  {
    label: "Deuda Total",
    value: "$200.10",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee291e462f64f3d44e75521a964caccde40f51628cfc311024ba13448d1d4b51?apiKey=7930382fac3c4525a2ab54962694cee8&",
  },
];

export const PaymentForm: React.FC<PaymentFormProps> = ({ onClose }) => {
  return (
    <form className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="flex flex-col w-full max-w-md bg-neutral-900 rounded-2xl p-6 sm:p-8 md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-white sm:text-2xl">Agregar Abono</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-gray-400 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Payment Info (Botones con Info) */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  {paymentInfoData.map((info, index) => (
    <button
      key={index}
      className="flex items-center justify-between p-4 hover:bg-green-300  hover:bg-opacity-50 text-white rounded-xl shadow-lg transition-all duration-200"
    >
      <div className="flex flex-col items-start">
        <span className="text-sm font-medium">{info.label}</span>
        <span className="text-lg font-semibold">{info.value}</span>
      </div>
      {info.iconSrc && (
        <img
          src={info.iconSrc}
          alt=""
          className="w-8 h-8 object-contain ml-4"
        />
      )}
    </button>
  ))}
</div>


        {/* Input Fields */}
        <div className="mt-6">
          <InputField label="Valor" className="w-full" />
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white">Resumen del Pago</h3>
            <p className="mt-2 text-sm text-white">Interes: $0.00</p>
            <p className="mt-2 text-sm text-white">Capital: $0.00</p>
          </div>
          <InputField label="Aplicar Abono a" className="w-full mt-6" />
          <InputField label="Fecha" type="date" className="w-full mt-6" />
          <InputField label="Nota" type="textarea" className="w-full mt-6" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-2xl hover:bg-blue-700"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 text-sm text-white hover:text-gray-400"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};
