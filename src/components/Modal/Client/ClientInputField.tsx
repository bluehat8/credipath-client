import * as React from 'react';
import { InputFieldPropsClient } from './TypesClient.tsx';

export const InputFieldClient: React.FC<InputFieldPropsClient> = ({ label, placeholder, width = "350px" }) => {
  return (
    <div className="flex flex-col items-start h-[62px]">
      <div className="flex flex-col max-w-full" style={{ width }}>
        <label className="text-neutral-900" htmlFor={label.toLowerCase().replace(/\s+/g, '-')}>
          {label}
        </label>
        <div className="flex flex-col mt-2 w-full rounded-none text-neutral-400">
          <div className="flex z-10 flex-col justify-center px-3 py-3.5 w-full rounded-xl border border-solid border-stone-300 max-md:pr-5">
            <div className="flex gap-1.5 items-center">
              <input
                type="text"
                id={label.toLowerCase().replace(/\s+/g, '-')}
                placeholder={placeholder}
                className="self-stretch my-auto min-h-[24px] min-w-[240px] w-[304px] bg-transparent outline-none"
                aria-label={label}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}