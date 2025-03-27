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
import Pagination from "utils/Pagination";
import PageSizeSelector from "utils/PageSizeSelector";

const Rutas: React.FC = () => {
  const {
    // Data and pagination
    routes,
    isLoading,
    isError,
    error,
    pagination,
    setPage,
    setPageSize,
    setSearchQuery,

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
  } = useRouteContext();

  const handleSubmitRoute = async (data: any) => {
    if (isAddModalOpen) {
      await addRoute(data);
    } else if (isEditModalOpen) {
      await updateRoute(data);
    }
  };

  const handleConfirmDelete = async () => {
    if (routeToDelete) {
      await deleteRoute(routeToDelete.id);
    }
  };

  return (
    <MainSidebar>
      <div className="overflow-hidden bg-neutral-900 max-md:pr-5">
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
                    icon="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                    text="Agregar ruta"
                    onClick={openAddModal}
                    variant="primary"
                    isLoading={isAddingRoute}
                    disabled={isLoading || isAddingRoute || isUpdatingRoute || isDeletingRoute}
                    ariaLabel="Agregar nueva ruta"
                  />
                </div>
                <div className="flex shrink-0 mt-8 h-px bg-stone-700 max-md:max-w-full" />
                
                {/* Pagination controls at top */}
                <div className="flex justify-between items-center px-10 mt-4">
                  <PageSizeSelector
                    pageSize={pagination.limit}
                    onPageSizeChange={setPageSize}
                    disabled={isLoading}
                  />
                  <Pagination
                    currentPage={pagination.page}
                    totalPages={pagination.totalPages}
                    onPageChange={setPage}
                    disabled={isLoading}
                  />
                </div>

                <div className="overflow-hidden p-5 mt-5  mb-0 rounded-md  max-md:mb-2.5 max-md:max-w-full">
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
                    <>
                      <ul aria-label="Lista de rutas">
                        {routes.map((route) => (
                          <li key={route.id} className="mb-5">
                            <RouteItem
                              name={route.name}
                              district={route.district}
                              location={route.location}
                              onEdit={() => openEditModal(route)}
                              onDelete={() => openDeleteDialog(route)}
                              isEditLoading={isUpdatingRoute}
                              isDeleteLoading={isDeletingRoute}
                              isDisabled={isAddingRoute || isUpdatingRoute || isDeletingRoute}
                            />
                          </li>
                        ))}
                      </ul>
                      
                      {/* Pagination controls at bottom */}
                      <div className="flex justify-center mt-6">
                        <Pagination
                          currentPage={pagination.page}
                          totalPages={pagination.totalPages}
                          onPageChange={setPage}
                          disabled={isLoading}
                        />
                      </div>
                    </>
                  )}
                </div>
              </section>
            </div>
          </section>
        </div>

        <RouteFormModal
          isOpen={isAddModalOpen || isEditModalOpen}
          onClose={closeModals}
          onSubmit={handleSubmitRoute}
          initialData={currentRoute || undefined}
          mode={isAddModalOpen ? "add" : "edit"}
          isSubmitting={isAddingRoute || isUpdatingRoute}
        />

        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          title="Confirmar eliminación"
          message={`¿Estás seguro que deseas eliminar la ruta "${routeToDelete?.name}"?`}
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