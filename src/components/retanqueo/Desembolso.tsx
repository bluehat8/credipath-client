import { MainSidebar } from "components/sidebar/Sidebar";
import { ThemeProvider } from "context/ThemeContext";
import TablaDesembolso from "./TablaDesembolso";

const Desembolso = () => {
  return (
    <div>
        {/* Título */}
        <h1 className="text-white tracking-[0.15em] mx-5 text-[20px] lg:text-[24px] xl:text-[28px]">
          Desembolsos
        </h1>

        {/* Sección de Confirmación */}
        <section className="bg-[#24272A] p-4 sm:p-6 md:p-8 mx-5 mt-6 rounded-t-lg border-b border-[#494343]">
          <h2 className="text-white text-[18px] sm:text-[20px] md:text-[22px] tracking-wider">
            Confirmación de desembolsos
          </h2>
          <p className="text-[#8B8B8B] mt-2 text-sm sm:text-base">
            Aquí puedes confirmar la recepción de los fondos que han sido
            aprobados por el supervisor. Una vez recibido el dinero, debes
            confirmar para actualizar tu saldo disponible.
          </p>
        </section>

        {/* Sección de la Tabla */}
        <section className="bg-[#24272A] p-4 sm:p-6 md:p-8 mx-5 rounded-b-lg">
          <TablaDesembolso />
        </section>
    </div>
  );
};

export default Desembolso;