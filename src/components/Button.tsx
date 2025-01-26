import * as React from "react";
import { ButtonProps } from "../utils/types";

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <a
      href="/clients"
      onClick={onClick}
      className="w-full px-14 py-5 rounded-md border border-solid text-center border-neutral-600 max-md:px-5 max-md:max-w-full bg-green-native text-lg font-semibold transition duration-200 hover:border-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.8)]"
    >
      {children}
    </a>
  );
};
