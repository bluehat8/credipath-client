import * as React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  height?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  height,
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm text-gray-400">
      {label}
    </label>
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 mt-2 border rounded-lg mb-2 bg-zinc-800 border-green-native ${height || ""}`}
    />
  </div>
);
