import { useState } from "react";
import RetanqueoList from "components/retanqueo/RetanqueoList";
import RetanqueoStats from "components/retanqueo/RetanqueoStats";
import SearchFilter from "components/retanqueo/SearchFilter";
import { MainSidebar } from "components/sidebar/Sidebar";
import { ThemeProvider } from "context/ThemeContext";

const GestionRetanqueo = () => {
  // Simulación de datos (más adelante vendrán de la API)
  const cardsData = [
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
    { name: "Juan Perez", status: "Pendiente", date: "2025-03-27", amount: 5000, motive: "Necesito fondos para..." },
  ];

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Número de tarjetas por página

  // Calcular el índice de inicio y fin para las tarjetas de la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Funciones para cambiar de página
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
        <h1 className="text-white tracking-[0.15em] md:mx-5 text-[18px] sm:text-[20px] mb-6 sm:mb-8">
          Solicitudes de retanqueo
        </h1>

        <section className="bg-[#24272A] p-8 md:mx-5 mt-3 rounded-t-lg">
          <h2 className="text-white text-[18px] sm:text-[20px] md:text-[22px] tracking-wider">
            Gestión de solicitudes de retanqueo
          </h2>
          <p className="text-[#8B8B8B] mt-2 text-sm sm:text-base">
            Aquí puedes gestionar las solicitudes de retanqueo que te hacen tus colaboradores
          </p>

          <RetanqueoStats />
          <SearchFilter />
          <RetanqueoList cardsData={currentCards} />
        </section>

        <div className="border border-[#968787] md:mx-5"></div>

        {/* Paginación */}
        <section className="flex items-center justify-between bg-[#24272A] p-5 md:p-8 md:mx-5 rounded-b-lg">
          <p className="text-[#A0AEC0] text-[10px] md:text-sm md:mx-4">
            Mostrando {indexOfFirstCard + 1} a {Math.min(indexOfLastCard, cardsData.length)} de {cardsData.length} solicitudes
          </p>
          <div className="flex space-x-1 md:space-x-2 md:mr-20">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center bg-[#444B52] rounded text-white disabled:opacity-50"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded text-white ${
                  currentPage === index + 1 ? "bg-[#50C271]" : "bg-[#444B52]"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center bg-[#444B52] rounded text-white disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </section>
    </div>
  );
};

export default GestionRetanqueo;