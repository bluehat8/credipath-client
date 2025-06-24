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
    pagination,
    isFormVisible,
    searchTerm,
    selectedRoute,
    isFilterExpanded,
    filteredClients,
    isLoading,
    error,
    handleOpenForm,
    handleCloseForm,
    toggleFilters,
    clearFilters,
    setSearchTerm,
    setSelectedRoute,
    setIsFilterExpanded,
    refetch,
    handlePageChange,
    handlePageSizeChange
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
                <div className="w-full">
                  {isLoading ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-native mb-4" />
                      <p className="text-white">Cargando clientes...</p>
                    </div>
                  ) : error ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <div className="text-red-500 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-red-400 text-lg font-medium mb-2">Error al cargar los clientes</p>
                      <p className="text-gray-400 mb-4">{error}</p>
                      <button
                        onClick={refetch}
                        className="px-4 py-2 bg-primary-native text-white rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        Reintentar
                      </button>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-1 lg:grid-cols-1">
                      {filteredClients.length > 0 ? (
                        filteredClients.map((client) => (
                          <ClientCard key={client.id} {...client} />
                        ))
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
                  )}
                </div>

                {/* Paginación y contador de resultados */}
                <div className="w-full mt-5 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                  <div>
                    Mostrando {filteredClients.length} de {pagination.totalItems} clientes
                    {searchTerm && ` para "${searchTerm}"`}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span>Mostrar:</span>
                      <select
                        value={pagination.pageSize}
                        onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                        className="bg-zinc-700 text-white text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-native"
                      >
                        {[5, 10, 20, 50].map(size => (
                          <option key={size} value={size} className="bg-zinc-800">
                            {size}
                          </option>
                        ))}
                      </select>
                      <span>por página</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                        disabled={pagination.currentPage === 1}
                        className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700"
                        aria-label="Página anterior"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <span>
                        Página {pagination.currentPage} de {pagination.totalPages}
                      </span>
                      
                      <button
                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                        disabled={pagination.currentPage >= pagination.totalPages}
                        className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700"
                        aria-label="Página siguiente"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Formulario emergente */}
          {isFormVisible && (
            <ClientForm 
              onClose={handleCloseForm} 
              onSuccess={() => {
                handleCloseForm();
                refetch();
              }} 
            />
          )}
        </div>

    </ThemeProvider>
  )
}