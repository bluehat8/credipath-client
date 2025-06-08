"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "components/components/ui/dialog"
import { Badge } from "components/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { MapPin, Users, Building2, Calendar, TrendingUp } from "lucide-react"

interface RouteDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  route: any
}

export function RouteDetailsModal({ isOpen, onClose, route }: RouteDetailsModalProps) {
  if (!route) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-purple-400" />
            {route.name}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Información detallada de la ruta
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={`${
                route.status === "active" 
                  ? 'border-green-400 text-green-400 bg-green-400/10' 
                  : 'border-slate-400 text-slate-400 bg-slate-400/10'
              }`}
            >
              {route.status === "active" ? "Activa" : "Inactiva"}
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  Clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{route.clientsCount}</div>
                <p className="text-xs text-slate-400">Total en la ruta</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-purple-400" />
                  Colaboradores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{route.collaboratorsCount}</div>
                <p className="text-xs text-slate-400">Personal asignado</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">Descripción</h4>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-sm text-slate-300">
                {route.description || 'No hay descripción disponible'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">Información de ubicación</h4>
            <div className="bg-slate-700 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-300">Distrito:</span>
                <span className="text-sm text-white">{route.district}</span>
              </div>
              <div className="text-sm text-slate-300">
                <span className="text-slate-400">Dirección:</span> {route.location}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">Historial</h4>
            <div className="bg-slate-700 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400">Creada:</span>
                <span className="text-white">{new Date(route.createdAt).toLocaleDateString()}</span>
              </div>
              {route.lastVisit && (
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">Última visita:</span>
                  <span className="text-white">{new Date(route.lastVisit).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}