// import * as React from 'react';
// import { SidebarItemProps } from './types';

// export const SidebarItem: React.FC<SidebarItemProps> = ({
//   icon,
//   label,
//   isActive,
//   path,
//   ariaLabel,
//   onClick
// }) => {
//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.key === 'Enter' || event.key === ' ') {
//       onClick(path);
//     }
//   };

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onClick={() => onClick(path)}
//       onKeyPress={handleKeyPress}
//       aria-label={ariaLabel}
//       aria-current={isActive ? 'page' : undefined}
//       className={`flex gap-2.5 self-start mt-7 ml-4 whitespace-nowrap max-md:ml-2.5 
//         ${isActive ? 'text-green-400' : 'text-slate-50'}
//         hover:bg-zinc-700 p-2 rounded-md transition-colors duration-200
//         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50`}
//     >
//       <img
//         loading="lazy"
//         src={icon}
//         alt=""
//         className="object-contain shrink-0 w-6 aspect-[0.96]"
//         aria-hidden="true"
//       />
//       <div className="self-start">{label}</div>
//     </div>
//   );
// };


import * as React from 'react';
import { Link } from 'react-router-dom'; // Usa Link para navegación interna
import { SidebarItemProps } from './types';

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isActive,
  path,
  ariaLabel,
  onClick,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick(path);
    }
  };

  return (
    <Link
      to={path}
      onClick={() => onClick?.(path)}
      onKeyPress={handleKeyPress}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      className={`flex gap-2.5 self-start mt-7 ml-4 whitespace-nowrap max-md:ml-2.5 
        ${isActive ? 'text-green-400' : 'text-slate-50'}
        hover:bg-zinc-700 p-2 rounded-md transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-6 aspect-[0.96]"
        aria-hidden="true"
      />
      <div className="self-start">{label}</div>
    </Link>
  );
};
