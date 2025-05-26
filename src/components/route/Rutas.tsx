"use client"

import { useState } from "react"
import { Plus, Search, MapPin, Users, Building2, MoreHorizontal, Edit, Trash2, Eye, Filter, Calendar, TrendingUp } from "lucide-react"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/components/ui/card"
import { Badge } from "components/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "components/components/ui/dropdown-menu"
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
import { Separator } from "components/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"
import { RouteFormModal } from "./route-form-modal"
import { RouteDetailsModal } from "./route-details-modal"

// Mock data
const mockRoutes = [
  {
    id: "1",
    name: "Ruta Centro",
    district: "Lima Cercado",
    location: "Av. Abancay 123, Lima Centro",
    clientsCount: 25,
    collaboratorsCount: 3,
    status: "active",
    createdAt: "2024-01-15",
    lastVisit: "2024-01-20",
  },
  {
    id: "2",
    name: "Ruta Norte",
    district: "San Martín de Porres",
    location: "Av. Universitaria 456, SMP",
    clientsCount: 18,
    collaboratorsCount: 2,
    status: "active",
    createdAt: "2024-01-10",
    lastVisit: "2024-01-19",
  },
  {
    id: "3",
    name: "Ruta Sur",
    district: "Villa El Salvador",
    location: "Av. Pachacútec 789, VES",
    clientsCount: 32,
    collaboratorsCount: 4,
    status: "inactive",
    createdAt: "2024-01-05",
    lastVisit: "2024-01-18",
  },
  {
    id: "4",
    name: "Ruta Este",
    district: "Ate",
    location: "Av. Nicolás Ayllón 321, Ate",
    clientsCount: 12,
    collaboratorsCount: 2,
    status: "active",
    createdAt: "2024-01-12",
    lastVisit: "2024-01-21",
  },
]

export default function RutasPage() {
  const [routes, setRoutes] = useState(mockRoutes)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [routeToDelete, setRouteToDelete] = useState(null)
  const [pageSize, setPageSize] = useState("12")
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState("grid")

  const filteredRoutes = routes
    .filter((route) => {
      const matchesSearch = 
        route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.location.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesStatus = statusFilter === "all" || route.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "clients":
          return b.clientsCount - a.clientsCount
        case "recent":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        default:
          return 0
      }
    })

  const handleAddRoute = async (data: any) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newRoute = {
      id: Date.now().toString(),
      ...data,
      clientsCount: 0,
      collaboratorsCount: 0,
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
      lastVisit: null,
    }
    setRoutes((prev) => [...prev, newRoute])
    setIsAddModalOpen(false)
    setIsLoading(false)
  }

  const handleEditRoute = async (data: any) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // setRoutes((prev) => prev.map((route) => (route.id === selectedRoute.id ? { ...route, ...data } : route)))
    setIsEditModalOpen(false)
    setSelectedRoute(null)
    setIsLoading(false)
  }

  const handleDeleteRoute = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // setRoutes((prev) => prev.filter((route) => route.id !== routeToDelete.id))
    setIsDeleteDialogOpen(false)
    setRouteToDelete(null)
    setIsLoading(false)
  }

  const statsData = {
    totalRoutes: routes.length,
    activeRoutes: routes.filter((r) => r.status === "active").length,
    totalClients: routes.reduce((sum, route) => sum + route.clientsCount, 0),
    totalCollaborators: routes.reduce((sum, route) => sum + route.collaboratorsCount, 0),
    avgClientsPerRoute: routes.length > 0 ? Math.round(routes.reduce((sum, route) => sum + route.clientsCount, 0) / routes.length) : 0
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
              <h1 className="text-4xl font-bold text-white">
                Gestión de Rutas
              </h1>
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-zinc-600 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                {/* Separator */}
                <div className="h-6 w-px bg-slate-600"></div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-400" />
                  {/* <span className="text-sm text-slate-400">Estado:</span> */}
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-28 bg-zinc-600 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Activas</SelectItem>
                      <SelectItem value="inactive">Inactivas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  {/* <span className="text-sm text-slate-400">Ordenar:</span> */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-36 bg-zinc-600 border-zinc-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectItem value="name">Por nombre</SelectItem>
                      <SelectItem value="clients">Por clientes</SelectItem>
                      <SelectItem value="recent">Más recientes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400">Mostrar:</span>
                  <Select value={pageSize} onValueChange={setPageSize}>
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
                  <span className="text-sm text-slate-400">resultado{filteredRoutes.length !== 1 ? 's' : ''}</span>
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
                {searchQuery
                  ? "No se encontraron rutas que coincidan con tu búsqueda."
                  : "Empieza agregando tu primera ruta para comenzar a organizar tus clientes."}
              </p>
              {!searchQuery && (
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
                            ? 'border-green-400 text-green-400 bg-green-400/10' 
                            : 'border-slate-400 text-slate-400 bg-slate-400/10'
                        }`}
                      >
                        {route.status === "active" ? "Activa" : "Inactiva"}
                      </Badge>
                    </div>

                    {/* Clientes */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Users className="h-4 w-4 text-green-400" />
                        <span className="text-white font-medium">{route.clientsCount}</span>
                      </div>
                    </div>

                    {/* Colaboradores */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Building2 className="h-4 w-4 text-green-400" />
                        <span className="text-white font-medium">{route.collaboratorsCount}</span>
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
                        <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700 text-white">
                          <DropdownMenuItem
                            onClick={() => {
                              // setSelectedRoute(route)
                              setIsDetailsModalOpen(true)
                            }}
                            className="hover:bg-slate-700 cursor-pointer"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Ver detalles
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              // setSelectedRoute(route)
                              setIsEditModalOpen(true)
                            }}
                            className="hover:bg-slate-700 cursor-pointer"
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              // setRouteToDelete(route)
                              setIsDeleteDialogOpen(true)
                            }}
                            className="text-red-400 hover:bg-red-900/30 hover:text-red-300 cursor-pointer"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Eliminar
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

        {/* Pagination could go here */}
        
        {/* Modals */}
        <RouteFormModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddRoute}
          mode="add"
          isSubmitting={isLoading}
        />

        <RouteFormModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false)
            setSelectedRoute(null)
          }}
          onSubmit={handleEditRoute}
          initialData={selectedRoute}
          mode="edit"
          isSubmitting={isLoading}
        />

        <RouteDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => {
            setIsDetailsModalOpen(false)
            setSelectedRoute(null)
          }}
          route={selectedRoute}
        />

        {/* Delete Dialog */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent className="bg-slate-800 border-slate-700">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">¿Estás seguro?</AlertDialogTitle>
              <AlertDialogDescription className="text-slate-400">
                Esta acción no se puede deshacer. Se eliminará permanentemente la ruta
                {/* <strong className="text-white"> "{routeToDelete?.name}"</strong> y todos sus datos asociados. */}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteRoute} className="bg-red-600 hover:bg-red-700 text-white">
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}