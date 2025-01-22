// import * as React from 'react';
// import { Layout as Sidebar } from '../components/sidebar/Layout.tsx';
// import  {CategoryFilter}  from '../components/reports/ControlBalance/CategoryFilter.tsx';
// import { TransactionTable } from '../components/reports/ControlBalance/TransactionTable.tsx';
// import { transactions, categories } from '../data/ControlBalance.ts';

// export function ControlBalancePage() {
//   return (
//    <Sidebar>
//         <section className="flex flex-col w-full max-md:ml-0 max-md:w-full" role="main">
//           <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
//             <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
//               Reportes
//             </h1>
//             <section className="flex flex-col pt-11 pb-24 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
//               <div className="flex flex-wrap gap-10 self-center ml-3.5 w-full text-white max-w-[1085px] max-md:max-w-full">
//                 <div className="grow shrink self-start text-xl font-medium tracking-wider w-[154px]">
//                   Control de gastos
//                 </div>
//                 <div className="flex flex-wrap gap-3 text-base font-light tracking-wide">
//                   <div className="flex shrink-0 rounded-md border border-solid border-zinc-100 h-[47px] w-[143px]" />
//                   <button className="flex gap-3.5 px-5 py-3 whitespace-nowrap rounded-md border border-solid border-zinc-100">
//                     <img src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
//                     <span>Usuarios</span>
//                   </button>
//                   <button className="flex gap-6 px-5 py-3 text-xs tracking-wide rounded-md border border-solid border-zinc-100">
//                     <img src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/183b85ccc418474bdd26f73345f6275ce39458ced3d452f78e6eac99e6f8df6f?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&" alt="" className="object-contain shrink-0 aspect-[0.71] w-[17px]" />
//                     <span className="my-auto basis-auto">2024-05-05 - 2024- 07-06</span>
//                   </button>
//                   <button className="flex gap-1.5 px-6 py-3 rounded-md border border-solid border-zinc-100 max-md:px-5">
//                     <img src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/ac822ff06be97282528c3a39952fc1dcf551d8986567a48c73e315e7b4d2afa9?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&" alt="" className="object-contain shrink-0 self-start w-6 aspect-square" />
//                     <span className="basis-auto">Exportar excel</span>
//                   </button>
//                 </div>
//               </div>
//               <div className="flex shrink-0 mt-8 h-px bg-stone-700 max-md:max-w-full" />
//               <div className="flex flex-col px-7 mt-12 -mb-5 w-full max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
//                 <div className="flex gap-5 justify-between items-start px-16 py-5 ml-4 max-w-full rounded-xl bg-zinc-700 w-[1074px] max-md:px-5">
//                   <div className="flex gap-4 mt-1">
//                     <div className="flex shrink-0 bg-green-400 rounded-full h-[53px] w-[53px]" />
//                     <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
//                       <div className="self-start text-base font-medium tracking-wide text-white">
//                         Ruta del norte
//                       </div>
//                       <div className="text-xs font-light tracking-wide text-stone-400">
//                         Colaborador asignado: Maria Sanchez
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex self-stretch text-sm font-light tracking-wide text-center whitespace-nowrap">
//                     <div className="flex flex-col items-start self-end max-md:mr-0">
//                       <div className="text-white">BALANCE</div>
//                       <div className="text-green-400">$400</div>
//                     </div>
//                     <div className="flex shrink-0 w-0.5 h-14 bg-neutral-500" />
//                   </div>
//                   <div className="flex flex-col items-start mt-1.5 text-sm font-light tracking-wide text-center">
//                     <div className="text-white">ENTRADAS</div>
//                     <div className="text-green-400">$ 500</div>
//                   </div>
//                   <div className="flex gap-1 mt-1.5 text-sm font-light tracking-wide text-center">
//                     <img src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/18094a14dace9b97ec40219a483478ac8902ebb3bc353942815b66c0103ef108?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&" alt="" className="object-contain shrink-0 self-start mt-1.5 w-4 aspect-square" />
//                     <div className="flex flex-col items-start">
//                       <div className="text-white">SALIDAS</div>
//                       <div className="text-green-400">$ 100</div>
//                     </div>
//                   </div>
//                 </div>
//                 <CategoryFilter categories={categories} />
//                 <TransactionTable transactions={transactions} />
//               </div>
//             </section>
//           </div>
//         </section>
// </Sidebar>
//   );
// }


import * as React from 'react';
import { Layout as Sidebar } from '../components/sidebar/Layout.tsx';
import { CategoryFilter } from '../components/reports/ControlBalance/CategoryFilter.tsx';
import { TransactionTable } from '../components/reports/ControlBalance/TransactionTable.tsx';
import { transactions, categories } from '../data/ControlBalance.ts';

export function ControlBalancePage() {
  return (
    <Sidebar>
      <section className="flex flex-col w-full" role="main">
        <div className="my-2">
          <h1 className="text-2xl font-semibold text-white tracking-wide">
            Reportes
          </h1>
        </div>

        <section className="bg-zinc-800 mt-5 rounded-lg p-6 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-medium text-white">Control de gastos</h2>

            <div className="flex flex-wrap items-center gap-4">

            <button className="flex items-center gap-3 px-4 py-2 text-sm text-white border border-zinc-100 rounded-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                  alt=""
                  className="w-5 h-5"
                />
                Rutas
              </button>
              <button className="flex items-center gap-3 px-4 py-2 text-sm text-white border border-zinc-100 rounded-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                  alt=""
                  className="w-5 h-5"
                />
                Usuarios
              </button>
              <button className="flex items-center gap-3 px-4 py-2 text-sm text-white border border-zinc-100 rounded-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/183b85ccc418474bdd26f73345f6275ce39458ced3d452f78e6eac99e6f8df6f?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                  alt=""
                  className="w-4 h-4"
                />
                2024-05-05 - 2024-07-06
              </button>
              <button className="flex items-center gap-3 px-4 py-2 text-sm text-white border border-zinc-100 rounded-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/ac822ff06be97282528c3a39952fc1dcf551d8986567a48c73e315e7b4d2afa9?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                  alt=""
                  className="w-5 h-5"
                />
                Exportar Excel
              </button>
            </div>
          </div>

          <hr className="my-6 border-stone-700" />

          <div className="bg-zinc-700 p-6 rounded-lg">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-400 w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-white text-sm font-medium">
                    Ruta del norte
                  </h3>
                  <p className="text-stone-400 text-xs">
                    Colaborador asignado: Maria Sanchez
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white text-xs font-medium">BALANCE</h4>
                <p className="text-green-400 text-sm">$400</p>
              </div>
              <div className="text-center">
                <h4 className="text-white text-xs font-medium">ENTRADAS</h4>
                <p className="text-green-400 text-sm">$500</p>
              </div>
              <div className="text-center">
                <h4 className="text-white text-xs font-medium">SALIDAS</h4>
                <p className="text-red-400 text-sm">$100</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <CategoryFilter categories={categories} />
          </div>

          <div className="mt-6">
            <TransactionTable transactions={transactions} />
          </div>
        </section>
      </section>
    </Sidebar>
  );
}
