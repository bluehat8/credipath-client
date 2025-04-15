// import * as React from 'react';
// import { useState } from 'react';
// import { TransactionData } from './type';
// import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

// interface TransactionTableProps {
//   transactions: TransactionData[];
// }

// export function TransactionTable({ transactions }: TransactionTableProps) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const visibleTransactions = transactions.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(transactions.length / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {visibleTransactions.map((transaction, index) => (
//           <div
//             key={index}
//             className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-5 hover:bg-zinc-800 transition-colors"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-zinc-700/50 rounded-lg">
//                   <img src={transaction.icon} alt="" className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-medium">{transaction.type}</h3>
//                   <p className="text-zinc-400 text-sm">{transaction.date}</p>
//                 </div>
//               </div>
//               <button
//                 className="p-1.5 hover:bg-zinc-700/50 rounded-lg transition-colors"
//                 aria-label="More options"
//               >
//                 <MoreVertical size={20} className="text-zinc-400" />
//               </button>
//             </div>

//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-zinc-400 text-sm">Código préstamo</span>
//                 <span className="text-white font-medium">{transaction.loanCode}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-zinc-400 text-sm">Cliente</span>
//                 <span className="text-white font-medium">{transaction.client}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-zinc-400 text-sm">Monto préstamo</span>
//                 <span className="text-white font-medium">{transaction.loanAmount}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-zinc-400 text-sm">Operación</span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     transaction.operation.type === 'credit'
//                       ? 'bg-emerald-500/10 text-emerald-400'
//                       : 'bg-red-500/10 text-red-400'
//                   }`}
//                 >
//                   {transaction.operation.amount}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Paginación */}
//       <div className="flex justify-between items-center mt-6 bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//             currentPage === 1
//               ? 'bg-zinc-700/50 text-zinc-500 cursor-not-allowed'
//               : 'bg-zinc-700 text-white hover:bg-zinc-600'
//           }`}
//         >
//           <ChevronLeft size={18} />
//           Anterior
//         </button>
        
//         <span className="text-zinc-400 text-sm">
//           Página {currentPage} de {totalPages}
//         </span>
        
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//             currentPage === totalPages
//               ? 'bg-zinc-700/50 text-zinc-500 cursor-not-allowed'
//               : 'bg-zinc-700 text-white hover:bg-zinc-600'
//           }`}
//         >
//           Siguiente
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// }




import * as React from 'react';
import { useState } from 'react';
import { TransactionData } from './type';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

interface TransactionTableProps {
  transactions: TransactionData[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleTransactions = transactions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="space-y-3">
        {visibleTransactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 hover:bg-zinc-800 transition-colors"
          >
            {/* Desktop View */}
            <div className="hidden md:flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-[240px]">
                <div className="p-2 bg-zinc-700/50 rounded-lg">
                  <img src={transaction.icon} alt="" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{transaction.type}</h3>
                  <p className="text-zinc-400 text-sm">{transaction.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 flex-1">
                <div className="flex-1">
                  <span className="text-zinc-400 text-sm block">Código préstamo</span>
                  <span className="text-white font-medium">{transaction.loanCode}</span>
                </div>
                <div className="flex-1">
                  <span className="text-zinc-400 text-sm block">Cliente</span>
                  <span className="text-white font-medium">{transaction.client}</span>
                </div>
                <div className="flex-1">
                  <span className="text-zinc-400 text-sm block">Monto préstamo</span>
                  <span className="text-white font-medium">{transaction.loanAmount}</span>
                </div>
                <div>
                  <span className="text-zinc-400 text-sm block">Operación</span>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      transaction.operation.type === 'credit'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {transaction.operation.amount}
                  </span>
                </div>
              </div>

              <button
                className="p-1.5 hover:bg-zinc-700/50 rounded-lg transition-colors ml-4"
                aria-label="More options"
              >
                <MoreVertical size={20} className="text-zinc-400" />
              </button>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-700/50 rounded-lg">
                    <img src={transaction.icon} alt="" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{transaction.type}</h3>
                    <p className="text-zinc-400 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <button
                  className="p-1.5 hover:bg-zinc-700/50 rounded-lg transition-colors"
                  aria-label="More options"
                >
                  <MoreVertical size={20} className="text-zinc-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Código préstamo</span>
                  <span className="text-white font-medium">{transaction.loanCode}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Cliente</span>
                  <span className="text-white font-medium">{transaction.client}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Monto préstamo</span>
                  <span className="text-white font-medium">{transaction.loanAmount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Operación</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      transaction.operation.type === 'credit'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {transaction.operation.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-6 bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === 1
              ? 'bg-zinc-700/50 text-zinc-500 cursor-not-allowed'
              : 'bg-zinc-700 text-white hover:bg-zinc-600'
          }`}
        >
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Anterior</span>
        </button>
        
        <span className="text-zinc-400 text-sm">
          Página {currentPage} de {totalPages}
        </span>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? 'bg-zinc-700/50 text-zinc-500 cursor-not-allowed'
              : 'bg-zinc-700 text-white hover:bg-zinc-600'
          }`}
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}