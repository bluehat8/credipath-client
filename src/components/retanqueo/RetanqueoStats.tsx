const RetanqueoStats = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 mt-5 md:px-4">
      {/* Total de solicitudes */}
      <li className="bg-[#181A1C] w-full sm:w-[calc(50%-8px)] md:w-[246px] h-[80px] px-4 rounded-lg flex gap-4 sm:gap-10 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[#A0AEC0] text-xs font-medium">
            Total de solicitudes
          </span>
          <span className="text-white font-bold">8</span>
        </div>
        <div className="bg-[#0075FF] p-3 rounded-lg">
          <img src="/public/default.png" alt="folder icon" className="w-6 h-6" />
        </div>
      </li>

      {/* Solicitudes pendientes */}
      <li className="bg-[#181A1C] w-full sm:w-[calc(50%-8px)] md:w-[246px] h-[80px] px-4 rounded-lg flex gap-4 sm:gap-10 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[#A0AEC0] text-xs font-medium">
            Solicitudes pendientes
          </span>
          <span className="text-[#FFD82C] font-bold">2</span>
        </div>
        <div className="bg-[#FFD82C] p-3 rounded-lg">
          <img src="/public/default.png" alt="folder icon" className="w-6 h-6" />
        </div>
      </li>

      {/* Aprobadas */}
      <li className="bg-[#181A1C] w-full sm:w-[calc(50%-8px)] md:w-[246px] h-[80px] px-4 rounded-lg flex gap-4 sm:gap-10 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[#A0AEC0] text-xs font-medium">
            Aprobadas
          </span>
          <span className="text-[#01B574] font-bold">1</span>
        </div>
        <div className="bg-[#01B574] p-3 rounded-lg">
          <img src="/public/circle.png" alt="circle icon" className="w-6 h-6" />
        </div>
      </li>

      {/* Rechazadas */}
      <li className="bg-[#181A1C] w-full sm:w-[calc(50%-8px)] md:w-[246px] h-[80px] px-4 rounded-lg flex gap-4 sm:gap-10 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[#A0AEC0] text-xs font-medium">
            Rechazadas
          </span>
          <span className="text-[#FE0D56] font-bold">1</span>
        </div>
        <div className="bg-[#FE0D56] p-3 rounded-lg">
          <img src="/public/default.png" alt="folder icon" className="w-6 h-6" />
        </div>
      </li>
    </ul>
  );
};

export default RetanqueoStats;