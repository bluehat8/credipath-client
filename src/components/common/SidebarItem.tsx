import * as React from "react";
import { SidebarItemProps } from "utils/types";

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive }) => {
  return (
    <div className={`flex gap-2.5 self-start mt-7 ml-4 whitespace-nowrap max-md:ml-2.5 ${isActive ? 'text-green-400' : 'text-slate-50'}`}>
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 w-6 aspect-square"
        alt=""
      />
      <div className="self-start">{text}</div>
    </div>
  );
};