import * as React from "react";
import { PaymentInfoProps } from "./PayLoandTypes";

export const PaymentInfo: React.FC<PaymentInfoProps> = ({ label, value, iconSrc }) => (
  <div className="flex flex-col sm:flex-row sm:gap-5 items-center">
    <div className="flex flex-col items-start text-lg leading-normal text-white text-center sm:text-left">
      <div className="mt-4 sm:mt-8">{label}</div>
      <div className="mt-2 sm:mt-6">{value}</div>
    </div>
    {iconSrc && (
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain w-12 sm:w-[23px] mt-4 sm:mt-0"
      />
    )}
  </div>
);
