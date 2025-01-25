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
  month: number;
  interestPayment: number;
  principalPayment: number;
  totalPayment: number;
  remainingBalance: number;
}

const LoanCard: React.FC<LoanCardProps> = ({
  month,
  interestPayment,
  principalPayment,
  totalPayment,
  remainingBalance,
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 mb-4 text-white bg-neutral-800 rounded-2xl shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
            {month}
          </div>
          <h3 className="text-lg font-semibold">Mes #{month}</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-neutral-400">Pago Interés</p>
          <p className="font-medium">{formatCurrency(interestPayment)}</p>
        </div>
        <div>
          <p className="text-neutral-400">Pago Capital</p>
          <p className="font-medium">{formatCurrency(principalPayment)}</p>
        </div>
        <div>
          <p className="text-neutral-400">Pago Total</p>
          <p className="font-medium">{formatCurrency(totalPayment)}</p>
        </div>
        <div>
          <p className="text-neutral-400">Saldo Restante</p>
          <p className="font-medium">{formatCurrency(remainingBalance)}</p>
        </div>
      </div>
    </div>
  );
};

export const LoanSimulation: React.FC = () => {
  const loanAmortization = [
    { month: 1, interestPayment: 50.0, principalPayment: 450.0, totalPayment: 500, remainingBalance: 5550.0 },
    { month: 2, interestPayment: 46.25, principalPayment: 453.75, totalPayment: 500, remainingBalance: 5096.25 },
    { month: 3, interestPayment: 42.47, principalPayment: 457.53, totalPayment: 500, remainingBalance: 4638.72 },
    { month: 4, interestPayment: 38.66, principalPayment: 461.34, totalPayment: 500, remainingBalance: 4177.37 },
    { month: 5, interestPayment: 34.81, principalPayment: 465.19, totalPayment: 500, remainingBalance: 3712.19 },
    { month: 6, interestPayment: 30.93, principalPayment: 469.07, totalPayment: 500, remainingBalance: 3243.12 },
    { month: 7, interestPayment: 27.03, principalPayment: 472.97, totalPayment: 500, remainingBalance: 2770.15 },
    { month: 8, interestPayment: 23.08, principalPayment: 476.92, totalPayment: 500, remainingBalance: 2293.23 },
    { month: 9, interestPayment: 19.11, principalPayment: 480.89, totalPayment: 500, remainingBalance: 1812.34 },
    { month: 10, interestPayment: 15.10, principalPayment: 484.90, totalPayment: 500, remainingBalance: 1327.44 },
    { month: 11, interestPayment: 11.06, principalPayment: 488.94, totalPayment: 500, remainingBalance: 838.51 },
    { month: 12, interestPayment: 6.99, principalPayment: 493.01, totalPayment: 500, remainingBalance: 345.49 },
    { month: 13, interestPayment: 2.88, principalPayment: 345.49, totalPayment: 500, remainingBalance: 0 },
  ];

  return (
    <div className="p-6 bg-neutral-900 min-h-screen">
      <h1 className="mb-6 text-2xl font-bold text-white">Simulación de Amortización de Préstamo</h1>
      {loanAmortization.map((loan) => (
        <LoanCard key={loan.month} {...loan} />
      ))}
    </div>
  );
};
