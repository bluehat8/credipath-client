import * as React from 'react';
import { Layout as Sidebar } from '../components/sidebar/Layout'; 
import { RouteCard } from "../components/rutas/RouteCard";
import { ModalAddRoute } from '../components/rutas/AddRouteModal';

const routesData = [
  {
    name: "Ruta del norte",
    district: "Distrito V",
    code: "505",
    location: "Bo. Larreynaga - Col. 10 junio"
  },
  {
    name: "Ruta del sur",
    district: "Distrito IV",
    code: "506",
    location: "Bo. San Judas - Col. 12 de Octubre"
  }
];

export function RoutesPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [routes, setRoutes] = React.useState(routesData);

  const handleAddRoute = (newRoute: { name: string; district: string; code: string; location: string }) => {
    setRoutes((prevRoutes) => [...prevRoutes, newRoute]);
  };

  return (
    <Sidebar>
      <div className="max-md:flex-col w-full">
        <div className="gap-5 max-md:flex-col">
          <section className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
                RUTAS
              </h1>
              <section className="flex flex-col items-center pt-12 pb-40 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 pr-8 pl-8 justify-between max-w-full w-full">
                  <div className="my-auto text-xl font-medium tracking-wider text-white">
                    Control de rutas
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex gap-9 px-7 py-3 text-base font-light tracking-wide rounded-md shadow-[0px_0px_10px_rgba(38,71,95,0.25)] text-zinc-100 max-md:px-5"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                      className="object-contain shrink-0 w-6 aspect-square"
                      alt=""
                    />
                    <span>Agregar ruta</span>
                  </button>
                </div>

                <div className="lex shrink-0 self-stretch mt-4 h-px bg-stone-700 max-md:max-w-full" />
                <div className="flex w-full overflow-hidden flex-col p-5 mt-5">
                  {routes.map((route, index) => (
                    <div key={index} className="mt-5 first:mt-0">
                      <RouteCard
                        {...route}
                        onEdit={() => {}}
                        onDelete={() => {}}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>

      {/* Modal for adding route */}
      <ModalAddRoute
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddRoute={handleAddRoute}
      />
    </Sidebar>
  );
}
