import * as React from 'react';
import { Layout as Sidebar } from '../components/sidebar/Layout';
import { CategoryFilter } from '../components/reports/ControlBalance/CategoryFilter';
import { TransactionTable } from '../components/reports/ControlBalance/TransactionTable';
import { transactions, categories } from '../data/ControlBalance';

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
