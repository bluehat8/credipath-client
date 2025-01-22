// import * as React from 'react';
// import { TransactionData } from './type';

// interface TransactionTableProps {
//   transactions: TransactionData[];
// }

// export function TransactionTable({ transactions }: TransactionTableProps) {
//   return (
//     <div className="flex flex-wrap items-start mt-4 rounded-2xl bg-slate-900 shadow-lg overflow-hidden">
//       <div className="w-full overflow-x-auto">
//         <table role="table" className="w-full min-w-[800px] table-auto">
//           <thead>
//             <tr className="bg-slate-800">
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Transacción
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Código préstamo
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Cliente
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Monto préstamo
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Operación
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Fecha
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//               >
//                 Acciones
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction, index) => (
//               <tr
//                 key={index}
//                 className={`border-b border-gray-700 ${
//                   index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900'
//                 }`}
//               >
//                 <td className="px-4 py-4">
//                   <div className="flex items-center gap-2">
//                     <img src={transaction.icon} alt="" className="w-5 h-5" />
//                     <span className="text-gray-300">{transaction.type}</span>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.loanCode}</td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.client}</td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.loanAmount}</td>
//                 <td className="px-4 py-4">
//                   <span
//                     className={`px-2 py-1 rounded text-xs font-medium ${
//                       transaction.operation.type === 'credit'
//                         ? 'bg-green-800 text-teal-400'
//                         : 'bg-red-800 text-red-400'
//                     }`}
//                   >
//                     {transaction.operation.amount}
//                   </span>
//                 </td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.date}</td>
//                 <td className="px-4 py-4">
//                   <button
//                     className="p-2 rounded hover:bg-gray-700"
//                     aria-label="Ver detalles"
//                   >
//                     <img
//                       src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/2461aea70dcf8e9325625bbc055e349ed94f5b4eeb619a85e0e2f26997e839af?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
//                       alt=""
//                       className="w-5 h-5"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// import * as React from 'react';
// import { TransactionData } from './type';

// interface TransactionTableProps {
//   transactions: TransactionData[];
// }

// export function TransactionTable({ transactions }: TransactionTableProps) {
//   return (
//     <div className="flex flex-wrap items-start mt-4 rounded-2xl bg-gray-900 shadow-lg overflow-hidden">
//       <div className="w-full overflow-x-auto">
//         <table role="table" className="w-full min-w-[800px] table-auto">
//           <thead>
//             <tr className="bg-gray-800">
//               {['Transacción', 'Código préstamo', 'Cliente', 'Monto préstamo', 'Operación', 'Fecha', 'Acciones'].map(
//                 (header) => (
//                   <th
//                     key={header}
//                     scope="col"
//                     className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
//                   >
//                     {header}
//                   </th>
//                 )
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction, index) => (
//               <tr
//                 key={index}
//                 className={`border-b border-gray-700 ${
//                   index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
//                 }`}
//               >
//                 <td className="px-4 py-4">
//                   <div className="flex items-center gap-2">
//                     <img src={transaction.icon} alt="" className="w-5 h-5" />
//                     <span className="text-gray-300">{transaction.type}</span>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.loanCode}</td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.client}</td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.loanAmount}</td>
//                 <td className="px-4 py-4">
//                   <span
//                     className={`px-2 py-1 rounded text-xs font-medium ${
//                       transaction.operation.type === 'credit'
//                         ? 'bg-gray-700 text-teal-400'
//                         : 'bg-gray-700 text-red-400'
//                     }`}
//                   >
//                     {transaction.operation.amount}
//                   </span>
//                 </td>
//                 <td className="px-4 py-4 text-gray-300">{transaction.date}</td>
//                 <td className="px-4 py-4">
//                   <button
//                     className="p-2 rounded hover:bg-gray-700"
//                     aria-label="Ver detalles"
//                   >
//                     <img
//                       src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/2461aea70dcf8e9325625bbc055e349ed94f5b4eeb619a85e0e2f26997e839af?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
//                       alt="Detalles"
//                       className="w-5 h-5"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import * as React from 'react';
import { useState } from 'react';
import { TransactionData } from './type';

interface TransactionTableProps {
  transactions: TransactionData[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 5; // Elementos por página

  // Calcular el rango de elementos visibles
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleTransactions = transactions.slice(startIndex, endIndex);

  // Total de páginas
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start mt-4 rounded-2xl bg-gray-900 shadow-lg overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table role="table" className="w-full min-w-[800px] table-auto">
            <thead>
              <tr className="bg-gray-800">
                {['Transacción', 'Código préstamo', 'Cliente', 'Monto préstamo', 'Operación', 'Fecha', 'Acciones'].map(
                  (header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3 text-sm font-semibold text-gray-300 border-b-2 border-gray-700 text-left"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {visibleTransactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-700 ${
                    index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
                  }`}
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <img src={transaction.icon} alt="" className="w-5 h-5" />
                      <span className="text-gray-300">{transaction.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-300">{transaction.loanCode}</td>
                  <td className="px-4 py-4 text-gray-300">{transaction.client}</td>
                  <td className="px-4 py-4 text-gray-300">{transaction.loanAmount}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        transaction.operation.type === 'credit'
                          ? 'bg-gray-700 text-teal-400'
                          : 'bg-gray-700 text-red-400'
                      }`}
                    >
                      {transaction.operation.amount}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-300">{transaction.date}</td>
                  <td className="px-4 py-4">
                    <button
                      className="p-2 rounded hover:bg-gray-700"
                      aria-label="Ver detalles"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/2461aea70dcf8e9325625bbc055e349ed94f5b4eeb619a85e0e2f26997e839af?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                        alt="Detalles"
                        className="w-5 h-5"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-700 text-gray-500' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >
          Anterior
        </button>
        <span className="text-gray-300">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-700 text-gray-500' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}


