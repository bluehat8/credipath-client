import React from "react";

const CollaboratorForm = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div className="bg-primary-native border-green-native rounded-lg shadow-lg w-full max-w-screen-lg p-6 sm:p-8 lg:px-12 lg:py-10">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 id="modal-title" className="text-xl lg:text-2xl font-semibold text-gray-100">
            Agregar Colaborador
          </h2>
          <button
            className="text-gray-400 hover:text-gray-200"
            aria-label="Cerrar"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Formulario */}
        <form className="mt-6 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Inputs del lado izquierdo */}
            <div className="space-y-4">
              <input
                type="text"
                id="identifier"
                placeholder="Identificador"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Repetir contraseña"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>

            {/* Permisos */}
            <div className="space-y-4 lg:col-span-2">
              
            <fieldset>
                <legend className="text-gray-300 font-medium">Permisos de Prestamo</legend>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                    >
                      Agregar
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </fieldset>

          {/*permisos de pago*/}

              <fieldset>
                <legend className="text-gray-300 font-medium">Permisos de Pago</legend>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                    >
                      Agregar
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </fieldset>


              
          {/*permisos de modulo*/}

          <fieldset>
            <legend className="text-gray-300 font-medium">Permisos de Módulo</legend>

            <div className="gap-4">
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-permission active text-white rounded-lg hover:bg-green-500"
              >
                Colaboradores
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-permission rounded-lg hover:bg-gray-500"
              >
                Pagos Vencidos
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-permission active text-white rounded-lg"
              >
                Próximos Pagos
              </button>

              </div>

              <div className="grid grid-cols-2 mt-3 gap-4">

              <button
                type="button"
                className="px-4 py-2 bg-permission active text-white rounded-lg"
              >
                Abonar Préstamo
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-permission active text-white rounded-lg"
              >
                Reporte Estimado VS Real
              </button>

              </div>
              </div>
          </fieldset>


              {/* Otros permisos */}
              {/* Aquí van otros fieldsets para préstamos, pagos, módulos */}
            </div>
          </div>

          {/* Inputs adicionales */}
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              id="address"
              placeholder="Dirección"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="tel"
              id="mobile"
              placeholder="Celular"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="tel"
              id="phone"
              placeholder="Teléfono"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>

          {/* Botones finales */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollaboratorForm;
