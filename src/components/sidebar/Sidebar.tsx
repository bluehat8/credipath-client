import * as React from 'react';
import { useCallback } from 'react';
import { SidebarProps } from './types';
import { SidebarLogo } from './SidebarLogo';
import { SidebarItem } from './SidebarItem';
import { navigationItems } from './navigationConfig';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activePath, setActivePath] = React.useState('/');

  const handleNavigation = useCallback((path: string) => {
    setActivePath(path);
  }, []);

  return (
    <nav
      className={`flex flex-col w-1/5 max-md:ml-0 max-md:w-full 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 ease-in-out
        fixed md:relative left-0 top-0 h-full z-50`}
      aria-label="Main navigation"
    >
      <div className="flex flex-col px-10 pt-9 mx-auto w-full h-full text-xs font-semibold bg-zinc-800 text-slate-50 max-md:px-5">
        <SidebarLogo
          logoUrl="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e0105872c3855e766fc1878bbbc5215aea591a49bb6cbdb3b7aad7e38cc5291c?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
          companyName="CREDIPATH"
        />
        
        <div className="mt-10 flex flex-col">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.id}
              {...item}
              isActive={activePath === item.path}
              onClick={handleNavigation}
            />
          ))}
        </div>

        <button
          onClick={onClose}
          className="md:hidden mt-auto mb-8 px-4 py-2 text-white bg-zinc-700 rounded-md
            hover:bg-zinc-600 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          aria-label="Close navigation menu"
        >
          Close Menu
        </button>
      </div>
    </nav>
  );
};