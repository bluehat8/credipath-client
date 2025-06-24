import * as React from "react"
import { useClientRegistration, type Client } from "hooks/clients/useClientRegistration"

interface PaginationState {
  currentPage: number
  pageSize: number
  totalItems: number
  totalPages: number
}

interface UseClientDashboardReturn {
  clients: Client[]
  routes: string[]
  pagination: PaginationState
  isFormVisible: boolean
  searchTerm: string
  selectedRoute: string
  isFilterExpanded: boolean
  isLoading: boolean
  error: string | null
  filteredClients: Client[]
  handleOpenForm: () => void
  handleCloseForm: () => void
  toggleFilters: () => void
  clearFilters: () => void
  setSearchTerm: (term: string) => void
  setSelectedRoute: (route: string) => void
  setIsFilterExpanded: (expanded: boolean) => void
  refetch: () => void
  handlePageChange: (page: number) => void
  handlePageSizeChange: (size: number) => void
}

export const useClientDashboard = (): UseClientDashboardReturn => {
  const [routes, setRoutes] = React.useState<string[]>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1
  })
  const [isFormVisible, setIsFormVisible] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedRoute, setSelectedRoute] = React.useState("")
  const [isFilterExpanded, setIsFilterExpanded] = React.useState(false)
  
  // Use the useClients hook from useClientRegistration
  const { data: clients = [], isLoading, error, refetch } = useClientRegistration().useClients({
    page: pagination.currentPage,
    pageSize: pagination.pageSize,
    searchTerm: searchTerm || undefined
  })

  // Extract unique routes from clients
  React.useEffect(() => {
    if (clients && clients.length > 0) {
      const uniqueRoutes = Array.from(
        new Set(clients.map(client => client.routeName).filter(Boolean) as string[])
      )
      setRoutes(prevRoutes => {
        // Mantener las rutas existentes y agregar las nuevas
        const routeSet = new Set([...prevRoutes, ...uniqueRoutes])
        return Array.from(routeSet)
      })
    }
  }, [clients])

  const handleOpenForm = () => setIsFormVisible(true)
  const handleCloseForm = () => setIsFormVisible(false)
  const toggleFilters = () => setIsFilterExpanded(prev => !prev)

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedRoute("")
  }

  // Los clientes ya vienen filtrados del servidor
  const filteredClients = clients
  
  // Manejadores de paginación
  const handlePageChange = (page: number) => {
    setPagination(prev => ({
      ...prev,
      currentPage: page
    }))
    refetch()
  }
  
  const handlePageSizeChange = (size: number) => {
    setPagination(prev => ({
      ...prev,
      pageSize: size,
      currentPage: 1 // Resetear a la primera página al cambiar el tamaño
    }))
    refetch()
  }

  // Refetch when filters change
  React.useEffect(() => {
    refetch()
  }, [searchTerm, selectedRoute, pagination.pageSize, pagination.currentPage])
  
  // Reset to first page when filters change
  React.useEffect(() => {
    setPagination(prev => ({
      ...prev,
      currentPage: 1
    }))
  }, [searchTerm, selectedRoute, pagination.pageSize])

  return {
    clients,
    routes,
    pagination,
    isFormVisible,
    searchTerm,
    selectedRoute,
    isFilterExpanded,
    isLoading,
    error: error?.message || null,
    filteredClients,
    handleOpenForm,
    handleCloseForm,
    toggleFilters,
    clearFilters,
    setSearchTerm,
    setSelectedRoute,
    setIsFilterExpanded,
    refetch,
    handlePageChange,
    handlePageSizeChange,
  }
}