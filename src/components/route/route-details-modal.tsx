"use client"

import { Badge } from "components/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Button } from "components/components/ui/button"
import { MapPin, Users, Building2, Calendar, TrendingUp, ArrowLeft, MoreVertical } from "lucide-react"

interface RouteDetailsPageProps {
  route: any
  onBack: () => void
}

export function RouteDetailsPage({ route, onBack }: RouteDetailsPageProps) {
  if (!route) return null

  return (
    <div className="min-h-screen bg-zinc-800 p-4 rounded-lg">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Improved Header */}
        <div className="relative">
          {/* Background gradient for visual depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/50 to-transparent rounded-2xl"></div>

          <div className="relative bg-zinc-700/80 backdrop-blur-sm border border-zinc-600/50 rounded-2xl p-6 sm:p-5">
            {/* Absolute positioned back button */}
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="absolute top-4 left-4 sm:top-6 sm:left-6 text-gray-400 hover:text-white hover:bg-zinc-600/50 rounded-xl transition-all duration-200 z-10"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>

            {/* Header content with proper spacing for back button */}
            <div className="pl-12 sm:pl-16">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                
                <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">

                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div
                      className={`absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-zinc-700 ${
                        route.status === "active" ? "bg-emerald-400" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>

                  {/* Route information */}
                  <div className="flex-1 min-w-0">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 truncate">
                      {route.name}
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">Información detallada de la ruta</p>
                  </div>
                  
                </div>

                {/* Right side: Status badge + Actions */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Badge
                    variant="outline"
                    className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium ${
                      route.status === "active"
                        ? "border-emerald-400/50 text-emerald-400 bg-emerald-400/10"
                        : "border-gray-500/50 text-gray-400 bg-gray-500/10"
                    }`}
                  >
                    {route.status === "active" ? "Activa" : "Inactiva"}
                  </Badge>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-zinc-600/50 rounded-xl p-2"
                  >
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Más opciones</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-none relative overflow-hidden">
            <CardContent className="p-4 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Users className="h-4 w-4 text-white/80" />
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="h-3 w-3 text-white/80" />
                    <span className="text-white/80">8.28%</span>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">${route.clientsCount.toLocaleString()}</div>
                  <p className="text-xs text-white/70 uppercase tracking-wide">Ingresos</p>
                </div>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          </Card>

          <Card className="bg-zinc-700 border-zinc-600">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Building2 className="h-4 w-4 text-gray-400" />
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">5.34%</span>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{route.collaboratorsCount}</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Colaboradores</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-700 border-zinc-600">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gray-400">Desde el mes pasado</span>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{new Date(route.createdAt).toLocaleDateString()}</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Fecha creación</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-700 border-zinc-600">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gray-400">Todo el tiempo</span>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">
                    {route.lastVisit ? new Date(route.lastVisit).toLocaleDateString() : "Sin visitas"}
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Última visita</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-zinc-700 border-zinc-600">
            <CardHeader className="pb-3 pt-4 px-4">
              <CardTitle className="text-base text-white uppercase tracking-wide">Descripción</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-4 pb-4">
              <div className="bg-zinc-800 rounded-lg p-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {route.description || "No hay descripción disponible para esta ruta."}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-700 border-zinc-600">
            <CardHeader className="pb-3 pt-4 px-4">
              <CardTitle className="text-base text-white uppercase tracking-wide">Ubicación</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-4 pb-4">
              <div className="bg-zinc-800 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-sm">
                    <span className="text-gray-400">Distrito:</span>
                    <span className="text-white font-medium ml-2">{route.district}</span>
                  </div>
                </div>
                <div className="pl-5">
                  <span className="text-xs text-gray-400">Dirección:</span>
                  <p className="text-white text-sm mt-1">{route.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Section */}
        <Card className="bg-zinc-700 border-zinc-600">
          <CardHeader className="pb-3 pt-4 px-4">
            <CardTitle className="text-base text-white uppercase tracking-wide">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 px-4 pb-4">
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-emerald-400 font-medium">Ruta creada</div>
                    <p className="text-xs text-gray-400 mt-1">
                      La ruta fue creada el{" "}
                      {new Date(route.createdAt).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <span className="text-xs text-gray-500">
                      {Math.floor((Date.now() - new Date(route.createdAt).getTime()) / (1000 * 60 * 60 * 24))} días
                      atrás
                    </span>
                  </div>
                </div>

                {route.lastVisit && (
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm text-emerald-400 font-medium">Última visita registrada</div>
                      <p className="text-xs text-gray-400 mt-1">
                        Se registró actividad en la ruta el{" "}
                        {new Date(route.lastVisit).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <span className="text-xs text-gray-500">
                        {Math.floor((Date.now() - new Date(route.lastVisit).getTime()) / (1000 * 60 * 60 * 24))} días
                        atrás
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-emerald-400 font-medium">Estado actualizado</div>
                    <p className="text-xs text-gray-400 mt-1">
                      El estado de la ruta se encuentra {route.status === "active" ? "activo" : "inactivo"}
                    </p>
                    <span className="text-xs text-gray-500">Hace 2 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="bg-zinc-700 text-gray-300 border-zinc-600 hover:bg-zinc-600 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a la lista
          </Button>
        </div>
      </div>
    </div>
  )
}
