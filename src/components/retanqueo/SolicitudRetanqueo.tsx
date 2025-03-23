import { MainSidebar } from "components/sidebar/Sidebar"
import { ThemeProvider } from "context/ThemeContext"

const SolicitudRetanqueo = () => {
  return (
    <ThemeProvider>
        <MainSidebar>
            <section className="bg-[#1D1E21] p-8 mx-5 my-3 rounded-lg">
                <section className="flex items-center gap-x-8 px-8 py-6 bg-[#121316] rounded-lg">
                    <button className="rounded-full p-[5px] bg-[#3F4245]">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="27"  height="27"  viewBox="2 2 22 20"  fill="none"  stroke="#FFFF"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                    </button>
                    <div>
                        <h1 className="text-white text-2xl">Solicitud de retanqueo</h1>
                        <p className="text-[#414845] text-base">Completa el formulario para solicitar una reposición de fondos. Tu solicitud será revisada por un supervisor</p>
                    </div>
                </section>

                <section className="mt-10">
                    <div className="text-white">
                        <h2 className="text-xl opacity-60">Monto solicitado</h2>
                        <input 
                            type="text" 
                            className="mt-2 py-2 w-full border-b outline-none bg-transparent border-gray-600"
                            placeholder="1000"
                        />
                        <p className="text-green text-sm mt-2">Ingresa el monto que necesitas para tus operaciones</p>
                    </div>
                    <div className="text-white mt-5">
                        <h2 className="text-xl opacity-60">Motivo (opcional)</h2>
                        <textarea
                            className="w-full border bg-transparent  outline-none border-gray-600 p-3 mt-3 placeholder:text-white resize-none"
                            placeholder="Describe brevemente porqué necesitas los fondos"
                        >
                        </textarea>
                        <p className="text-green text-sm mt-2">Un motivo claro puede ayudar a que tu solicitud sea aprobada más rápido</p>
                    </div>
                    <div className="text-white mt-5">
                        <h2 className="text-xl opacity-60">Fecha de solicitud</h2>
                        <input 
                            type="text" 
                            className="mt-2 py-2 w-full border-b outline-none bg-transparent border-gray-600"
                            placeholder="12/12/2025"
                        />
                        <p className="text-green text-sm mt-2">Fecha actual (no editable)</p>
                    </div>
                    <div className="text-white mt-5">
                        <h2 className="text-xl opacity-60">Estado</h2>
                        <div
                            className="mt-2 p-4 bg-[#AF8738] bg-opacity-50 rounded-md"
                        >
                            Pendiente
                        </div>
                    </div>
                </section>
                <button
                    className="flex gap-x-3 mt-4 px-4 py-2 text-white bg-green rounded-md ml-auto"
                >
                    Enviar solicitud
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#FFFF"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </button>
            </section>
        </MainSidebar>
    </ThemeProvider>
  )
}

export default SolicitudRetanqueo
