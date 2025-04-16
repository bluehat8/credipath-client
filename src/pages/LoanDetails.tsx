// import * as React from "react";
// import { LoanHeader } from "../components/loan-details/LoanHeader";
// import { LoanPaymentCard } from "../components/loan-details/LoanPaymentCard";
// import { LoanDetailModal } from "../components/Modal/loan-details/LoanDetailModal";
// import { PaymentForm } from "../components/Modal/PayLoand/PayLoandForm";
// import { LoanHistoryTab } from "../components/loan-details/LoanHistoryTab";

// import { ThemeProvider } from "context/ThemeContext";

// export const paymentData = [
//   {
//     paymentNumber: "16",
//     capitalBalance: 50.0,
//     totalBalance: 50.0,
//     interestRate: 0.05,
//     amountPaid: 0.0,
//     interestBalance: 0.03,
//     dueDate: "2024-02-03",
//     status: "pending",
//   },
//   {
//     paymentNumber: "21",
//     capitalBalance: 50.0,
//     totalBalance: 50.0,
//     interestRate: 0.05,
//     amountPaid: 50.0,
//     interestBalance: 0.0,
//     dueDate: "2024-02-03",
//     status: "paid",
//   },
//   {
//     paymentNumber: "23",
//     capitalBalance: 50.0,
//     totalBalance: 50.0,
//     interestRate: 0.05,
//     amountPaid: 0.0,
//     interestBalance: 0.03,
//     dueDate: "2023-12-31",
//     status: "overdue",
//   },
// ];

// export const LoanDetails: React.FC = () => {
//   const [activeTab, setActiveTab] = React.useState<"payments" | "history">("payments");
//   const [filter, setFilter] = React.useState<"all" | "pending" | "paid" | "overdue">("all");

//   const filteredPayments = paymentData.filter((payment) => {
//     if (filter === "all") return true;
//     return payment.status === filter;
//   });

//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const [isPaymentFormOpen, setIsPaymentFormOpen] = React.useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const openPaymentForm = () => setIsPaymentFormOpen(true);
//   const closePaymentForm = () => setIsPaymentFormOpen(false);

//   return (
//     <div>
//       <div className="max-md:flex-col w-full">
//         <div className="gap-5 max-md:flex-col">
//           <h1 className="text-2xl font-semibold text-white tracking-wide">Detalle de Préstamo</h1>

//           <div className="w-full p-5 bg-zinc-800 mt-5 rounded-xl">
//             <div className="flex justify-between items-center">
//               <LoanHeader
//                 name="Ricardo Morales"
//                 code="505"
//                 loanAmount="200"
//                 interestRate="0.05"
//                 interestType="anual"
//                 paymentFrequency="MENSUAL"
//               />

//               <div className="flex gap-4">
//                 <button
//                   onClick={openPaymentForm}
//                   className="flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] hover:bg-zinc-600 max-md:px-3"
//                 >
//                   <img
//                     loading="lazy"
//                     src="/icons/abonar.svg"
//                     alt=""
//                     className="object-contain shrink-0 w-5 aspect-square"
//                   />
//                   <span className="text-sm font-medium text-white">ABONAR</span>
//                 </button>

//                 <button
//                   onClick={openModal}
//                   className="flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] hover:bg-zinc-600 max-md:px-3"
//                 >
//                   <img
//                     loading="lazy"
//                     src="/icons/eye.svg"
//                     alt=""
//                     className="object-contain shrink-0 w-5 aspect-square"
//                   />
//                   <span className="text-sm font-medium text-white">Información</span>
//                 </button>

//                 <button className="flex items-center gap-2 px-4 py-2 text-rose-600 whitespace-nowrap rounded-md bg-zinc-700 shadow-[0px_0px_10px_rgba(38,71,95,0.25)] hover:bg-zinc-600 max-md:px-3">
//                   <img
//                     loading="lazy"
//                     src="/icons/trash.svg"
//                     alt=""
//                     className="object-contain shrink-0 w-5 aspect-square"
//                   />
//                   <span className="text-sm font-medium">Eliminar</span>
//                 </button>

//                 <button 
//                   className="bg-green-300 text-white p-3 rounded-full hover:bg-green-400 transition duration-200"
//                 >
//                   <img src="/icons/print.svg" alt="" />
//                 </button>
//               </div>
//             </div>
//             {/* Filter buttons only shown in payments tab */}

//             <div className="mt-6 flex justify-center gap-4 border-b border-zinc-700 pb-4">
//               <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === "payments" ? "bg-blue-500 text-white" : "bg-zinc-700 text-gray-400"}`}
//                 onClick={() => setActiveTab("payments")}
//               >
//                 Pagos
//                   </button>
//                   <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === "history" ? "bg-blue-500 text-white" : "bg-zinc-700 text-gray-400"}`}
//                 onClick={() => setActiveTab("history")}
//               >
//                 Historial
//               </button>
//             </div>

//             {activeTab === "payments" && (
//               <>
//                 <div className="mt-6 flex justify-center gap-4">
//                   <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//                   filter === "all" ? "bg-blue-500 text-white" : "bg-zinc-700 text-gray-400"
//                 }`}
//                 onClick={() => setFilter("all")}
//               >
//                 Todos
//                   </button>
//                   <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//                   filter === "pending" ? "bg-orange-500 text-white" : "bg-zinc-700 text-gray-400"
//                 }`}
//                 onClick={() => setFilter("pending")}
//               >
//                 Pendientes
//                   </button>
//                   <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//                   filter === "paid" ? "bg-green-500 text-white" : "bg-zinc-700 text-gray-400"
//                 }`}
//                 onClick={() => setFilter("paid")}
//               >
//                 Pagadas
//                   </button>
//                   <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//                   filter === "overdue" ? "bg-red-500 text-white" : "bg-zinc-700 text-gray-400"
//                 }`}
//                 onClick={() => setFilter("overdue")}
//               >
//                 Vencidas
//                   </button>
//                 </div>
//               </>
//             )}

//             <div className="mt-8 space-y-4">
//               {activeTab === "payments" ? (
//                 <>
//                   {filteredPayments.map((payment, index) => (
//                     <LoanPaymentCard key={index} {...payment} />
//                   ))}
//                   {filteredPayments.length === 0 && (
//                     <p className="text-center text-gray-400">No hay pagos en esta categoría.</p>
//                   )}
//                 </>
//               ) : (
//                 <LoanHistoryTab
//                   payments={[
//                     {
//                       date: "2024-04-15",
//                       type: "Capital e Intereses",
//                       amount: 100,
//                       paidAmount: 200
//                     },
//                     {
//                       date: "2024-03-15",
//                       type: "Capital e Intereses",
//                       amount: 100,
//                       paidAmount: 100
//                     }
//                   ]}
//                   summary={{
//                     capitalPayment: 150,
//                     interestPayment: 50,
//                     lateInterestPayment: 0,
//                     totalPayments: 300,
//                     balance: 700,
//                     remainingCapital: 600,
//                     remainingInterest: 100,
//                     expectedTotalProfit: 150
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>

//       // {isModalOpen && (
//       //   <LoanDetailModal
//       //     name="Ricardo Morales"
//       //     code="505"
//       //     loanAmount="200"
//       //     interestRate="0.05"
//       //     interestType="anual"
//       //     paymentFrequency="MENSUAL"
//       //     loanDate="2024-01-01"
//       //     nextDueDate="2024-02-01"
//       //     loanDueDate="2025-01-01"
//       //     overduePayments={2}
//       //     interestValue="10"
//       //     totalInterestValue="20"
//       //     paidInstallments={5}
//       //     installmentValue="50"
//       //     totalLoan="250"
//       //     loanWithInterest="270"
//       //     totalPaid="200"
//       //     totalBalance="70"
//       //     isModalOpen={true}
//       //     onClose={handleCloseModal}
//       //   />
//       // )}

//       // {isPaymentFormOpen && <PaymentForm onClose={closePaymentForm} />}
//     // </div>
//   );
// };



// import * as React from "react";
// import { Eye, Printer, Trash2, Wallet } from "lucide-react";
// import { Button } from "components/components/ui/button";
// import { Card, CardContent } from "components/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/components/ui/tabs";
// import { LoanHeader } from "../components/loan-details/LoanHeader";
// import { LoanPaymentCard } from "../components/loan-details/LoanPaymentCard";
// import { LoanDetailModal } from "../components/Modal/loan-details/LoanDetailModal";
// import { PaymentForm } from "../components/Modal/PayLoand/PayLoandForm";
// import { LoanHistoryTab } from "../components/loan-details/LoanHistoryTab";

// export const paymentData = [
//   {
//     paymentNumber: "16",
//     capitalBalance: 50.0,
//     totalBalance: 50.0,
//     interestRate: 0.05,
//     amountPaid: 0.0,
//     interestBalance: 0.03,
//     dueDate: "2024-02-03",
//     status: "pending",
//   },
//   {
//     paymentNumber: "21",
//     capitalBalance: 50.0,
//     totalBalance: 50.0,
//     interestRate: 0.05,
//     amountPaid: 50.0,
//     interestBalance: 0.0,
//     dueDate: "2024-02-03",
//     status: "paid",
//   },
//   {
//     paymentNumber: "23",
//     capitalBalance: 50.0,
//     totalBalance: 50.0,
//     interestRate: 0.05,
//     amountPaid: 0.0,
//     interestBalance: 0.03,
//     dueDate: "2023-12-31",
//     status: "overdue",
//   },
// ];

// export const LoanDetails: React.FC = () => {
//   const [activeTab, setActiveTab] = React.useState<"payments" | "history">("payments");
//   const [filter, setFilter] = React.useState<"all" | "pending" | "paid" | "overdue">("all");
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const [isPaymentFormOpen, setIsPaymentFormOpen] = React.useState(false);

//   const filteredPayments = paymentData.filter((payment) => {
//     if (filter === "all") return true;
//     return payment.status === filter;
//   });

//   const openModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);
//   const openPaymentForm = () => setIsPaymentFormOpen(true);
//   const closePaymentForm = () => setIsPaymentFormOpen(false);

//   const getFilterButtonStyle = (buttonFilter: typeof filter) => {
//     const baseStyle = "px-6 py-2 rounded-full text-sm font-medium transition-colors";
//     const colors = {
//       all: "bg-primary text-primary-foreground",
//       pending: "bg-orange-500 text-white",
//       paid: "bg-green-500 text-white",
//       overdue: "bg-red-500 text-white",
//     };
    
//     return `${baseStyle} ${filter === buttonFilter ? colors[buttonFilter] : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`;
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-6">
//       <h1 className="text-3xl font-bold tracking-tight">Detalle de Préstamo</h1>

//       <Card className="">
//         <CardContent className="p-6">
//           <div className="flex flex-col lg:flex-row justify-between gap-6">
//             <LoanHeader
//               name="Ricardo Morales"
//               code="505"
//               loanAmount="200"
//               interestRate="0.05"
//               interestType="anual"
//               paymentFrequency="MENSUAL"
//             />

//             <div className="flex flex-wrap gap-3">
//               <Button onClick={openPaymentForm} className="gap-2">
//                 <Wallet className="h-4 w-4" />
//                 ABONAR
//               </Button>

//               <Button variant="outline" onClick={openModal} className="gap-2">
//                 <Eye className="h-4 w-4" />
//                 Información
//               </Button>

//               <Button variant="destructive" className="gap-2">
//                 <Trash2 className="h-4 w-4" />
//                 Eliminar
//               </Button>

//               <Button variant="outline" size="icon">
//                 <Printer className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="h-px bg-gradient-to-r from-zinc-700/50 via-zinc-600 to-zinc-700/50 my-8" />


//           <Tabs value={activeTab} onValueChange={(value: any) => setActiveTab(value as typeof activeTab)} className="mt-6">
//             <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
//               <TabsTrigger value="payments">Pagos</TabsTrigger>
//               <TabsTrigger value="history">Historial</TabsTrigger>
//             </TabsList>

//             <TabsContent value="payments" className="mt-6 space-y-6">
//               <div className="flex flex-wrap justify-center gap-3">
//                 <Button
//                   onClick={() => setFilter("all")}
//                   className={getFilterButtonStyle("all")}
//                 >
//                   Todos
//                 </Button>
//                 <Button
//                   onClick={() => setFilter("pending")}
//                   className={getFilterButtonStyle("pending")}
//                 >
//                   Pendientes
//                 </Button>
//                 <Button
//                   onClick={() => setFilter("paid")}
//                   className={getFilterButtonStyle("paid")}
//                 >
//                   Pagadas
//                 </Button>
//                 <Button
//                   onClick={() => setFilter("overdue")}
//                   className={getFilterButtonStyle("overdue")}
//                 >
//                   Vencidas
//                 </Button>
//               </div>

//               <div className="space-y-4">
//                 {filteredPayments.map((payment, index) => (
//                   <LoanPaymentCard key={index} {...payment} />
//                 ))}
//                 {filteredPayments.length === 0 && (
//                   <p className="text-center text-muted-foreground py-8">
//                     No hay pagos en esta categoría.
//                   </p>
//                 )}
//               </div>
//             </TabsContent>

//             <TabsContent value="history" className="mt-6">
//               <LoanHistoryTab
//                 payments={[
//                   {
//                     date: "2024-04-15",
//                     type: "Capital e Intereses",
//                     amount: 100,
//                     paidAmount: 200
//                   },
//                   {
//                     date: "2024-03-15",
//                     type: "Capital e Intereses",
//                     amount: 100,
//                     paidAmount: 100
//                   }
//                 ]}
//                 summary={{
//                   capitalPayment: 150,
//                   interestPayment: 50,
//                   lateInterestPayment: 0,
//                   totalPayments: 300,
//                   balance: 700,
//                   remainingCapital: 600,
//                   remainingInterest: 100,
//                   expectedTotalProfit: 150
//                 }}
//               />
//             </TabsContent>
//           </Tabs>
//         </CardContent>
//       </Card>

//       {isModalOpen && (
//         <LoanDetailModal
//           name="Ricardo Morales"
//           code="505"
//           loanAmount="200"
//           interestRate="0.05"
//           interestType="anual"
//           paymentFrequency="MENSUAL"
//           loanDate="2024-01-01"
//           nextDueDate="2024-02-01"
//           loanDueDate="2025-01-01"
//           overduePayments={2}
//           interestValue="10"
//           totalInterestValue="20"
//           paidInstallments={5}
//           installmentValue="50"
//           totalLoan="250"
//           loanWithInterest="270"
//           totalPaid="200"
//           totalBalance="70"
//           isModalOpen={true}
//           onClose={handleCloseModal}
//         />
//       )}

//       {isPaymentFormOpen && <PaymentForm onClose={closePaymentForm} />}
//     </div>
//   );
// };


"use client"

import * as React from "react"
import { Calendar, Eye, Printer, Trash2, Wallet } from "lucide-react"
import { Button } from "components/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/components/ui/tabs"
import { Badge } from "components/components/ui/badge"
import { LoanHeader } from "../components/loan-details/LoanHeader"
import { LoanPaymentCard } from "../components/loan-details/LoanPaymentCard"
import { LoanDetailModal } from "../components/Modal/loan-details/LoanDetailModal"
import { PaymentForm } from "../components/Modal/PayLoand/PayLoandForm"
import { LoanHistoryTab } from "../components/loan-details/LoanHistoryTab"

export const paymentData = [
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
]

export const LoanDetails: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"payments" | "history">("payments")
  const [filter, setFilter] = React.useState<"all" | "pending" | "paid" | "overdue">("all")
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = React.useState(false)

  const filteredPayments = paymentData.filter((payment) => {
    if (filter === "all") return true
    return payment.status === filter
  })

  const openModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)
  const openPaymentForm = () => setIsPaymentFormOpen(true)
  const closePaymentForm = () => setIsPaymentFormOpen(false)

  const statusCounts = {
    all: paymentData.length,
    pending: paymentData.filter((p) => p.status === "pending").length,
    paid: paymentData.filter((p) => p.status === "paid").length,
    overdue: paymentData.filter((p) => p.status === "overdue").length,
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Detalle de Préstamo</h1>
        <div className="flex flex-wrap gap-2">
          <Button onClick={openPaymentForm} className="gap-2 bg-green-600 hover:bg-green-700">
            <Wallet className="h-4 w-4" />
            Abonar
          </Button>
          <Button variant="outline" onClick={openModal} className="gap-2">
            <Eye className="h-4 w-4" />
            Información
          </Button>
        </div>
      </div>

      <Card className="border-t-4 border-t-primary shadow-md">
      <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <LoanHeader
              name="Ricardo Morales"
              code="505"
              loanAmount="200"
              interestRate="0.05"
              interestType="anual"
              paymentFrequency="MENSUAL"
            />

            <div className="flex flex-wrap gap-2 justify-end shrink-0">
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Calendario
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Imprimir
              </Button>
              <Button variant="destructive" size="sm" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Eliminar
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <div className="h-px bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700 my-6" />

          <Tabs
            value={activeTab}
            onValueChange={(value: any) => setActiveTab(value as typeof activeTab)}
            className="mt-6"
          >
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="history">Historial</TabsTrigger>
            </TabsList>

            <TabsContent value="payments" className="mt-6 space-y-6">
              <Card className="border border-muted">
                <CardHeader className="pb-3">
                  {/* <CardTitle className="text-lg">Estado de Pagos</CardTitle> */}
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button
                      onClick={() => setFilter("all")}
                      variant={filter === "all" ? "default" : "outline"}
                      className="flex flex-col h-auto py-2 justify-center items-center"
                    >
                      <span>Todos</span>
                      {/* <Badge variant="secondary" className="mt-1">
                        {statusCounts.all}
                      </Badge> */}
                    </Button>
                    <Button
                      onClick={() => setFilter("pending")}
                      variant={filter === "pending" ? "default" : "outline"}
                      className="flex flex-col h-auto py-2 justify-center items-center hover:bg-orange-600 text-white"
                      style={{
                        backgroundColor: filter === "pending" ? "rgb(249 115 22)" : "",
                        color: filter === "pending" ? "white" : "",
                      }}
                    >
                      <span>Pendientes</span>
                      {/* <Badge variant="secondary" className="mt-1">
                        {statusCounts.pending}
                      </Badge> */}
                    </Button>
                    <Button
                      onClick={() => setFilter("paid")}
                      variant={filter === "paid" ? "default" : "outline"}
                      className="flex flex-col h-auto py-2 justify-center items-center hover:bg-green-600 text-white"
                      style={{
                        backgroundColor: filter === "paid" ? "rgb(34 197 94)" : "",
                        color: filter === "paid" ? "white" : "",
                      }}
                    >
                      <span>Pagadas</span>
                      {/* <Badge variant="secondary" className="mt-1">
                        {statusCounts.paid}
                      </Badge> */}
                    </Button>
                    <Button
                      onClick={() => setFilter("overdue")}
                      variant={filter === "overdue" ? "default" : "outline"}
                      className="flex flex-col h-auto py-2 justify-center items-center hover:bg-red-600 text-white"
                      style={{
                        backgroundColor: filter === "overdue" ? "rgb(239 68 68)" : "",
                        color: filter === "overdue" ? "white" : "",
                      }}
                    >
                      <span>Vencidas</span>
                      {/* <Badge variant="secondary" className="mt-1">
                        {statusCounts.overdue}
                      </Badge> */}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {filteredPayments.map((payment, index) => (
                  <LoanPaymentCard key={index} {...payment} />
                ))}
                {filteredPayments.length === 0 && (
                  <div className="text-center text-muted-foreground py-12 bg-muted/30 rounded-lg border border-dashed">
                    <p className="text-lg">No hay pagos en esta categoría.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <LoanHistoryTab
                payments={[
                  {
                    date: "2024-04-15",
                    type: "Capital e Intereses",
                    amount: 100,
                    paidAmount: 200,
                  },
                  {
                    date: "2024-03-15",
                    type: "Capital e Intereses",
                    amount: 100,
                    paidAmount: 100,
                  },
                ]}
                summary={{
                  capitalPayment: 150,
                  interestPayment: 50,
                  lateInterestPayment: 0,
                  totalPayments: 300,
                  balance: 700,
                  remainingCapital: 600,
                  remainingInterest: 100,
                  expectedTotalProfit: 150,
                }}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

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
    </div>
  )
}
