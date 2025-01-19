import { useState } from "react";
import * as React from "react";

interface LoanDetailsProps {
  name: string;
  code: string;
  loanAmount: string;
  interestRate: string;
  interestType: string;
  paymentFrequency: string;
  loanDate: string;
  nextDueDate: string;
  loanDueDate: string;
  overduePayments: number;
  interestValue: string;
  totalInterestValue: string;
  paidInstallments: number;
  installmentValue: string;
  totalLoan: string;
  loanWithInterest: string;
  totalPaid: string;
  totalBalance: string;
  isModalOpen: boolean; 
  onClose: any;
}

export const LoanDetailModal: React.FC<LoanDetailsProps> = ({
  name,
  code,
  loanAmount,
  interestRate,
  interestType,
  paymentFrequency,
  loanDate,
  nextDueDate,
  loanDueDate,
  overduePayments,
  interestValue,
  totalInterestValue,
  paidInstallments,
  installmentValue,
  totalLoan,
  loanWithInterest,
  totalPaid,
  totalBalance,
  isModalOpen,
  onClose
}) => {

    const [isModalVisible, setIsModalVisible] = useState(isModalOpen);
    const closeModal = () => setIsModalVisible(false);

  return (
    <>
    {isModalVisible && (
        
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50  flex justify-center items-center">
      <div className="bg-primary-native p-6 rounded-lg max-w-lg w-full space-y-4 border-green-native">
        {/* Título con línea divisoria */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
          <h2 className="text-white text-xl font-semibold">Información del préstamo</h2>
          <button onClick={onClose} className="text-gray-200 hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          {/* Línea divisoria debajo de la fecha del préstamo */}
          <div className="flex justify-between pb-2">
            <span className="font-medium text-gray-300">Fecha del préstamo:</span>
            <span className="text-green-300">{loanDate}</span>
          </div>
          <div className="flex justify-between  pb-2">
            <span className="font-medium text-gray-300">Fecha de próxima cuota:</span>
            <span className="text-green-300">{nextDueDate}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium text-gray-300">Vencimiento del préstamo:</span>
            <span className="text-green-300">{loanDueDate}</span>
          </div>
          <div className="flex justify-between  pb-2">
            <span className="font-medium text-gray-300">Cuotas vencidas:</span>
            <span className="text-green-300">{overduePayments}</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="font-medium text-gray-300">Interés:</span>
            <span className="text-green-300">{interestValue}</span>
          </div>
          <div className="flex justify-between  pb-2">
            <span className="font-medium text-gray-300">Valor total intereses:</span>
            <span className="text-green-300">{totalInterestValue}</span>
          </div>
          <div className="flex justify-between  pb-2">
            <span className="font-medium text-gray-300">Cuotas pagadas:</span>
            <span className="text-green-300">{paidInstallments}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium text-gray-300">Valor cuota:</span>
            <span className="text-green-300">{installmentValue}</span>
          </div>
          <div className="flex justify-between  pb-2">
            <span className="font-medium text-gray-300">Total prestado:</span>
            <span className="text-green-300">{totalLoan}</span>
          </div>
          <div className="flex justify-between  pb-2">
            <span className="font-medium text-gray-300">Prestado + intereses:</span>
            <span className="text-green-300">{loanWithInterest}</span>
          </div>
          {/* Línea divisoria debajo de "Total abonado" */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-medium text-gray-300">Total abonado:</span>
            <span className="text-green-300">{totalPaid}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-300">Saldo total:</span>
            <span className="text-green-500">{totalBalance}</span>
          </div>
        </div>

        {/* Botón de cierre */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
    )};
    </>
  );
};
