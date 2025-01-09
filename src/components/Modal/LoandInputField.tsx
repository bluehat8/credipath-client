import * as React from "react";
import { InputFieldProps } from "../../utils/types";

export const InputField: React.FC<InputFieldProps> = ({ label, height = "h-[42px]" }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <>
      <label htmlFor={id} className="self-start mt-7 rotate-[-5.316684527466619e-17rad]">
        {label}
      </label>
      <input
        id={id}
        className={`flex shrink-0 mt-3.5 max-w-full rounded-3xl bg-blue-950 w-[344px] ${height}`}
        aria-label={label}
      />
    </>
  );
}