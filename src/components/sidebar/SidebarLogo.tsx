import * as React from 'react';
import { SidebarLogoProps } from './types';

export const SidebarLogo: React.FC<SidebarLogoProps> = ({ logoUrl, companyName }) => {
  return (
    <div className="flex gap-4 text-base font-extrabold text-green-400 whitespace-nowrap tracking-[2.25px]">
      <img
        loading="lazy"
        src={logoUrl}
        alt={`${companyName} logo`}
        className="object-contain shrink-0 rounded-none aspect-[2] w-[60px]"
      />
      <div className="grow shrink my-auto w-[93px]" aria-label={`${companyName} company name`}>
        {companyName}
      </div>
    </div>
  );
};