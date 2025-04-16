const SearchFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-1 mt-6 sm:mt-10 px-2 sm:px-4">
      {/* Barra de búsqueda */}
      <div className="flex flex-1 items-center bg-[#32363A] rounded-lg px-2 py-1 sm:py-2 border border-[#E2E8F0]/20 w-full sm:w-auto">
        <div className="w-4 sm:w-5 h-4 sm:h-5">
          <svg
            className="w-full h-full text-[#A0AEC0]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Buscar por nombre de colaborador"
          className="ml-2 sm:ml-3 text-[10px] sm:text-xs bg-transparent text-[#A0AEC0] placeholder-[#A0AEC0] outline-none w-full placeholder:text-[10px] sm:placeholder:text-xs flex-1"
        />
      </div>
      {/* Botón de filtros */}
      <div className="flex justify-start items-center bg-[#32363A] rounded-lg pl-2 py-1 sm:py-2 border border-[#E2E8F0]/20 w-full sm:w-[146px] mt-2 sm:mt-0">
        <div className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2">
          <img src="/public/filt.png" alt="filter icon" className="w-full h-full" />
        </div>
        <span className="text-[#A0AEC0] text-[10px] sm:text-xs">Filtros</span>
      </div>
    </div>
  );
};

export default SearchFilter;