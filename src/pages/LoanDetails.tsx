import * as React from "react";
import { LoanHeader } from "../components/loan-details/LoanHeader.tsx";
import { LoanPaymentCard } from "../components/loan-details/LoanPaymentCard.tsx";
import { Layout as Sidebar } from "../components/sidebar/Layout.tsx";
import { LoanDetailModal } from "../components/Modal/loan-details/LoanDetailModal.tsx";
import { PaymentForm } from "../components/Modal/PayLoand/PayLoandForm.tsx";

const paymentData = [
  {
    paymentNumber: "16",
    capitalBalance: 50.0,
    totalBalance: 50.0,
    interestRate: 0.05,
    amountPaid: 0.0,
    interestBalance: 0.03,
    dueDate: "2024-02-03",
    status: "pending",
  },
  {
    paymentNumber: "21",
    capitalBalance: 50.0,
    totalBalance: 50.0,
    interestRate: 0.05,
    amountPaid: 50.0,
    interestBalance: 0.0,
    dueDate: "2024-02-03",
    status: "paid",
  },
  {
    paymentNumber: "23",
    capitalBalance: 50.0,
    totalBalance: 50.0,
    interestRate: 0.05,
    amountPaid: 0.0,
    interestBalance: 0.03,
    dueDate: "2023-12-31",
    status: "overdue",
  },
];

export const LoanDetails: React.FC = () => {
  const [filter, setFilter] = React.useState<"all" | "pending" | "paid" | "overdue">("all");

  const filteredPayments = paymentData.filter((payment) => {
    if (filter === "all") return true;
    return payment.status === filter;
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isPaymentFormOpen, setIsPaymentFormOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const openPaymentForm = () => setIsPaymentFormOpen(true);
  const closePaymentForm = () => setIsPaymentFormOpen(false);

  return (
    <Sidebar>
      <div className="max-md:flex-col w-full">
        <div className="gap-5 max-md:flex-col">
          <h1 className="text-2xl font-semibold text-white tracking-wide">Detalle de Préstamo</h1>

          <div className="w-full p-5 bg-zinc-800 mt-5 rounded-xl">
            <div className="flex justify-between items-center">
              <LoanHeader
                name="Ricardo Morales"
                code="505"
                loanAmount="200"
                interestRate="0.05"
                interestType="anual"
                paymentFrequency="MENSUAL"
              />

              <div className="flex gap-4">
                <button
                  onClick={openPaymentForm}
                  className="flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] hover:bg-zinc-600 max-md:px-3"
                >
                  <img
                    loading="lazy"
                    src="/icons/abonar.svg"
                    alt=""
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <span className="text-sm font-medium text-white">ABONAR</span>
                </button>

                <button
                  onClick={openModal}
                  className="flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] hover:bg-zinc-600 max-md:px-3"
                >
                  <img
                    loading="lazy"
                    src="/icons/eye.svg"
                    alt=""
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <span className="text-sm font-medium text-white">Información</span>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 text-rose-600 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] hover:bg-zinc-600 max-md:px-3">
                  <img
                    loading="lazy"
                    src="/icons/trash.svg"
                    alt=""
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <span className="text-sm font-medium">Eliminar</span>
                </button>

                <button 
                  className="bg-green-300 text-white p-3 rounded-full hover:bg-green-400 transition duration-200"
                >
                  <img src="/icons/print.svg" alt="" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  filter === "all" ? "bg-blue-500 text-white" : "bg-zinc-700 text-gray-400"
                }`}
                onClick={() => setFilter("all")}
              >
                Todos
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  filter === "pending" ? "bg-orange-500 text-white" : "bg-zinc-700 text-gray-400"
                }`}
                onClick={() => setFilter("pending")}
              >
                Pendientes
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  filter === "paid" ? "bg-green-500 text-white" : "bg-zinc-700 text-gray-400"
                }`}
                onClick={() => setFilter("paid")}
              >
                Pagadas
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  filter === "overdue" ? "bg-red-500 text-white" : "bg-zinc-700 text-gray-400"
                }`}
                onClick={() => setFilter("overdue")}
              >
                Vencidas
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {filteredPayments.map((payment, index) => (
                <LoanPaymentCard key={index} {...payment} />
              ))}
              {filteredPayments.length === 0 && (
                <p className="text-center text-gray-400">No hay pagos en esta categoría.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <LoanDetailModal
          name="Ricardo Morales"
          code="505"
          loanAmount="200"
          interestRate="0.05"
          interestType="anual"
          paymentFrequency="MENSUAL"
          loanDate="2024-01-01"
          nextDueDate="2024-02-01"
          loanDueDate="2025-01-01"
          overduePayments={2}
          interestValue="10"
          totalInterestValue="20"
          paidInstallments={5}
          installmentValue="50"
          totalLoan="250"
          loanWithInterest="270"
          totalPaid="200"
          totalBalance="70"
          isModalOpen={true}
          onClose={handleCloseModal}
        />
      )}

      {isPaymentFormOpen && <PaymentForm onClose={closePaymentForm} />}
    </Sidebar>
  );
};
