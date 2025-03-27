import * as React from "react";
import { InputFieldProps } from "utils/types";

export const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = "text", id }) => {
  return (
    <div className="flex flex-col gap-3.5">
      <label htmlFor={id} className="text-zinc-300">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="px-6 py-5 rounded-md border border-solid border-stone-500 bg-transparent max-md:px-5 max-md:max-w-full"
        aria-label={label}
      />
    </div>
  );
};