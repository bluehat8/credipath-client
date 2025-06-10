"use client"

import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { useQuery, useQueryClient } from "react-query"
import {
  Plus,
  Search,
  MapPin,
  Users,
  Building2,
  MoreHorizontal,
  Trash2,
  Filter,
  Calendar,
  TrendingUp,
  Pencil,
} from "lucide-react"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Card, CardContent, CardHeader } from "components/components/ui/card"
import { Badge } from "components/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "components/components/ui/alert-dialog"
import { Skeleton } from "components/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"
import { RouteFormModal } from "./route-form-modal"
import { RouteDetailsPage } from "./route-details-modal"
import { useRoutesContext } from "context/RoutesContext"
import type { Route } from "hooks/routes/useRoutes"

type RouteStatus = "active" | "inactive"
type SortBy = "name" | "clients" | "recent"
type ViewMode = "grid" | "list"

interface RouteWithOptionalId extends Omit<Route, "id"> {
  id?: string
}

export default function RutasPage() {
  // Usar el contexto de rutas
  const context = useRoutesContext()
  const queryClient = useQueryClient()

  // Desestructurar los valores del contexto
  const {
    routes: contextRoutes,
    isLoading,
    isError,
    error,
    pagination,
    createRoute,
    updateRoute,
    deleteRoute,
    setPage: setCurrentPage,
    setPageSize,
    setSearchQuery,
  } = context

  // Asegurarse de que routes sea un array
  const routes = Array.isArray(contextRoutes) ? contextRoutes : []

  // Estados locales
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | RouteStatus>("all")
  const [selectedRoute, setSelectedRoute] = useState<RouteWithOptionalId | null>(null)
  const [routeToDelete, setRouteToDelete] = useState<Route | null>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortBy>("name")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentView, setCurrentView] = useState<"list" | "details">("list")

  // Efecto para manejar la búsqueda con debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm, setSearchQuery])

  // Filtrar rutas localmente por estado y término de búsqueda
  const filteredRoutes = routes
    .filter((route) => {
      if (!route || typeof route !== "object") {
        return false
      }

      const matchesStatus = statusFilter === "all" || route.status === statusFilter

      if (searchTerm === "") {
        return matchesStatus
      }

      const searchTermLower = searchTerm.toLowerCase()
      const matchesSearch =
        (route.name || "").toLowerCase().includes(searchTermLower) ||
        (route.district && route.district.toLowerCase().includes(searchTermLower)) ||
        (route.location && route.location.toLowerCase().includes(searchTermLower))

      return matchesStatus && Boolean(matchesSearch)
    })
    .sort((a: Route, b: Route) => {
      if (!a || !b) return 0

      switch (sortBy) {
        case "name":
          return (a.name || "").localeCompare(b.name || "")
        case "clients":
          return (b.clientsCount || 0) - (a.clientsCount || 0)
        case "recent": {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0
          return dateB - dateA
        }
        default:
          return 0
      }
    })

  const handleAddRoute = async (routeData: Omit<Route, "id">) => {
    try {
      setIsSubmitting(true)
      await createRoute(routeData)
      setIsAddModalOpen(false)
      return true
    } catch (error) {
      console.error("Error al crear la ruta:", error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleUpdateRoute = async (formData: Omit<Route, 'id'>) => {
    if (!selectedRoute?.id) {
      console.error("No se puede actualizar la ruta: ID no proporcionado")
      return false
    }

    try {
      setIsSubmitting(true)
      
      // Solo enviar los campos editables más el ID
      const updateData = {
        id: selectedRoute.id,
        name: formData.name,
        description: formData.description,
        district: formData.district,
        location: formData.location,
        status: formData.status
      }
      
      console.log("Enviando datos de actualización:", updateData)
      
      await updateRoute(updateData as Route)
      
      // Forzar una actualización de la lista de rutas
      await queryClient.invalidateQueries('routes')
      
      // Mostrar notificación de éxito
      toast.success("Ruta actualizada correctamente")
      
      return true
    } catch (error) {
      console.error("Error al actualizar la ruta:", error)
      // Mostrar notificación de error
      toast.error(error instanceof Error ? error.message : "Error al actualizar la ruta")
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteRoute = async () => {
    if (!routeToDelete?.id) return

    try {
      setIsSubmitting(true)
      await deleteRoute(routeToDelete.id)
      setIsDeleteDialogOpen(false)
      setRouteToDelete(null)
    } catch (error) {
      console.error("Error al eliminar la ruta:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSortChange = (value: string | boolean) => {
    const stringValue = String(value)
    if (stringValue === "name" || stringValue === "clients" || stringValue === "recent") {
      setSortBy(stringValue as SortBy)
    }
  }

  const handleStatusFilterChange = (value: string | boolean) => {
    const stringValue = String(value)
    if (stringValue === "all" || stringValue === "active" || stringValue === "inactive") {
      setStatusFilter(stringValue as "all" | RouteStatus)
    }
  }

  const handleViewDetails = (route: Route) => {
    setSelectedRoute(route)
    setCurrentView("details")
  }

  const handleEditRoute = (route: Route) => {
    // Cerrar cualquier modal abierto primero
    setIsEditModalOpen(false)
    setIsAddModalOpen(false)
    
    // Usar un pequeño retraso para asegurar que el estado se actualice correctamente
    setTimeout(() => {
      setSelectedRoute(route)
      setIsEditModalOpen(true)
    }, 50)
  }

  const handleBackToList = () => {
    setCurrentView("list")
    setSelectedRoute(null)
  }



  const statsData = {
    totalRoutes: pagination?.total || 0,
    totalClients: routes.reduce((sum, route) => sum + (route.clientsCount || 0), 0),
    totalCollaborators: routes.reduce((sum, route) => sum + (route.collaboratorsCount || 0), 0),
    activeRoutes: routes.filter((route) => route.status === "active").length,
    avgClientsPerRoute:
      routes.length > 0
        ? Math.round(routes.reduce((sum, route) => sum + (route.clientsCount || 0), 0) / routes.length)
        : 0,
  }

  // Si estamos en la vista de detalles, mostrar el componente de detalles
  if (currentView === "details" && selectedRoute) {
    return (
      <>
        <RouteDetailsPage 
          route={selectedRoute} 
          onBack={handleBackToList} 
          onEdit={() => setIsEditModalOpen(true)}
        />
        {/* Modal de edición */}
        <RouteFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleUpdateRoute}
          mode="edit"
          initialData={selectedRoute}
          isSubmitting={isSubmitting}
        />
      </>
    )
  }

  if (isLoading && routes.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-8 w-32 mb-2 bg-slate-700" />
              <Skeleton className="h-4 w-64 bg-slate-700" />
            </div>
            <Skeleton className="h-10 w-32 bg-slate-700" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 bg-slate-700" />
                  <Skeleton className="h-4 w-1/2 bg-slate-700" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2 bg-slate-700" />
                  <Skeleton className="h-4 w-2/3 bg-slate-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className=" space-y-6">
        {/* Header with Stats */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">Gestión de Rutas</h1>
              <p className="text-slate-400 mt-2">Administra las rutas de tu sistema de préstamos</p>
            </div>

            {/* Compact Stats */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-700">
                <MapPin className="h-4 w-4 text-blue-400" />
                <div className="text-sm">
                  <span className="text-white font-semibold">{statsData.totalRoutes}</span>
                  <span className="text-slate-400 ml-1">rutas</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-700">
                <Users className="h-4 w-4 text-green-400" />
                <div className="text-sm">
                  <span className="text-white font-semibold">{statsData.totalClients}</span>
                  <span className="text-slate-400 ml-1">clientes</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-700">
                <Building2 className="h-4 w-4 text-purple-400" />
                <div className="text-sm">
                  <span className="text-white font-semibold">{statsData.totalCollaborators}</span>
                  <span className="text-slate-400 ml-1">colaboradores</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <Card className="bg-zinc-800 ">
            <CardContent className="py-4">
              <div className="flex flex-wrap items-center gap-4">
                {/* Search */}
                <div className="relative flex-1 min-w-[280px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Buscar por nombre, distrito o ubicación..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zinc-600 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                {/* Separator */}
                <div className="h-6 w-px bg-slate-600"></div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-400" />
                  {/* <span className="text-sm text-slate-400">Estado:</span> */}
                  <Select value={statusFilter} onValueChange={handleStatusFilterChange}>
                    <SelectTrigger className="w-28 bg-zinc-600 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Activos</SelectItem>
                      <SelectItem value="inactive">Inactivos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  {/* <span className="text-sm text-slate-400">Ordenar:</span> */}
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-36 bg-zinc-600 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectItem value="name">Ordenar por nombre</SelectItem>
                      <SelectItem value="clients">Ordenar por clientes</SelectItem>
                      <SelectItem value="recent">Recientes primero</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400">Mostrar:</span>
                  <Select value={String(pagination.limit)} onValueChange={(value) => setPageSize(Number(value))}>
                    <SelectTrigger className="w-16 bg-zinc-600 border-zinc-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="48">48</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Results Count */}
                <div className="flex items-center gap-2 bg-slate-700/30 rounded-lg px-3 py-1.5 border border-slate-600/30">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-300 font-medium">{filteredRoutes.length}</span>
                  <span className="text-sm text-slate-400">resultado{filteredRoutes.length !== 1 ? "s" : ""}</span>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Add Button */}
                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-green-gradient text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Nueva Ruta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Routes Table-like Layout */}
        {filteredRoutes.length === 0 ? (
          <Card className="bg-zinc-900 border-slate-700">
            <CardContent className="flex flex-col items-center justify-center py-16 px-6 text-center">
              <MapPin className="h-16 w-16 text-slate-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">No hay rutas disponibles</h3>
              <p className="text-slate-400 mb-6 max-w-sm">
                {searchTerm
                  ? "No se encontraron rutas que coincidan con tu búsqueda."
                  : "Empieza agregando tu primera ruta para comenzar a organizar tus clientes."}
              </p>
              {!searchTerm && (
                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Agregar Primera Ruta
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {/* Table Header */}
            <Card className="bg-zinc-700">
              <CardContent className="py-3">
                <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-slate-100">
                  <div className="col-span-3">Nombre y Ubicación</div>
                  <div className="col-span-2 text-center">Estado</div>
                  <div className="col-span-2 text-center">Clientes</div>
                  <div className="col-span-2 text-center">Colaboradores</div>
                  <div className="col-span-2 text-center">Última Visita</div>
                  <div className="col-span-1 text-center">Acciones</div>
                </div>
              </CardContent>
            </Card>

            {/* Route Rows */}
            {filteredRoutes.map((route) => (
              <Card
                key={route.id}
                className="bg-zinc-800 border-zinc-700 hover:bg-slate-700/50 transition-all duration-300 group hover:shadow-lg"
              >
                <CardContent className="py-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Nombre y Ubicación */}
                    <div className="col-span-3">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                          {route.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-slate-400">
                          <MapPin className="h-4 w-4 flex-shrink-0 text-green-400" />
                          <span className="truncate">{route.district}</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{route.location}</p>
                      </div>
                    </div>

                    {/* Estado */}
                    <div className="col-span-2 text-center">
                      <Badge
                        variant="outline"
                        className={`text-xs px-3 py-1 ${
                          route.status === "active"
                            ? "border-green-400 text-green-400 bg-green-400/10"
                            : "border-slate-400 text-slate-400 bg-slate-400/10"
                        }`}
                      >
                        {route.status === "active" ? "Activa" : "Inactiva"}
                      </Badge>
                    </div>

                    {/* Clientes */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Users className="h-4 w-4 text-green-400" />
                        <span className="text-white font-medium">{route.clientsCount || 0}</span>
                      </div>
                    </div>

                    {/* Colaboradores */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Building2 className="h-4 w-4 text-green-400" />
                        <span className="text-white font-medium">{route.collaboratorsCount || 0}</span>
                      </div>
                    </div>

                    {/* Última Visita */}
                    <div className="col-span-2 text-center">
                      {route.lastVisit ? (
                        <div className="flex items-center justify-center gap-1 text-sm text-slate-400">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(route.lastVisit).toLocaleDateString()}</span>
                        </div>
                      ) : (
                        <span className="text-slate-500 text-sm">Sin visitas</span>
                      )}
                    </div>

                    {/* Acciones */}
                    <div className="col-span-1 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-600"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700 text-white w-40">
                          <DropdownMenuItem
                            onClick={() => handleViewDetails(route)}
                            className="hover:bg-slate-700 cursor-pointer flex items-center px-3 py-2 text-sm"
                          >
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>Ver detalles</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onSelect={() => handleEditRoute(route)}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Editar</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <div
                              onClick={() => {
                                setRouteToDelete(route)
                                setIsDeleteDialogOpen(true)
                              }}
                              className="text-red-400 hover:bg-red-900/30 hover:text-red-300 cursor-pointer flex items-center px-3 py-2 text-sm"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Eliminar</span>
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Modals */}
        {isAddModalOpen && (
          <RouteFormModal
            isOpen={isAddModalOpen}
            onClose={() => {
              setIsAddModalOpen(false)
            }}
            onSubmit={async (data) => {
              const success = await handleAddRoute(data)
              if (success) {
                setIsAddModalOpen(false)
              }
              return success
            }}
            mode="add"
            isSubmitting={isSubmitting}
          />
        )}

        {isEditModalOpen && selectedRoute && (
          <RouteFormModal
            key={`edit-${selectedRoute.id}`}
            isOpen={isEditModalOpen}
            onClose={() => {
              setIsEditModalOpen(false)
              setSelectedRoute(null)
            }}
            onSubmit={async (data) => {
              const success = await handleUpdateRoute(data)
              if (success) {
                setIsEditModalOpen(false)
                setSelectedRoute(null)
              }
              return success
            }}
            mode="edit"
            initialData={selectedRoute}
            isSubmitting={isSubmitting}
          />
        )}

        {/* Delete Dialog */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent className="bg-slate-800 border-slate-700">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">¿Estás seguro?</AlertDialogTitle>
              <AlertDialogDescription className="text-slate-400">
                Esta acción no se puede deshacer. Se eliminará permanentemente la ruta
                {routeToDelete && <strong className="text-white"> "{routeToDelete.name}"</strong>} y todos sus datos
                asociados.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteRoute}
                className="bg-red-600 hover:bg-red-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Eliminando..." : "Eliminar"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
