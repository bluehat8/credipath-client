// import * as React from 'react';
// import { useState } from 'react';
// import { Sidebar } from './Sidebar.tsx';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen bg-neutral-900">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <button
//         onClick={() => setIsSidebarOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-800 rounded-md
//           hover:bg-zinc-700 transition-colors duration-200
//           focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
//         aria-label="Open navigation menu"
//       >
//         <svg
//           className="w-6 h-6 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       <main className="flex-1 p-8 md:ml-[20%] overflow-auto">
//         {children}
//       </main>
//     </div>
//   );
// };


import * as React from 'react';
import { useState } from 'react';
import { Sidebar } from './Sidebar.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-neutral-900">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Botón de hamburguesa */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-4 left-4 z-50 p-2 bg-zinc-800 rounded-md transition-transform duration-200
          ${isSidebarOpen ? 'rotate-90' : ''}
          hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50`}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Contenido principal */}
      <main
        className={`flex-1 p-12 overflow-auto transition-all duration-300  ${
          isSidebarOpen ? '' : 'absolute w-full md:ml-0'
        }`}
      >
        {children}
      </main>
    </div>
  );
};

