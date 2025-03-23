const TablaDesembolso = () => {
    const solicitudes = [
      { fecha: "2025-03-06", supervisor: "Antonio Sequeira", monto: 14000, estado: "Pendiente de confirmación" },
      { fecha: "2025-03-06", supervisor: "Antonio Sequeira", monto: 14000, estado: "Rechazado" },
    ];
  
    const desembolsos = [
      { fecha: "2025-03-06", supervisor: "Antonio Sequeira", monto: 14000, fechaConfirmacion: "2025-03-06", estado: "Confirmado" },
      { fecha: "2025-03-06", supervisor: "Antonio Sequeira", monto: 14000, fechaConfirmacion: "2025-03-06", estado: "Confirmado" },
    ];
  
    return (
      <div className="text-white">
        {/* Tabla de Solicitudes */}
        <div className="bg-[#181A1C] px-4 sm:px-6 md:px-8 py-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Solicitudes</h2>
          <div className="flex gap-x-1 mt-1">
            <svg fill="#22c55e" width="18px" height="18px" viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"></path>
              </g>
            </svg>
            <p className="text-[14px] text-[#A0AEC0] font-semibold mb-2">2 aprobadas este mes</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700 text-[#A0AEC0] text-xs">
                  <th className="py-4 text-left">Fecha de aprobación/rechazo</th>
                  <th className="p-2 text-center">Supervisor</th>
                  <th className="p-2 text-center">MONTO</th>
                  <th className="p-2 text-center">Estado</th>
                  <th className="p-2 text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {solicitudes.map((item, index) => (
                  <tr key={index} className="border-b-2 border-gray-700 text-center">
                    <td className="py-5 text-sm">{item.fecha}</td>
                    <td className="p-2 text-sm">{item.supervisor}</td>
                    <td className="p-2 font-bold text-sm">${item.monto.toLocaleString()}</td>
                    <td className="p-2">
                      <button
                        className={`w-[168px] py-[6px] rounded-md text-xs ${
                          item.estado === "Pendiente de confirmación"
                            ? "bg-[#E8A232] text-[#331713] opacity-80"
                            : "bg-[#512014] text-[#CD1515] opacity-90"
                        }`}
                        disabled={true}
                      >
                        {item.estado}
                      </button>
                    </td>
                    <td className="p-2">
                      <button
                        className={`px-3 py-1 ml-auto rounded-md text-sm flex gap-x-4 ${
                          item.estado === "Rechazado"
                            ? "bg-[#526559] text-[#818181] cursor-not-allowed"
                            : "bg-[#A3EAC9] text-[#15803D]"
                        }`}
                        disabled={item.estado === "Rechazado"}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                          <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                          <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                          <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                          <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                          <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                          <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        Confirmar recepción
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Tabla de Historial de Desembolsos */}
        <div className="bg-[#181A1C] px-4 sm:px-6 md:px-8 py-6 rounded-lg shadow-lg mt-5">
          <h2 className="text-lg font-bold">Historial de desembolsos confirmados</h2>
          <div className="flex gap-x-1 mt-1">
            <svg fill="#22c55e" width="18px" height="18px" viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"></path>
              </g>
            </svg>
            <p className="text-[14px] text-[#A0AEC0] font-semibold mb-2">2 confirmados este mes</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700 text-[#A0AEC0] text-xs">
                  <th className="py-4 text-left">Fecha de aprobación</th>
                  <th className="p-2 text-center">Supervisor</th>
                  <th className="p-2 text-center">MONTO</th>
                  <th className="p-2 text-center">Fecha de confirmación</th>
                  <th className="p-2 text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                {desembolsos.map((item, index) => (
                  <tr key={index} className="border-b-2 border-gray-700 text-center">
                    <td className="py-5 text-sm">{item.fecha}</td>
                    <td className="p-2 text-sm">{item.supervisor}</td>
                    <td className="p-2 font-bold text-sm">${item.monto.toLocaleString()}</td>
                    <td className="p-2">{item.fechaConfirmacion}</td>
                    <td className="p-2">
                      <button className="w-[190px] flex justify-center items-center gap-x-3 px-3 py-1 ml-auto bg-green rounded-2xl bg-green-600 text-white text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                          <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                          <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                          <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                          <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                          <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                          <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        {item.estado}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default TablaDesembolso;