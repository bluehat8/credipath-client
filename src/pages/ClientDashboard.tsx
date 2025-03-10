import * as React from "react";
import { ClientCard } from "../components/ClientCard";
import { ClientForm } from "../components/Modal/Client/ClientForm";
import { MainSidebar } from "components/sidebar/Sidebar";

const clients = [
  {
    name: "Ricardo Morales",
    phone: "8222453",
    countryCode: "505",
    email: "alguien@example.com",
    route: "Ruta 1",
  },
  {
    name: "Silvia Ramírez",
    phone: "8222453",
    countryCode: "105",
    email: "alguien@example.com",
    route: "Ruta 2",
  },
  {
    name: "Antonio Ramírez",
    phone: "8222453",
    countryCode: "205",
    email: "antonio22@example.com",
    route: "Ruta 2",
  },
];

export const ClientDashboard: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedRoute, setSelectedRoute] = React.useState("");

  const handleOpenForm = () => setIsFormVisible(true);
  const handleCloseForm = () => setIsFormVisible(false);

  const filteredClients = clients.filter(
    (client) =>
      (selectedRoute === "" || client.route === selectedRoute) &&
      (client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm) ||
        client.email.toLowerCase().includes(searchTerm))
  );

  return (
    <MainSidebar>
      <div className="max-md:flex-col w-full">
        <section className="flex flex-col ml-2 max-md:ml-0 max-md:w-full" role="main">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-xl font-medium text-white tracking-[3px] w-full">
              Clientes
            </h1>
            <div className="flex flex-col items-center p-8 pt-12 pb-96 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-w-full w-full">
                <div className="my-auto text-xl font-medium tracking-wider text-white">
                  Control de clientes
                </div>
                <button
                  onClick={handleOpenForm}
                  className="flex gap-9 px-7 py-3 text-base font-light tracking-wide rounded-md shadow-[0px_0px_10px_rgba(38,71,95,0.25)] text-zinc-100 max-md:px-5"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt=""
                  />
                  <span>Agregar cliente</span>
                </button>
              </div>
              <div className="flex shrink-0 self-stretch mt-8 mb-8 h-px bg-stone-700 max-md:max-w-full" />

              {/* Filtros */}
                <div className="flex flex-wrap gap-4 mb-6 w-full">
                  <input
                    type="text"
                    placeholder="Buscar cliente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-2 text-sm rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-gray-200 bg-zinc-700 dark:placeholder-gray-400"
                  />
                 
                 <select
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                    className="px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:text-gray-200 dark:bg-gray-700"
                  >
                    <option value="">Todas las rutas</option>
                    <option value="Ruta 1">Ruta 1</option>
                    <option value="Ruta 2">Ruta 2</option>
                  </select>

                </div>


                {/* Lista de clientes */}
                {filteredClients.length > 0 ? (
                  filteredClients.map((client, index) => (
                    <ClientCard key={index} {...client} />
                  ))
                ) : (
                  <p className="text-white">No se encontraron clientes.</p>
                )}
            </div>
          </div>
        </section>

        {/* Formulario emergente */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative p-6 rounded-lg">
              <button
                onClick={handleCloseForm}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
              >
                X
              </button>
              <div className="overflow-auto">
                <ClientForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </MainSidebar>
  );
};
