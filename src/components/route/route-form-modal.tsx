"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "components/components/ui/dialog"
import { Button } from "components/components/ui/button"
import { Input } from "components/components/ui/input"
import { Label } from "components/components/ui/label"
import { Textarea } from "components/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/components/ui/select"

interface RouteFormData {
  name: string
  description: string
  district: string
  location: string
  status: 'active' | 'inactive'  // Asegurarse de que coincida con el tipo en Route
}

interface RouteFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: RouteFormData) => Promise<boolean>
  mode: "add" | "edit"
  initialData?: Partial<RouteFormData>
  isSubmitting?: boolean
}

export function RouteFormModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  mode, 
  initialData = {}, 
  isSubmitting = false 
}: RouteFormModalProps) {
  const [formData, setFormData] = useState(() => ({
    name: initialData?.name || "",
    description: initialData?.description || "",
    district: initialData?.district || "",
    location: initialData?.location || "",
    status: initialData?.status || "active",
  }))

  // Reset form when modal is opened or initialData changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: initialData?.name || "",
        description: initialData?.description || "",
        district: initialData?.district || "",
        location: initialData?.location || "",
        status: initialData?.status || "active",
      })
    }
  }, [isOpen]) // Solo dependemos de isOpen para el reset

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData).then(success => {
      if (success) {
        onClose()
      }
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="bg-slate-800 border-slate-700 text-white"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Agregar Nueva Ruta" : "Editar Ruta"}</DialogTitle>
          <DialogDescription className="text-slate-400">
            {mode === "add" 
              ? "Completa la información para crear una nueva ruta."
              : "Modifica la información de la ruta."
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre de la ruta</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
              placeholder="Agrega una descripción de la ruta..."
            />
          </div>
          <div>
            <Label htmlFor="district">Distrito</Label>
            <Input
              id="district"
              value={formData.district}
              onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Ubicación</Label>
            <Textarea
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="status">Estado</Label>
            <Select
              value={formData.status}
              onValueChange={(value: 'active' | 'inactive') => 
                setFormData(prev => ({ ...prev, status: value }))
              }
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="active">Activa</SelectItem>
                <SelectItem value="inactive">Inactiva</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                onClose()
              }} 
              className="border-slate-600 text-slate-300"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
            >
              {isSubmitting ? "Guardando..." : mode === "add" ? "Crear Ruta" : "Actualizar Ruta"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}