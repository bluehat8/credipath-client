"use client"

import { useState, useEffect } from "react"
import { CollaboratorCard } from "components/common/CollaboratorCard"
import CollaboratorForm from "../components/Modal/collaborator/CollaboratorForm"
import { useCollaboratorService, type Collaborator } from "../hooks/collaborator/use-collaborator-service"
import { Button } from "components/components/ui/button"
import { Plus, Users, Search } from "lucide-react"
import { Input } from "components/components/ui/input"
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
import { Badge } from "components/components/ui/badge"
import Pagination from "../utils/Pagination"
import PageSizeSelector from "../utils/PageSizeSelector"
import toast from "react-hot-toast"

export function CollaboratorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | undefined>()
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [collaboratorToDelete, setCollaboratorToDelete] = useState<string | null>(null)

  const {
    collaborators,
    loading,
    error,
    fetchCollaborators,
    createCollaborator,
    updateCollaborator,
    deleteCollaborator,
  } = useCollaboratorService()

  useEffect(() => {
    fetchCollaborators().catch((error) => {
      toast.error('No se pudieron cargar los colaboradores:', {
          style: {
            borderLeft: '4px solid #10b981',
          },
      });
    })
  }, [fetchCollaborators])

  const handleAddCollaborator = () => {
    setIsEditMode(false)
    setSelectedCollaborator(undefined)
    setIsModalOpen(true)
  }

  const handleEditCollaborator = (collaborator: Collaborator) => {
    setIsEditMode(true)
    setSelectedCollaborator(collaborator)
    setIsModalOpen(true)
  }

  const handleDeleteCollaborator = (id?: string) => {
    if (!id) return
    setCollaboratorToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!collaboratorToDelete) return

    try {
      await deleteCollaborator(collaboratorToDelete)
      toast.success('Colaborador eliminado correctamente', {
          style: {
            borderLeft: '4px solid #10b981',
          },
        });
    } catch (error: any) {
      toast.error('No se pudo elimar el colaborador', {
          style: {
            borderLeft: '4px solid #10b981',
          },
      });
    } finally {
      setDeleteDialogOpen(false)
      setCollaboratorToDelete(null)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSaveCollaborator = async (data: any) => {
    try {
      console.log("Datos recibidos del formulario:", data)

      if (isEditMode && selectedCollaborator?.id) {
        await updateCollaborator(selectedCollaborator.id, data)

        toast.success('Colaborador actualizado correctamente', {
          style: {
            borderLeft: '4px solid #10b981',
          },
        });
      } else {
        await createCollaborator(data)
        toast.success('Colaborador creado correctamente', {
          style: {
            borderLeft: '4px solid #10b981',
          },
        });
      }

      await fetchCollaborators()
      setIsModalOpen(false)
    } catch (error: any) {

      toast.error('No se pudieron cargar los colaboradores:', {
          style: {
            borderLeft: '4px solid #10b981',
          },
      });
    }
  }

  // Filtrar colaboradores por término de búsqueda
  // Paginación
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const filteredCollaborators = Array.isArray(collaborators)
    ? collaborators.filter(
        (collaborator) =>
          collaborator.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          collaborator.email?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : []

  // Calcular los elementos de la página actual
  const totalPages = Math.max(1, Math.ceil(filteredCollaborators.length / pageSize))
  const paginatedCollaborators = filteredCollaborators.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  // Resetear página si cambia el filtro o el tamaño de página
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, pageSize])

  const CollaboratorSkeleton = () => (
    <div className="w-full animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center justify-between p-6 mb-4 bg-zinc-700/50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-zinc-600 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-600 rounded w-32"></div>
              <div className="h-3 bg-zinc-600 rounded w-48"></div>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="h-8 w-16 bg-zinc-600 rounded"></div>
            <div className="h-8 w-16 bg-zinc-600 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-24 h-24 mb-6 bg-zinc-700 rounded-full flex items-center justify-center">
        <Users className="w-12 h-12 text-zinc-400" />
      </div>
      <h3 className="text-xl font-medium text-white mb-2">
        {searchTerm ? "No se encontraron colaboradores" : "No hay colaboradores registrados"}
      </h3>
      <p className="text-zinc-400 mb-6 max-w-md">
        {searchTerm
          ? `No hay colaboradores que coincidan con "${searchTerm}"`
          : "Comienza agregando tu primer colaborador al equipo"}
      </p>
      {!searchTerm && (
        <Button onClick={handleAddCollaborator} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Agregar primer colaborador
        </Button>
      )}
    </div>
  )

  return (
    <>
      <div className="min-h-screen">
        <div className="w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-wide mb-2">Colaboradores</h1>
          </div>

          {/* Main Content Card */}
          <div className="bg-zinc-800 rounded-xl overflow-hidden">
            {/* Card Header */}
            <div className="p-6 border-b border-zinc-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-400" />
                  <h2 className="text-xl font-semibold text-white">Control de colaboradores</h2>
                  {Array.isArray(collaborators) && (
                    <Badge variant="secondary" className="bg-zinc-700 text-zinc-300">
                      {collaborators.length} {collaborators.length === 1 ? "colaborador" : "colaboradores"}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <Input
                      placeholder="Buscar colaboradores..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-zinc-700 border-zinc-600 text-white placeholder-zinc-400 focus:border-blue-500 w-full sm:w-64"
                    />
                  </div>

                  {/* Add Button */}
                  <Button
                    onClick={handleAddCollaborator}
                    className="bg-green-gradient hover:bg-green-500 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar colaborador
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {loading ? (
                <CollaboratorSkeleton />
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-lg font-medium text-red-400 mb-2">Error al cargar</h3>
                  <p className="text-zinc-400 mb-4">{error}</p>
                  <Button
                    onClick={() => fetchCollaborators()}
                    variant="outline"
                    className="border-zinc-600 text-zinc-300 hover:bg-zinc-700"
                  >
                    Reintentar
                  </Button>
                </div>
              ) : !Array.isArray(collaborators) ? (
                <div className="flex justify-center items-center p-8 text-red-400">
                  Error: Formato de datos incorrecto
                </div>
              ) : filteredCollaborators.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="space-y-4">
                  {paginatedCollaborators.map((collaborator, index) => (
                    <div
                      key={collaborator.id}
                      className="transform transition-all duration-200 hover:scale-[1.01]"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.5s ease-out forwards",
                      }}
                    >
                      <CollaboratorCard
                        name={collaborator.name}
                        phone={collaborator.phone}
                        email={collaborator.email}
                        onEdit={() => handleEditCollaborator(collaborator)}
                        onDelete={() => handleDeleteCollaborator(collaborator.id?.toString())}
                      />
                    </div>
                  ))}

                  {/* Paginación y selector de tamaño */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
                    <PageSizeSelector
                      pageSize={pageSize}
                      onPageSizeChange={setPageSize}
                      options={[5, 10, 25, 50]}
                    />
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                      disabled={filteredCollaborators.length === 0}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CollaboratorForm
          isOpen={true}
          onClose={handleCloseModal}
          onSave={handleSaveCollaborator}
          collaborator={selectedCollaborator}
          isEditMode={isEditMode}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-zinc-800 border-zinc-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">¿Eliminar colaborador?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              Esta acción no se puede deshacer. El colaborador será eliminado permanentemente del sistema.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-zinc-700 text-zinc-300 border-zinc-600 hover:bg-zinc-600">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
