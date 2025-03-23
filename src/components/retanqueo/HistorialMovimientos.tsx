import '../../index.css';

const HistorialMovimientos = () => {
  const transacciones = [
    {
      tipo: "Desembolso cliente",
      cuenta: "# 001-290101-1033E",
      fecha: "27 de marzo de 2020",
      hora: "12:30 PM",
      monto: -2500,
    },
    {
      tipo: "Retanqueo inicial",
      fecha: "27 de marzo de 2020",
      hora: "12:30 PM",
      monto: 2500,
    },
    {
      tipo: "Retanqueo",
      fecha: "26 de marzo de 2020",
      hora: "13:45 PM",
      monto: 800,
    },
    {
      tipo: "Retanqueo inicial",
      fecha: "26 de marzo de 2020",
      hora: "12:30 PM",
      monto: 1700,
    },
  ];

  return (
    <section className="mt-8 sm:mt-10 bg-deg-table p-4 sm:p-6 md:p-8 rounded-xl shadow-md">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-[16px] sm:text-[18px] font-semibold text-white mb-2 sm:mb-0">
          Historial de movimientos
        </h2>
        <div className="flex">
          <p className="text-xs sm:text-sm text-gray-400">23-30 de marzo de 2020</p>
        </div>
      </div>

      {/* Últimos 7 días */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-[#A0AEC0] mb-2 uppercase">Últimos 7 días</h3>
        {transacciones.slice(0, 2).map((transaccion, index) => (
          <div key={index} className="flex items-center my-4 sm:my-5 gap-x-4 sm:gap-x-5">
            <div className={`w-9 h-9 rounded-full flex items-center border justify-center ${transaccion.monto < 0 ? 'border-[#E31A1A]' : 'border-[#01B574]'}`}>
              {transaccion.monto < 0 ? (
                <img src="/public/arrow-down.png" alt="arrow down" />
              ) : (
                <img src="/public/arrow-up.png" alt="arrow up" />
              )}
            </div>
            <div className="ml-2">
              <p className="text-white text-sm mb-1">
                {transaccion.tipo} {transaccion.cuenta}
              </p>
              <p className="text-xs sm:text-sm text-[#A0AEC0]">
                {transaccion.fecha}, a las {transaccion.hora}
              </p>
            </div>
            <div className="ml-auto">
              <p className={`${transaccion.monto < 0 ? 'text-white' : 'text-green-native'}`}>
                {transaccion.monto < 0 ? `- $${Math.abs(transaccion.monto)}` : `+ $${transaccion.monto}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Últimos 15 días */}
      <div>
        <h3 className="text-xs font-semibold text-[#A0AEC0] mb-2 uppercase">Últimos 15 días</h3>
        {transacciones.slice(2).map((transaccion, index) => (
          <div key={index} className="flex items-center my-4 sm:my-5 gap-x-4 sm:gap-x-5">
            <div className={`w-9 h-9 rounded-full flex items-center border justify-center ${transaccion.monto < 0 ? 'border-[#E31A1A]' : 'border-[#01B574]'}`}>
              {transaccion.monto < 0 ? (
                <img src="/public/arrow-down.png" alt="arrow down" />
              ) : (
                <img src="/public/arrow-up.png" alt="arrow up" />
              )}
            </div>
            <div className="ml-2">
              <p className="text-white text-sm mb-1">{transaccion.tipo}</p>
              <p className="text-xs sm:text-sm text-[#A0AEC0]">
                {transaccion.fecha}, a las {transaccion.hora}
              </p>
            </div>
            <div className="ml-auto">
              <p className={`${transaccion.monto < 0 ? 'text-red-500' : 'text-green-native'}`}>
                {transaccion.monto < 0 ? `- $${Math.abs(transaccion.monto)}` : `+ $${transaccion.monto}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorialMovimientos;