
import { ThemeProvider } from 'context/ThemeContext';
import '../index.css';
import { RadialChart } from 'components/retanqueo/RadialChart';
import HistorialMovimientos from 'components/retanqueo/HistorialMovimientos';

const RetanqueoPage = () => {
  return (
    <ThemeProvider>
      {/* <MainSidebar> */}
        <div className='font-poppins p-4 sm:p-5'>
          <h1 className="text-white tracking-[0.15em] text-[18px] sm:text-[20px] mb-6 sm:mb-8">
            Resumen de fondos
          </h1>
          <section className='lg:grid lg:grid-cols-2 lg:gap-x-7'>
            {/* Sección de Saldo Disponible */}
            <section className="mb-4 sm:mb-2 p-6 sm:p-8 lg:mb-0 rounded-xl bg-gradient-to-br from-[#33373A] to-[#093142]/70">
              <p className="text-[#A0AEC0] text-sm sm:text-base">
                Bienvenido de vuelta, Roy
              </p>
              <h2 className="text-white font-bold text-2xl sm:text-3xl mt-2">
                Saldo Disponible
              </h2>
              <p className="text-[32px] sm:text-[40px] text-green font-bold">$5000</p>
              <p className="text-white font-medium text-xs">
                Actualizado: 12/12/205
              </p>
              <button
                className='bg-green-native rounded-md text-sm text-white mt-8 sm:mt-12 px-5 sm:px-7 py-2 flex items-center'
              >
                <div className='bg-[#384749] rounded-[18px] p-[2px] -ml-3 mr-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFF" viewBox="-5 -5 34 34" strokeWidth="2" stroke="currentColor" className="size-5 sm:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
                Solicitar retanqueo
              </button>
            </section>

            {/* Sección de Resumen de Movimientos */}
            <section className="p-6 sm:p-8 rounded-xl bg-deg-mov">
              <div className='flex justify-between items-center'>
                <h2 className="text-white font-bold text-lg sm:text-xl">Resumen de movimientos</h2>
                <button className='p-[5px] bg-white bg-opacity-10 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5DE984" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </button>
              </div>
              <div className='pl-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-center 2xl:-mt-3'>
                <ul>
                  <li className='p-4 sm:p-5 bg-[#3F4245] mb-2 rounded-3xl'>
                    <h3 className='text-[#A0AEC0] text-sm sm:text-base'>Ingresos totales</h3>
                    <p className='text-green font-bold text-lg sm:text-xl'>$10.000</p>
                  </li>
                  <li className='p-4 sm:p-5 bg-[#3F4245] rounded-3xl mt-1'>
                    <h3 className='text-[#A0AEC0] text-sm sm:text-base'>Egresos totales</h3>
                    <p className='text-[#DA1114] font-bold text-lg sm:text-xl mt-1'>$5.000</p>
                  </li>
                </ul>
                <div>
                  <RadialChart />
                </div>
              </div>
            </section>
          </section>

          {/* Historial de Movimientos */}
          <HistorialMovimientos />
        </div>

    </ThemeProvider>
  );
};

export default RetanqueoPage;