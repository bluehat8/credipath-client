import * as React from 'react';
import { SidebarItem } from '../components/SidebarItem.tsx';
import { ClientHeader } from '../components/loans/ClientHeader.tsx';
import { LoanCard } from '../components/loans/LoanCard.tsx';
import { LoanForm } from '../components/Modal/Loand/LoanForm.tsx';

const sidebarItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/d09fa7973c351f42fadb27aaffc6408f9ecf89c6b3adf2f3fbb8cc091b8e9274?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Home", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/94a6ad8327b2054489aad3c61bb8819b51c383017e9ad737c70bb3288ddd03f7?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Rutas" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/7e9dc196c1b8f050673419e90c7ffc560d1ff99e233282c449cec6ae029d7f48?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Clientes" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/b9d830dc3450c67d618510326573f2e6a971eadbc72628c776da3a8442345db8?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Cuotas vencidas" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/a11ff7fad8f5fe8f31e4e78b279e24e7847314e26c49279cf5f8e2662c072130?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Cobros pendientes" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/d0e97c591b5287608106897583394155069189e1ca30937d3c7d3eecce2f44ba?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Colaboradores" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3fdd60087f660b5f80dabbac0dfe14a0922a3d9bee3ba2d8fef6d56c07048a72?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Reportes" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3fdd60087f660b5f80dabbac0dfe14a0922a3d9bee3ba2d8fef6d56c07048a72?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", text: "Administración" }
];

const loans = [
  {
    amount: 500,
    installments: 4,
    interestRate: 0.05,
    date: "18 AGO 2024",
    interestType: "Interés al capital inicial",
    note: "Esto es un préstamo de prueba",
    status: "active",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/7c03e783806ee2c21b42dfe2386d4a0f7867e293bf21b1e0980fb09d1a44e06b?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
  },
  {
    amount: 500,
    installments: 4,
    interestRate: 0.05,
    date: "18 AGO 2024",
    interestType: "Interés al capital inicial",
    note: "Esto es un préstamo de prueba",
    status: "pending",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/cb9496124311e4f510c231bd253bc59ebb396de75b7595fb1a5e4b292cb6dc6d?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
  },
  {
    amount: 500,
    installments: 4,
    interestRate: 0.05,
    date: "18 AGO 2024",
    interestType: "Interés al capital inicial",
    note: "Esto es un préstamo de prueba",
    status: "completed",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/86e33cf3e6caa64f36bc7feeae7698a7d65765c9ff6c0179d43fd105d09eace7?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
  },
  {
    amount: 500,
    installments: 4,
    interestRate: 0.05,
    date: "18 AGO 2024",
    interestType: "Interés al capital inicial",
    note: "Esto es un préstamo de prueba",
    status: "overdue",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/76748e6f8119e558bc229a5b791a4ed4d17ea5c54f958b2e6f8cdb2b8f44e949?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
  }
];

export const ClientDetails: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div className="overflow-hidden pr-14 bg-neutral-900 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <nav className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full" aria-label="Main navigation">
          <div className="flex flex-col px-10 pt-9 mx-auto w-full text-xs font-semibold bg-zinc-800 pb-[477px] text-slate-50 max-md:px-5 max-md:pb-24 max-md:mt-10">
            <div className="flex gap-4 text-base font-extrabold text-green-400 whitespace-nowrap tracking-[2.25px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e0105872c3855e766fc1878bbbc5215aea591a49bb6cbdb3b7aad7e38cc5291c?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt="Credipath logo"
                className="object-contain shrink-0 rounded-none aspect-[2] w-[60px]"
              />
              <div className="grow shrink my-auto w-[93px]">CREDIPATH</div>
            </div>
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </nav>
        <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
              Clientes
            </h1>
            <section className="flex flex-col items-center pt-5 pb-40 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1009px]">
                <ClientHeader name="Ricardo morales" code="505" />
                <div className="flex flex-wrap gap-2 self-end mt-8 text-base font-light tracking-wide text-zinc-100">
                <button
                    className="flex gap-2 px-6 py-4 text-xs tracking-wide rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] max-md:px-5"
                    onClick={toggleFormVisibility}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/155fcbbe51a48658606cad8c9469975cc4857275ab817ef999d47c8bc8382d28?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                      alt=""
                      className="object-contain shrink-0 aspect-square w-[18px]"
                    />
                    <span>Agregar préstamo</span>
                  </button>
                  <button className="flex gap-7 px-7 py-3 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/497e173d9e5494ea2411c198e4e6bcab010d969d1084d21f1c171b0b9f4f0da4?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                      alt=""
                      className="object-contain shrink-0 w-6 aspect-square"
                    />
                    <span>Editar</span>
                  </button>
                  <button className="flex gap-4 px-6 py-3 text-rose-600 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/519eb87536b8573346762e6942175d8df1f106fbc27e1320dc8d1f37af9efd77?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                      alt=""
                      className="object-contain shrink-0 w-6 aspect-square"
                    />
                    <span>Eliminar</span>
                  </button>
                </div>
              </div>
              {isFormVisible && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
    <div
      className="relative bg-neutral-900 rounded-lg shadow-lg"
      style={{
        width: '30%', // Aumentar el ancho del modal
        height: '90%', // Aumentar la altura del modal
        padding: '20px',
        overflowY: 'scroll', // Asegura el desplazamiento interno
        borderRadius: '15px',
      }}
    >
      <style>
        {`
          /* Ocultar el scroll en el modal */
          .relative::-webkit-scrollbar {
            display: none;
          }
          .relative {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE y Edge */
          }
        `}
      </style>
      <LoanForm valor={'6000'} tipoInteres={'anual'} interes={'10%'} pago={'500'} fechaPrestamo={'2025-01-12'} nota={'prueba'} />
      <button
        className="absolute top-3 right-3 text-red-500"
        onClick={toggleFormVisibility} // Cerrar ventana emergente
      >
        Cerrar
      </button>
    </div>
  </div>
)}
              {!isFormVisible &&
                loans.map((loan, index) => <LoanCard key={index} {...loan} />)}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};


