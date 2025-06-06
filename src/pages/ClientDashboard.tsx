import * as React from "react"
import { Plus, Search, Filter } from "lucide-react"
import { ClientCard } from "components/common/ClientCard"
import { ClientForm } from "../components/Modal/Client/ClientForm"

import { ThemeProvider } from "context/ThemeContext"
import { FilterSidePanel } from "components/filters/client-filter"
import { useClientDashboard } from "hooks/clients/useClientDashboard"

export const ClientDashboard: React.FC = () => {
  const {
    clients,
    routes,
    isFormVisible,
    searchTerm,
    selectedRoute,
    isFilterExpanded,
    filteredClients,
    handleOpenForm,
    handleCloseForm,
    toggleFilters,
    clearFilters,
    setSearchTerm,
    setSelectedRoute,
    setIsFilterExpanded,
  } = useClientDashboard()

  return (
    <ThemeProvider>
      {/* <MainSidebar> */}
        <div className="max-md:flex-col w-full">
          <section className="flex flex-col ml-2 max-md:ml-0 max-md:w-full" role="main">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-xl font-medium text-white tracking-[3px] w-full">Clientes</h1>
              <div className="flex flex-col items-center p-8 pt-12 pb-96 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between max-w-full w-full">
                  <div className="my-auto text-xl font-medium tracking-wider text-white">Control de clientes</div>
                  <button
                    onClick={handleOpenForm}
                    className="flex items-center bg-primary-native gap-2 px-6 py-3 text-base font-medium tracking-wide rounded-md text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-2px] "
                  >
                    <Plus className="w-5 h-5" />
                    <span>Agregar cliente</span>
                  </button>
                </div>
                <div className="flex shrink-0 self-stretch mt-8 mb-8 h-px bg-stone-700 max-md:max-w-full" />

                {/* Improved Filters Section */}
                <div className="w-full mb-2">
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Buscar por nombre, teléfono o email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-200 bg-zinc-700 dark:placeholder-gray-400"
                      />
                    </div>
                    <button
                      onClick={toggleFilters}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg bg-zinc-700 text-gray-200 hover:bg-zinc-600 transition-colors"
                    >
                      <Filter className="w-4 h-4" />
                      <span>Filtros</span>
                    </button>
                  </div>

                  {/* Filter Side Panel */}
                  <FilterSidePanel
                    isOpen={isFilterExpanded}
                    onClose={() => setIsFilterExpanded(false)}
                    selectedRoute={selectedRoute}
                    setSelectedRoute={setSelectedRoute}
                    routes={routes}
                    clearFilters={clearFilters}
                  />

                  {/* Active Filters */}
                  {(searchTerm || selectedRoute) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {searchTerm && (
                        <div className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-green-600/20 text-green-400">
                          <span>Búsqueda: {searchTerm}</span>
                          <button
                            onClick={() => setSearchTerm("")}
                            className="w-4 h-4 flex items-center justify-center rounded-full bg-green-500/30 hover:bg-green-500/50"
                          >
                            ×
                          </button>
                        </div>
                      )}
                      {selectedRoute && (
                        <div className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-green-600/20 text-green-400">
                          <span>Ruta: {selectedRoute}</span>
                          <button
                            onClick={() => setSelectedRoute("")}
                            className="w-4 h-4 flex items-center justify-center rounded-full bg-green-500/30 hover:bg-green-500/50"
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Lista de clientes */}
                <div className="w-full grid md:grid-cols-1 lg:grid-cols-1">
                  {filteredClients.length > 0 ? (
                    filteredClients.map((client, index) => <ClientCard key={index} {...client} />)
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="text-gray-400 mb-2">
                        <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      </div>
                      <p className="text-white text-lg font-medium mb-2">No se encontraron clientes</p>
                      <p className="text-gray-400">Intenta con otros criterios de búsqueda o agrega un nuevo cliente</p>
                    </div>
                  )}
                </div>

                {/* Results Count */}
                <div className="w-full mt-5 mb-4 text-sm text-gray-400">
                  Mostrando {filteredClients.length} de {clients.length} clientes
                </div>
              </div>
            </div>
          </section>

          {/* Formulario emergente */}
          {isFormVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
              <div className="relative rounded-lg max-w-3xl w-full max-h-[90vh]">
                <button
                  onClick={handleCloseForm}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700 text-white hover:bg-zinc-600 transition-colors z-10"
                  aria-label="Cerrar"
                >
                  ×
                </button>
                <div>
                  <ClientForm />
                </div>
              </div>
            </div>
          )}
        </div>

    </ThemeProvider>
  )
}