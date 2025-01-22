import * as React from "react";
import { InputFieldProps } from "./PayLoandTypes";

export const InputField: React.FC<InputFieldProps> = ({ label, className, type = "text" }) => (
  <div className="w-full">
    {/* Etiqueta */}
    <label className="block mt-4 text-lg leading-normal text-white">
      {label}
    </label>
    {/* Campo de entrada o área de texto */}
    {type === "textarea" ? (
      <textarea
        className={`w-full mt-4 p-4 text-lg leading-normal text-white rounded-3xl bg-blue-950 resize-none focus:outline-none focus:ring-2 focus:ring-blue-700 ${className}`}
        rows={3}
      />
    ) : (
      <input
        type={type}
        className={`w-full px-4 py-3 mt-4 text-lg leading-normal text-white rounded-3xl bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-700 ${className}`}
        defaultValue={type === "date" ? "DOM 18 AGOSTO 2024" : ""}
      />
    )}
  </div>
);
