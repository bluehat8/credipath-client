import * as React from "react";

interface LoanDetailsProps {
  name: string;
  code: string;
  loanAmount: string;
  interestRate: string;
  interestType: string;
  paymentFrequency: string;
}

export const LoanHeader: React.FC<LoanDetailsProps> = ({
  name,
  code,
  loanAmount,
  interestRate,
  interestType,
  paymentFrequency,
}) => {
  return (
    <div className="flex flex-col gap-4 text-white">
      {/* Header */}
      <div className="flex items-center gap-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/7dd4d3c1b0767ac1023dcf0e825ce64a628057fdf7124b4fceefe0eb48be8874?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
          alt="Icon"
          className="object-contain aspect-square w-8"
        />
        <span className="text-xl font-medium tracking-wider">{name}</span>
      </div>

      {/* Loan Details Row */}
      <div className="flex flex-wrap gap-6 md:gap-8 items-center">
        {/* Loan Amount */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="/icons/loans/cash.svg"
            alt="Loan Amount Icon"
            className="w-5 aspect-square"
          />
          <span>{loanAmount} $</span>
        </div>

        {/* Interest Rate */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="/icons/loans/percentage.svg"
            alt="Interest Rate Icon"
            className="w-5 aspect-square"
          />
          <span>{interestRate}</span>
        </div>

        {/* Interest Type */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="/icons/loans/interestType.svg"
            alt="Interest Type Icon"
            className="w-5 aspect-square"
          />
          <span>{interestType}</span>
        </div>

        {/* Payment Frequency */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="/icons/loans/frequency.svg"
            alt="Payment Frequency Icon"
            className="w-5 aspect-square"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Frecuencia: {paymentFrequency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
