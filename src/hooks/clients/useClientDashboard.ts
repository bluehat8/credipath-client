import * as React from "react"
import axiosInstance from "../../utils/axios"

interface ClientResponseDTO {
  id: number
  identification: string
  name: string
  code: string | null
  routeId: number
  routeName: string
  homeAddress: string
  businessAddress: string | null
  gender: string | null
  municipality: string | null
  // Agregar más campos según sea necesario
}

interface PaginationState {
  currentPage: number
  pageSize: number
  totalItems: number
  totalPages: number
}

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T | null
}

interface PaginatedClientsResponse {
  items: ClientResponseDTO[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

interface UseClientDashboardReturn {
  clients: ClientResponseDTO[]
  routes: string[]
  pagination: PaginationState
  isFormVisible: boolean
  searchTerm: string
  selectedRoute: string
  isFilterExpanded: boolean
  isLoading: boolean
  error: string | null
  filteredClients: ClientResponseDTO[]
  handleOpenForm: () => void
  handleCloseForm: () => void
  toggleFilters: () => void
  clearFilters: () => void
  setSearchTerm: (term: string) => void
  setSelectedRoute: (route: string) => void
  setIsFilterExpanded: (expanded: boolean) => void
  refetch: () => Promise<void>
  handlePageChange: (page: number) => void
  handlePageSizeChange: (size: number) => void
}

export const useClientDashboard = (): UseClientDashboardReturn => {
  const [clients, setClients] = React.useState<ClientResponseDTO[]>([])
  const [routes, setRoutes] = React.useState<string[]>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1
  })
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [isFormVisible, setIsFormVisible] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedRoute, setSelectedRoute] = React.useState("")
  const [isFilterExpanded, setIsFilterExpanded] = React.useState(false)
  const initialLoadRef = React.useRef(false)
  const isFetchingRef = React.useRef(false)

  // Fetch clients from API with pagination and filters
  const fetchClients = React.useCallback(async () => {
    // Evitar múltiples peticiones simultáneas
    if (isFetchingRef.current) return
    
    try {
      isFetchingRef.current = true
      setIsLoading(true)
      setError(null)
      
      // Construir query params
      const params = new URLSearchParams()
      params.append('pageNumber', pagination.currentPage.toString())
      params.append('pageSize', pagination.pageSize.toString())
      
      if (searchTerm) {
        params.append('search', searchTerm)
      }
      
      if (selectedRoute) {
        params.append('routeName', selectedRoute)
      }
      
      // Hacer la petición
      const response = await axiosInstance.get<ApiResponse<PaginatedClientsResponse>>(
        `/Client?${params.toString()}`
      )
      
      if (response.data.success && response.data.data) {
        const { items, totalCount, pageNumber, pageSize, totalPages } = response.data.data
        
        setClients(items)
        setPagination({
          currentPage: pageNumber,
          pageSize,
          totalItems: totalCount,
          totalPages
        })
        
        // Extraer rutas únicas (esto probablemente debería venir del backend)
        const uniqueRoutes = Array.from(
          new Set(items.map(client => client.routeName).filter(Boolean))
        ) as string[]
        setRoutes(prevRoutes => {
          // Mantener las rutas existentes y agregar las nuevas
          const routeSet = new Set([...prevRoutes, ...uniqueRoutes])
          return Array.from(routeSet)
        })
      }
    } catch (err) {
      console.error('Error fetching clients:', err)
      setError('No se pudieron cargar los clientes. Por favor, intente de nuevo.')
    } finally {
      setIsLoading(false)
      isFetchingRef.current = false
      initialLoadRef.current = true
    }
  }, [pagination.currentPage, pagination.pageSize, searchTerm, selectedRoute])

  const handleOpenForm = () => setIsFormVisible(true)
  const handleCloseForm = () => setIsFormVisible(false)
  const toggleFilters = () => setIsFilterExpanded(true)

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
  }
  
  const handlePageSizeChange = (size: number) => {
    setPagination(prev => ({
      ...prev,
      pageSize: size,
      currentPage: 1 // Resetear a la primera página al cambiar el tamaño
    }))
  }

  // Efecto para la carga inicial y cuando cambian los filtros
  React.useEffect(() => {
    // Resetear a la primera página cuando cambian los filtros
    if (initialLoadRef.current) {
      setPagination(prev => ({
        ...prev,
        currentPage: 1
      }))
    } else {
      fetchClients()
    }
  }, [searchTerm, selectedRoute, pagination.pageSize])
  
  // Efecto para cargar datos cuando cambia la página
  React.useEffect(() => {
    if (initialLoadRef.current) {
      fetchClients()
    }
  }, [pagination.currentPage])
  
  // Limpieza al desmontar
  React.useEffect(() => {
    return () => {
      isFetchingRef.current = false
    }
  }, [])

  return {
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
    refetch: fetchClients,
    handlePageChange,
    handlePageSizeChange
  }
}