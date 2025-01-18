import * as React from 'react';
import { PermissionButtonPropsCollaborator } from './TypesCollaborator.tsx';

export const PermissionButton: React.FC<PermissionButtonPropsCollaborator> = ({ label, isActive = false }) => {
  return (
    <div 
      role="button"
      tabIndex={0}
      className={`gap-2.5 self-stretch px-4 py-2 rounded border border-solid border-zinc-500 min-h-[26px] w-[63px] ${
        isActive ? 'text-white bg-green-400 bg-opacity-10' : 'bg-white text-neutral-700'
      }`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
        }
      }}
    >
      {label}
    </div>
  );
};