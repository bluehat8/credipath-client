import * as React from "react";
import { ButtonProps } from "../utils/types";

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-14 py-5 rounded-md border border-solid border-neutral-600 max-md:px-5 max-md:max-w-full"
    >
      {children}
    </button>
  );
};