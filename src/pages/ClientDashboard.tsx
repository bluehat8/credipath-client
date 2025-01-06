import * as React from "react";
import { SidebarItem } from "../components/SidebarItem.tsx";
import { ClientCard } from "../components/ClientCard.tsx";

const sidebarItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/265a65d73163a5592ceb1a49c851a0cf2acaff5eb879983589eb155ee337db72?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Home", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/4c2c37551e85533928ad12c06a6aa3f9651d2ef33f33fb30cca9af4960e453c5?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Rutas", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/7e9dc196c1b8f050673419e90c7ffc560d1ff99e233282c449cec6ae029d7f48?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Clientes", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/b9d830dc3450c67d618510326573f2e6a971eadbc72628c776da3a8442345db8?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Cuotas vencidas", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/faf1ca0a9a2b3d3630b50fd37a65f6db303c5d8aeb9a77e69931afba275d3d33?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Cobros pendientes", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/987d2e361ce940f790f57d63595f0b86e1e9ad6fa424e48dd2d55475d01d5123?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Colaboradores", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3fdd60087f660b5f80dabbac0dfe14a0922a3d9bee3ba2d8fef6d56c07048a72?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Reportes", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3fdd60087f660b5f80dabbac0dfe14a0922a3d9bee3ba2d8fef6d56c07048a72?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Administración", isActive: false },
];

const clients = [
  {
    name: "Ricardo Morales",
    phone: "8222453",
    countryCode: "505",
    email: "alguien@example.com",
  },
  {
    name: "Silvia Ramírez",
    phone: "8222453",
    email: "alguien@example.com",
  },
];

export const ClientDashboard: React.FC = () => {
  return (
    <main className="overflow-hidden pr-14 bg-neutral-900 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <nav className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full" role="navigation">
          <div className="flex flex-col px-10 pt-9 mx-auto w-full text-xs font-semibold bg-zinc-800 pb-[477px] text-slate-50 max-md:px-5 max-md:pb-24 max-md:mt-10">
            <div className="flex gap-4 text-base font-extrabold text-green-400 whitespace-nowrap tracking-[2.25px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/706149c2eaafef18ab1e0e0d9a4cf750019b66f8dfb7560950de651206b277cd?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                className="object-contain shrink-0 rounded-none aspect-[2] w-[60px]"
                alt="Credipath logo"
              />
              <div className="grow shrink my-auto w-[93px]">CREDIPATH</div>
            </div>
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </nav>
        <section className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full" role="main">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
              Clientes
            </h1>
            <div className="flex flex-col items-center pt-12 pb-96 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1019px]">
                <div className="my-auto text-xl font-medium tracking-wider text-white">
                  Control de clientes
                </div>
                <button className="flex gap-9 px-7 py-3 text-base font-light tracking-wide rounded-md shadow-[0px_0px_10px_rgba(38,71,95,0.25)] text-zinc-100 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/9591f2ca09194501728cd7a7510d2335660bb9c18ab47b8725e9d36750669016?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt=""
                  />
                  <span>Agregar cliente</span>
                </button>
              </div>
              <div className="flex shrink-0 self-stretch mt-8 h-px bg-stone-700 max-md:max-w-full" />
              {clients.map((client, index) => (
                <ClientCard key={index} {...client} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};