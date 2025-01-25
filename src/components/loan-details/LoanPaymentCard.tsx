import * as React from "react";
import { LoanPaymentCardProps } from "./types";

export const LoanPaymentCard: React.FC<LoanPaymentCardProps> = ({
  paymentNumber,
  capitalBalance,
  totalBalance,
  interestRate,
  amountPaid,
  interestBalance,
  dueDate,
  status,
}) => {


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null); 

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-between py-4 pr-14 pl-6 mt-5 max-w-full text-xs font-light tracking-wide text-white rounded-xl bg-zinc-700 w-full max-md:px-5 relative">
      <div className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="flex gap-6">
          <img
            loading="lazy"
            src={
              status === "pending"
                ? "/icons/pending-card.svg"
                : status === "overdue"
                ? "/icons/overdue-card.svg"
                : status === "paid"
                ? "/icons/credit-card.svg"
                : "/icons/credit-card.svg"
            }
            alt={`Loan status ${status}`}
            className="object-contain shrink-0 my-auto rounded-none aspect-[2] w-[60px]"
          />
          <div className="flex flex-col items-start">
            <div className="text-base font-medium tracking-wide">
              Saldo capital: ${capitalBalance}
            </div>
            <div className="flex gap-1.5 mt-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/379632d3f861c4d1df2fe714bcaeac348710f13d4f6f212bf804f659e5172888?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[17px]"
              />
              <div>Saldo total: ${totalBalance}</div>
            </div>
            <div className="flex gap-1.5 items-start self-stretch mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/bfbef85cb438b35b66ea8a74d80024af7c7f055434cc3058b26173c1257fed39?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[17px]"
              />
              <div>Intereses: {interestRate}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto gap-2 self-start">
          <div className="flex shrink-0 self-start w-px bg-stone-500 h-[62px]" />
          <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
            <div className="text-base font-medium tracking-wide">
              SALDO ABONADO: ${amountPaid}
            </div>
            <div className="flex gap-1 self-stretch">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/bfbef85cb438b35b66ea8a74d80024af7c7f055434cc3058b26173c1257fed39?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 self-start aspect-square w-[17px]"
              />
              <div className="grow shrink w-[244px]">
                Saldo de interés: {interestBalance}
              </div>
            </div>
            <div className="flex gap-1 mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/ce03670bd686376760c23d24a8b86095d993aa7998d093cd9be3f13bbd506ce9?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[17px]"
              />
              <div className="my-auto basis-auto">Vence: {dueDate}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown button */}
    
      <div className="relative flex items-center">
            <button
              className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 flex items-center justify-center"
              aria-label="Abrir menú"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute z-50 right-0 mt-2 bg-gray-900 text-white shadow-xl rounded-lg w-48"
              >
                <ul className="py-2">
                  <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition-all duration-200">
                    Editar fecha de vencimiento
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition-all duration-200">
                    Ver detalles
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition-all duration-200">
                    Abonar
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition-all duration-200">
                    Imprimir
                  </li>
                </ul>
              </div>
            )}
      </div>


    </div>
  );
};
