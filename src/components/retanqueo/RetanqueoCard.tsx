type RetanqueoCardProps = {
  name: string
  status: string
  date: string
  amount: number
  motive: string
}

const RetanqueoCard = ({ name, status, date, amount, motive } : RetanqueoCardProps) => {
  return (
    <div className="bg-[#32363A] rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-24 mb-4 shadow-black shadow-sm font-poppins">
      {/* Sección izquierda: Nombre, estado y fecha */}
      <div className="flex-1 min-w-[200px]">
        <p className="text-white text-base sm:text-lg font-bold">{name}</p>
        <div className="flex items-center gap-x-3 sm:gap-x-5 mt-1 sm:mt-0">
          <button disabled className="bg-[#713F12] text-[#E6C747] text-[10px] px-3 sm:px-4 py-1 rounded-3xl">{status}</button>
          <p className="text-[#A0AEC0] text-xs sm:text-sm font-bold">{date}</p>
        </div>
      </div>

      {/* Sección centro: Monto solicitado */}
      <div className="flex-1 min-w-[150px]">
        <p className="text-white text-sm sm:text-base font-light mb-1">Monto solicitado</p>
        <p className="text-[#50C271] font-bold text-sm sm:text-base">${amount}</p>
      </div>

      {/* Sección centro: Motivo */}
      <div className="flex-1 min-w-[200px]">
        <p className="text-white text-sm sm:text-base font-light mb-1">Motivo</p>
        <p className="text-[#989CAF] text-xs sm:text-sm">{motive}</p>
      </div>

      {/* Sección derecha: Botones */}
      <div className="flex space-x-2 sm:ml-auto sm:mr-10 mt-2 sm:mt-0">
        <button className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full bg-[#01B574]">
          <img src="/public/circle.png" alt="circle icon" className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]" />
        </button>
        <button className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex items-center justify-center bg-[#2E3E51] rounded-full">
          <img src="/public/info.png" alt="info icon" className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]" />
        </button>
        <button className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex items-center justify-center bg-[#FE0D56] rounded-full">
          <img src="/public/delete.png" alt="delete icon" className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default RetanqueoCard