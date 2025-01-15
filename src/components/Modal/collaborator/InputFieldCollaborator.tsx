import * as React from 'react';
import { InputFieldPropsCollaborator } from './TypesCollaborator.tsx';

export const InputField: React.FC<InputFieldPropsCollaborator> = ({ placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col w-full whitespace-nowrap mb-6">
      <label className="sr-only" htmlFor={`input-${placeholder}`}>
        {placeholder}
      </label>
      <input
        type={type}
        id={`input-${placeholder}`}
        className="px-4 py-3 rounded border border-solid border-zinc-500 max-md:pr-5"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
};