import * as React from "react";

// Formateador de monedas
const formatCurrency = (value: string | number): string =>
  new Intl.NumberFormat("es-NI", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));

// Formateador de fechas
const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("es-ES", options).format(new Date(date));
};

interface LoanCardProps {
  id: number;
  capitalBalance: number;
  interestBalance: number;
  totalBalance: number;
  dueDate: string;
  paidAmount: number;
}

const LoanCard: React.FC<LoanCardProps> = ({
  id,
  capitalBalance,
  interestBalance,
  totalBalance,
  dueDate,
  paidAmount,
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 mb-4 text-white bg-neutral-800 rounded-2xl shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
            {id}
          </div>
          <h3 className="text-lg font-semibold">Préstamo #{id}</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-neutral-400">Saldo Capital</p>
          <p className="font-medium">{formatCurrency(capitalBalance)}</p>
        </div>
        <div>
          <p className="text-neutral-400">Saldo Interés</p>
          <p className="font-medium">{formatCurrency(interestBalance)}</p>
        </div>
        <div>
          <p className="text-neutral-400">Saldo Total</p>
          <p className="font-medium">{formatCurrency(totalBalance)}</p>
        </div>
        <div>
          <p className="text-neutral-400">Vence</p>
          <p className="font-medium">{formatDate(dueDate)}</p>
        </div>
        <div className="col-span-2">
          <p className="text-neutral-400">Abonado</p>
          <p className="font-medium">{formatCurrency(paidAmount)}</p>
        </div>
      </div>
    </div>
  );
};

export const LoanSimulation: React.FC = () => {
  const loans = [
    {
      id: 1,
      capitalBalance: 50.0,
      interestBalance: 0.03,
      totalBalance: 50.02,
      dueDate: "2024-09-18",
      paidAmount: 0.0,
    },
    {
      id: 2,
      capitalBalance: 50.0,
      interestBalance: 0.03,
      totalBalance: 50.02,
      dueDate: "2024-10-18",
      paidAmount: 0.0,
    },
    {
      id: 3,
      capitalBalance: 50.0,
      interestBalance: 0.03,
      totalBalance: 50.02,
      dueDate: "2024-11-18",
      paidAmount: 0.0,
    },
  ];

  return (
    <div className="p-6 bg-neutral-900 min-h-screen">
      <h1 className="mb-6 text-2xl font-bold text-white">Simulación de Préstamos</h1>
      {loans.map((loan) => (
        <LoanCard key={loan.id} {...loan} />
      ))}
    </div>
  );
};
