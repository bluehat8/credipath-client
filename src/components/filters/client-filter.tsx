import React from "react"
import { X, Calendar } from "lucide-react"
import { Separator } from "components/components/ui/separator"
import { ThemeProvider } from "context/ThemeContext"

interface FilterSidePanelProps {
  isOpen: boolean
  onClose: () => void
  selectedRoute: string
  setSelectedRoute: (route: string) => void
  routes: string[]
  clearFilters: () => void
}

export const FilterSidePanel: React.FC<FilterSidePanelProps> = ({
  isOpen,
  onClose,
  selectedRoute,
  setSelectedRoute,
  routes,
  clearFilters,
}) => {
  // Estados para los nuevos filtros
  const [status, setStatus] = React.useState("todos")
  const [category, setCategory] = React.useState("todas")
  const [dateRange, setDateRange] = React.useState("cualquiera")
  const [location, setLocation] = React.useState("")
  const [sortBy, setSortBy] = React.useState("nombre_asc")

  // Datos de ejemplo para los filtros

  const locations = ["Managua", "León", "Granada", "Masaya", "Matagalpa"]
  const dateRanges = [
    { value: "cualquiera", label: "Cualquier fecha" },
    { value: "hoy", label: "Hoy" },
    { value: "semana", label: "Esta semana" },
    { value: "mes", label: "Este mes" },
    { value: "trimestre", label: "Último trimestre" },
    { value: "anio", label: "Este año" },
  ]
  const sortOptions = [
    { value: "nombre_asc", label: "Nombre (A-Z)" },
    { value: "nombre_desc", label: "Nombre (Z-A)" },
    { value: "reciente", label: "Más recientes" },
    { value: "antiguo", label: "Más antiguos" },
  ]

  // Función para limpiar todos los filtros
  const handleClearAll = () => {
    clearFilters()
    setStatus("todos")
    setCategory("todas")
    setDateRange("cualquiera")
    setLocation("")
    setSortBy("nombre_asc")
  }

  return (
    <ThemeProvider>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-zinc-800 z-50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium text-white">Filtros avanzados</h3>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-700 transition-colors">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-6 flex-1 overflow-y-auto">
            {/* Ruta */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Ruta</label>
              <select
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200 bg-zinc-700"
              >
                <option value="">Todas las rutas</option>
                {routes.map((route) => (
                  <option key={route} value={route}>
                    {route}
                  </option>
                ))}
              </select>
            </div>

            {/* Estado */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Estado</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setStatus("todos")}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    status === "todos" ? "bg-green-600 text-white" : "bg-zinc-700 text-gray-200 hover:bg-zinc-600"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setStatus("activos")}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    status === "activos" ? "bg-green-600 text-white" : "bg-zinc-700 text-gray-200 hover:bg-zinc-600"
                  }`}
                >
                  Activos
                </button>
                <button
                  onClick={() => setStatus("inactivos")}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    status === "inactivos" ? "bg-green-600 text-white" : "bg-zinc-700 text-gray-200 hover:bg-zinc-600"
                  }`}
                >
                  Inactivos
                </button>
                <button
                  onClick={() => setStatus("pendientes")}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    status === "pendientes" ? "bg-green-600 text-white" : "bg-zinc-700 text-gray-200 hover:bg-zinc-600"
                  }`}
                >
                  Pendientes
                </button>
              </div>
            </div>

           
            {/* Ubicación */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Ubicación</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200 bg-zinc-700"
              >
                <option value="">Todas las ubicaciones</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc.toLowerCase()}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Rango de fechas */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Fecha de registro</label>
              <div className="relative">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200 bg-zinc-700"
                >
                  {dateRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <Separator className="bg-zinc-700" />

            {/* Ordenar por */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200 bg-zinc-700"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtros personalizados */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filtros personalizados</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="filter-deudas"
                    className="w-4 h-4 rounded border-gray-600 text-green-500 focus:ring-green-500 focus:ring-offset-0 bg-zinc-700"
                  />
                  <label htmlFor="filter-deudas" className="ml-2 text-sm text-gray-300">
                    Con deudas pendientes
                  </label>
                </div>
               
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-700 space-y-3">
            <button
              onClick={handleClearAll}
              className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-zinc-700 text-gray-200 hover:bg-zinc-600 transition-colors"
            >
              Limpiar todos los filtros
            </button>
            <button
              onClick={onClose}
              className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-500 transition-colors"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

