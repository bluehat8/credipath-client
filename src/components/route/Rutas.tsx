"use client";
import React from "react";
import RouteItem from "./RouteItem";
import ActionButton from "components/ui/ActionButton";
import RouteFormModal from "components/Modal/route/RouteFormModal";
import ConfirmDialog from "components/ui/ConfirmDialog";
import LoadingSpinner from "components/ui/LoadingSpinner";
import ErrorMessage from "components/ui/ErrorMessage";
import { useRouteContext } from "context/RouteContext";
import { MainSidebar } from "components/sidebar/Sidebar";

const Rutas: React.FC = () => {
  const {
    // Data
    routes,
    isLoading,
    isError,
    error,

    // UI state
    isAddModalOpen,
    isEditModalOpen,
    isDeleteDialogOpen,
    currentRoute,
    routeToDelete,

    // UI actions
    openAddModal,
    openEditModal,
    openDeleteDialog,
    closeModals,

    // CRUD operations
    addRoute,
    updateRoute,
    deleteRoute,

    // Operation states
    isAddingRoute,
    isUpdatingRoute,
    isDeletingRoute,
    updatingRouteId,
    deletingRouteId,
  } = useRouteContext();

  // Handle form submission based on modal type
  const handleSubmitRoute = async (data: any) => {
    if (isAddModalOpen) {
      await addRoute(data);
    } else if (isEditModalOpen) {
      await updateRoute(data);
    }
  };

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    if (routeToDelete) {
      await deleteRoute(routeToDelete.id);
    }
  };

  return (

    <MainSidebar>
    <div
      className="overflow-hidden bg-neutral-900 max-md:pr-5"
      aria-label="Rutas management interface"
    >
      <div className="flex gap-5 max-md:flex-col">
       
        <section className="w-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <header>
              <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
                RUTAS
              </h1>
            </header>
            <section className="flex flex-col pt-12 pb-96 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between self-center max-w-full w-full px-10">
                <h2 className="my-auto text-xl font-medium tracking-wider text-white">
                  Control de RUTAS
                </h2>
                <ActionButton
                  icon="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/dc0295e9ae777893d4f3c0a12a20ab4ca53c33e0?placeholderIfAbsent=true"
                  text="Agregar cliente"
                  onClick={openAddModal}
                  variant="primary"
                  isLoading={isAddingRoute}
                  disabled={
                    isLoading ||
                    isAddingRoute ||
                    isUpdatingRoute ||
                    isDeletingRoute
                  }
                  ariaLabel="Agregar nueva ruta"
                />
              </div>
              <div
                className="flex shrink-0 mt-8 h-px bg-stone-700 max-md:max-w-full"
                role="separator"
                aria-orientation="horizontal"
              />
              <div className="overflow-hidden p-5 mt-5 mr-7 mb-0 ml-6 rounded-md max-md:mr-2.5 max-md:mb-2.5 max-md:max-w-full">
                {isLoading ? (
                  <div className="flex justify-center items-center py-20">
                    <LoadingSpinner size="large" />
                  </div>
                ) : isError ? (
                  <ErrorMessage
                    message={error?.message || "Error al cargar las rutas"}
                    className="my-8"
                  />
                ) : routes.length === 0 ? (
                  <div className="text-center py-20 text-zinc-400">
                    <p className="text-lg">No hay rutas disponibles</p>
                    <button
                      onClick={openAddModal}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Agregar una ruta
                    </button>
                  </div>
                ) : (
                  <ul aria-label="Lista de rutas">
                    {routes.map((route, index) => (
                      <li key={route.id} className={index > 0 ? "mt-5" : ""}>
                        <RouteItem
                          name={route.name}
                          district={route.district}
                          phoneNumber={route.phoneNumber}
                          location={route.location}
                          onEdit={() => openEditModal(route)}
                          onDelete={() => openDeleteDialog(route)}
                          isEditLoading={
                            isUpdatingRoute && updatingRouteId === route.id
                          }
                          isDeleteLoading={
                            isDeletingRoute && deletingRouteId === route.id
                          }
                          isDisabled={
                            isAddingRoute ||
                            (isUpdatingRoute && updatingRouteId !== route.id) ||
                            (isDeletingRoute && deletingRouteId !== route.id)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* Route Form Modal */}
      <RouteFormModal
        isOpen={isAddModalOpen || isEditModalOpen}
        onClose={closeModals}
        onSubmit={handleSubmitRoute}
        initialData={currentRoute || undefined}
        mode={isAddModalOpen ? "add" : "edit"}
        isSubmitting={isAddingRoute || isUpdatingRoute}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        title="Confirmar eliminación"
        message={`¿Estás seguro que deseas eliminar la ruta "${routeToDelete?.name}"? Esta acción no se puede deshacer.`}
        confirmText="Eliminar"
        cancelText="Cancelar"
        onConfirm={handleConfirmDelete}
        onCancel={closeModals}
        variant="danger"
      />
    </div>
    </MainSidebar>
  );
};

export default Rutas;
