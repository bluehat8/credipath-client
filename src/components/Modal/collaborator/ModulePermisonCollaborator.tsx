import * as React from 'react';
import { ModulePermissionPropsCollaborator } from './TypesCollaborator.tsx';

export const ModulePermission: React.FC<ModulePermissionPropsCollaborator> = ({ label, isActive = false }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`grow shrink gap-2.5 self-stretch px-2 py-1.5 rounded border border-solid border-zinc-500 min-h-[26px] ${
        isActive ? 'text-white bg-green-400 bg-opacity-10' : 'bg-white text-neutral-700'
      }`}
    >
      {label}
    </div>
  );
};