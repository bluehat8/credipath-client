import * as React from "react";

interface LoanCardProps {
  id: number;
  capitalBalance: string;
  interestBalance: string;
  totalBalance: string;
  dueDate: string;
  paidAmount: string;
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
    <div className="flex flex-col gap-2 p-4 mb-4 text-white bg-neutral-800 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
          <span className="text-lg font-medium">{id}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-neutral-400">Saldo capital</p>
          <p className="font-medium">{capitalBalance}</p>
        </div>
        <div>
          <p className="text-neutral-400">Saldo interés</p>
          <p className="font-medium">{interestBalance}</p>
        </div>
        <div>
          <p className="text-neutral-400">Saldo total</p>
          <p className="font-medium">{totalBalance}</p>
        </div>
        <div>
          <p className="text-neutral-400">Vence</p>
          <p className="font-medium">{dueDate}</p>
        </div>
        <div className="col-span-2">
          <p className="text-neutral-400">Abonado</p>
          <p className="font-medium">{paidAmount}</p>
        </div>
      </div>
    </div>
  );
};

export const LoanSimulation: React.FC = () => {
  const loans = [
    {
      id: 1,
      capitalBalance: "$50.00",
      interestBalance: "$0.03",
      totalBalance: "$50.02",
      dueDate: "mié 18 sept 24",
      paidAmount: "$0.00",
    },
    {
      id: 2,
      capitalBalance: "$50.00",
      interestBalance: "$0.03",
      totalBalance: "$50.02",
      dueDate: "vie 18 oct 24",
      paidAmount: "$0.00",
    },
    {
      id: 3,
      capitalBalance: "$50.00",
      interestBalance: "$0.03",
      totalBalance: "$50.02",
      dueDate: "lun 18 nov 24",
      paidAmount: "$0.00",
    },
  ];

  return (
    <div className="p-6 bg-neutral-900 min-h-screen">
      {loans.map((loan) => (
        <LoanCard key={loan.id} {...loan} />
      ))}
    </div>
  );
};
