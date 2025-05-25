import { useState, useEffect } from "react";
import { CollaboratorCard } from "components/common/CollaboratorCard";
import CollaboratorForm from "../components/Modal/collaborator/CollaboratorForm";
import { useCollaboratorService, Collaborator } from "../hooks/collaborator/use-collaborator-service";
import { toast } from "../components/components/ui/use-toast";

export function CollaboratorsPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | undefined>();

  const { 
    collaborators, 
    loading, 
    error, 
    fetchCollaborators, 
    createCollaborator, 
    updateCollaborator, 
    deleteCollaborator 
  } = useCollaboratorService();

  useEffect(() => {
    fetchCollaborators().catch(error => {
      toast({
        title: "Error",
        description: `No se pudieron cargar los colaboradores: ${error.message}`,
        variant: "destructive"
      });
    });
  }, [fetchCollaborators]);

  const handleAddCollaborator = () => {
    setIsEditMode(false);
    setSelectedCollaborator(undefined);
    setIsModalOpen(true);
  };

  const handleEditCollaborator = (collaborator: Collaborator) => {
    setIsEditMode(true);
    setSelectedCollaborator(collaborator);
    setIsModalOpen(true);
  };

  const handleDeleteCollaborator = async (id?: string) => {
    if (!id) return;

    if (window.confirm('¿Estás seguro que deseas eliminar este colaborador?')) {
      try {
        await deleteCollaborator(id);
        toast({
          title: "Éxito",
          description: "Colaborador eliminado correctamente",
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: `No se pudo eliminar el colaborador: ${error.message}`,
          variant: "destructive"
        });
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveCollaborator = async (data: any) => {
    try {
      console.log('Datos recibidos del formulario:', data);
      // { identifier, name, email, ..., role: 'collaborator', permissions: [1, 2, 7, ...] }
      
      if (isEditMode && selectedCollaborator?.id) {
        await updateCollaborator(selectedCollaborator.id, data);
        toast({
          title: "Éxito",
          description: "Colaborador actualizado correctamente",
        });
      } else {
        await createCollaborator(data);
        toast({
          title: "Éxito",
          description: "Colaborador creado correctamente",
        });
      }

      await fetchCollaborators();
      setIsModalOpen(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: `No se pudo guardar el colaborador: ${error.message}`,
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <div className="max-md:flex-col w-full">
        <div className="gap-5 max-md:flex-col">

          <section className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
                Colaboradores
              </h1>
              <section className="flex flex-col items-center p-8 pt-12 pb-40 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1019px]">
                  <div className="my-auto text-xl font-medium tracking-wider text-white">
                    Control de colaboradores
                  </div>
                  <button
                    className="flex gap-9 px-7 py-3 text-base font-light tracking-wide rounded-md shadow-[0px_0px_10px_rgba(38,71,95,0.25)] text-zinc-100 max-md:px-5"
                    onClick={handleAddCollaborator}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                      className="object-contain shrink-0 w-6 aspect-square"
                      alt=""
                    />
                    <span>Agregar colaborador</span>
                  </button>
                </div>
                <div className="shrink-0 self-stretch mt-4 h-px bg-stone-700 max-md:max-w-full" />

                {loading ? (
                  <div className="flex justify-center items-center p-8 text-white">Cargando colaboradores...</div>
                ) : error ? (
                  <div className="flex justify-center items-center p-8 text-red-500">{error}</div>
                ) : !Array.isArray(collaborators) ? (
                  <div className="flex justify-center items-center p-8 text-red-500">Error: Formato de datos incorrecto</div>
                ) : collaborators.length === 0 ? (
                  <div className="flex justify-center items-center p-8 text-gray-400">No hay colaboradores registrados</div>
                ) : (
                  collaborators.map((collaborator) => (
                    <CollaboratorCard
                      key={collaborator.id}
                      name={collaborator.name}
                      phone={collaborator.phone}
                      email={collaborator.email}
                      onEdit={() => handleEditCollaborator(collaborator)}
                      onDelete={() => handleDeleteCollaborator(collaborator.id?.toString())}
                    />
                  ))
                )}
              </section>
            </div>
          </section>
        </div>
      </div>

      {isModalOpen && (      
        <CollaboratorForm
          isOpen={true}
          onClose={handleCloseModal}
          onSave={handleSaveCollaborator}
          collaborator={selectedCollaborator}
          isEditMode={isEditMode}       
        />
      )}
    </>
  );
}