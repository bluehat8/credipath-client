import React from "react";

const CollaboratorForm = ({ isOpen, onClose,onSave }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-gray-100">
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
          <div className="grid gap-4 sm:grid-cols-2">
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
            <div className="space-y-4">
              <fieldset>
                <legend className="text-gray-300 font-medium">Permisos Cliente</legend>
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


              
          {/*permisos de Prestamo*/}

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
  <legend className="text-gray-300 font-medium">Permisos de Modulo</legend>
  <div className="flex flex-wrap gap-3">
    <button
      type="button"
      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500  w-full sm:w-auto"
    >
      Colaboradores
    </button>
    <button
      type="button"
      className="flex-1 px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500  w-full sm:w-auto"
    >
      Pagos Vencidos
    </button>
    <button
      type="button"
      className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500  w-full sm:w-auto"
    >
      Proximos Pagos
    </button>
    <button
      type="button"
      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500  w-full sm:w-auto"
    >
      Abonar Prestamo
    </button>
    <button
      type="button"
      className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500  w-full sm:w-auto"
    >
      Reporte Estimado VS Real
    </button>
  </div>
</fieldset>

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