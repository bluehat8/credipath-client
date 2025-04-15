import React from 'react';
import { CategoryFilter } from '../components/reports/ControlBalance/CategoryFilter';
import { TransactionTable } from '../components/reports/ControlBalance/TransactionTable';
import { transactions, categories } from '../data/ControlBalance';
import { MainSidebar } from 'components/sidebar/Sidebar';
import { Download, Calendar, Users, MapPin } from 'lucide-react';

export function ControlBalancePage() {
  return (
    <div className="min-h-screen">
      <section className="flex flex-col w-full max-w-7xl mx-auto px-4 py-6" role="main">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Reportes
          </h1>
        </div>

        <section className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-xl font-semibold text-white">Control de gastos</h2>

            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-white/90 bg-zinc-700/50 hover:bg-zinc-700 transition-colors rounded-lg border border-zinc-600/50">
                <MapPin size={18} />
                Rutas
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-white/90 bg-zinc-700/50 hover:bg-zinc-700 transition-colors rounded-lg border border-zinc-600/50">
                <Users size={18} />
                Usuarios
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-white/90 bg-zinc-700/50 hover:bg-zinc-700 transition-colors rounded-lg border border-zinc-600/50">
                <Calendar size={18} />
                2024-05-05 - 2024-07-06
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-white/90 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-lg">
                <Download size={18} />
                Exportar Excel
              </button>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-zinc-700/50 via-zinc-600 to-zinc-700/50 my-8" />

          <div className="bg-zinc-700/30 p-6 rounded-xl border border-zinc-600/50">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Ruta del norte
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Colaborador asignado: Maria Sanchez
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <h4 className="text-zinc-400 text-xs font-medium mb-1">BALANCE</h4>
                  <p className="text-emerald-400 text-xl font-semibold">$400</p>
                </div>
                <div className="text-center">
                  <h4 className="text-zinc-400 text-xs font-medium mb-1">ENTRADAS</h4>
                  <p className="text-emerald-400 text-xl font-semibold">$500</p>
                </div>
                <div className="text-center">
                  <h4 className="text-zinc-400 text-xs font-medium mb-1">SALIDAS</h4>
                  <p className="text-red-400 text-xl font-semibold">$100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CategoryFilter categories={categories} />
          </div>

          <div className="mt-8">
            <TransactionTable transactions={transactions} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default ControlBalancePage