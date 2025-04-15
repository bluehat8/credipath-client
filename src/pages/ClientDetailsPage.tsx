import * as React from 'react';
import { ClientHeader } from '../components/loans/ClientHeader';
import { LoanCard } from '../components/loans/LoanCard';
import { LoanForm } from '../components/Modal/Loand/LoanForm';
import { MainSidebar } from 'components/sidebar/Sidebar';
import { X } from 'lucide-react';
import { ThemeProvider } from 'context/ThemeContext';


export const loans = [
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
    <ThemeProvider>
    
    {/* <MainSidebar> */}
      <div className="max-md:flex-col w-full">
        <div className="gap-5 max-md:flex-col">
        
          <section className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-xl font-medium text-white tracking-[3px]">
                Clientes
              </h1>
              <div className="flex flex-col items-center p-8 pt-8 pb-96 mt-6 w-full rounded-xl bg-zinc-800 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-w-full w-full">
                  <ClientHeader name="Ricardo morales" code="505" />
                  <div className="flex flex-wrap gap-2 self-end mt-8 text-base font-light tracking-wide text-zinc-100">
                    <button onClick={toggleFormVisibility} className="flex gap-2 px-6 py-4 text-xs tracking-wide rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] max-md:px-5">
                      
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
                <div className="flex shrink-0 self-stretch mt-4 h-px bg-stone-700 max-md:max-w-full" />
                {loans.map((loan, index) => (
                  <LoanCard key={index} {...loan} />
                ))}
              </div>


              {isFormVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm">
                  {/* Contenedor interno del modal */}
                  <div className="w-full max-w-4xl  rounded-3xl p-8 overflow-y-auto h-[90vh]">
                    {/* Botón de cierre */}
                    <button
                      className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                      onClick={toggleFormVisibility}
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Contenido del formulario */}
                    <div className="space-y-8">
                      <LoanForm
                        valor={'6000'}
                        tipoInteres={'anual'}
                        interes={'10%'}
                        pago={'500'}
                        fechaPrestamo={'2025-01-12'}
                        nota={'prueba'}
                        numeroCuotas={''}
                        tipoPago={''}
                      />
                    </div>
                  </div>
                </div>
              )}
              
            </div>
          </section>
        </div>
      </div>
    {/* </MainSidebar> */}
    </ThemeProvider>

  );
};