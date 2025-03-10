import type React from "react"
import { Calendar, DollarSign, Percent, ArrowRight, CreditCard, Clock } from "lucide-react"

interface LoanSimulationProps {
  formData?: {
    valor: string
    tipoInteres: string
    interes: string
    pago: string
    fechaPrestamo: string
    numeroCuotas: string
    tipoPago: string
    banco?: string
  }
}

export const LoanSimulation: React.FC<LoanSimulationProps> = ({ formData }) => {
  // Generate mock simulation data based on form data
  const generateSimulationData = () => {
    if (!formData) return []

    const loanAmount = Number.parseFloat(formData.valor)
    const interestRate = Number.parseFloat(formData.interes) / 100
    const payments = Number.parseInt(formData.numeroCuotas) || 12

    // Simple amortization calculation
    const paymentAmount = (loanAmount + loanAmount * interestRate) / payments

    let remainingBalance = loanAmount
    const simulationData = []

    const startDate = new Date(formData.fechaPrestamo)

    for (let i = 1; i <= payments; i++) {
      const interestPayment = remainingBalance * (interestRate / payments)
      const principalPayment = paymentAmount - interestPayment
      remainingBalance -= principalPayment

      // Calculate payment date based on payment frequency
      const paymentDate = new Date(startDate)
      if (formData.pago === "mensual") {
        paymentDate.setMonth(paymentDate.getMonth() + i)
      } else if (formData.pago === "quincenal") {
        paymentDate.setDate(paymentDate.getDate() + i * 15)
      } else if (formData.pago === "semanal") {
        paymentDate.setDate(paymentDate.getDate() + i * 7)
      } else if (formData.pago === "diario") {
        paymentDate.setDate(paymentDate.getDate() + i)
      }

      simulationData.push({
        paymentNumber: i,
        paymentDate: paymentDate.toISOString().split("T")[0],
        paymentAmount: paymentAmount.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        remainingBalance: Math.max(0, remainingBalance).toFixed(2),
        status: i === 1 ? "pendiente" : "futuro",
        progressPercent: ((i / payments) * 100).toFixed(0),
      })
    }

    return simulationData
  }

  const simulationData = generateSimulationData()

  // Calculate total amounts
  const totalPayment = simulationData
    .reduce((sum, payment) => sum + Number.parseFloat(payment.paymentAmount), 0)
    .toFixed(2)

  const totalInterest = simulationData
    .reduce((sum, payment) => sum + Number.parseFloat(payment.interestPayment), 0)
    .toFixed(2)

  // Get payment type label
  const getPaymentTypeLabel = () => {
    switch (formData?.tipoPago) {
      case "efectivo":
        return "Efectivo"
      case "tarjeta":
        return `Tarjeta (${formData.banco})`
      case "transferencia":
        return "Transferencia"
      case "cheque":
        return "Cheque"
      default:
        return formData?.tipoPago || ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/30">
        <h3 className="text-sm font-light text-neutral-300 mb-4">Resumen del Préstamo</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Monto Total</span>
            </div>
            <p className="text-lg font-medium text-white">${totalPayment}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Percent className="w-3.5 h-3.5" />
              <span>Interés Total</span>
            </div>
            <p className="text-lg font-medium text-white">${totalInterest}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Cuotas</span>
            </div>
            <p className="text-lg font-medium text-white">{formData?.numeroCuotas || "12"}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Frecuencia</span>
            </div>
            <p className="text-lg font-medium text-white capitalize">{formData?.pago}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Tipo de Pago</span>
            </div>
            <p className="text-lg font-medium text-white capitalize">{getPaymentTypeLabel()}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Fecha Inicio</span>
            </div>
            <p className="text-lg font-medium text-white">
              {formData?.fechaPrestamo ? new Date(formData.fechaPrestamo).toLocaleDateString("es-ES") : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Cards */}
      <div className="max-h-[400px] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {simulationData.map((payment) => (
          <div
            key={payment.paymentNumber}
            className={`rounded-lg border overflow-hidden transition-all ${
              payment.status === "pendiente"
                ? "border-green-native/30 bg-green-native/5"
                : "border-neutral-700/30 bg-neutral-800/30"
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between p-3 border-b border-neutral-700/20">
              <div className="flex items-center gap-2">
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                    payment.status === "pendiente" ? "bg-green-native text-black" : "bg-neutral-700 text-white"
                  }`}
                >
                  {payment.paymentNumber}
                </span>
                <span className="text-sm font-light">{new Date(payment.paymentDate).toLocaleDateString("es-ES")}</span>
              </div>

              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  payment.status === "pendiente"
                    ? "bg-green-native/20 text-green-native"
                    : "bg-neutral-700/30 text-neutral-400"
                }`}
              >
                {payment.status === "pendiente" ? "Pendiente" : "Futuro"}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-3 space-y-3">
              {/* Payment Amount */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-neutral-400">Pago Total</span>
                <span className="text-base font-medium">${payment.paymentAmount}</span>
              </div>

              {/* Payment Breakdown */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Capital</span>
                    <span>${payment.principalPayment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Interés</span>
                    <span>${payment.interestPayment}</span>
                  </div>
                </div>

                <div className="text-neutral-600">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="space-y-1">
                  <span className="text-neutral-400 text-xs">Saldo</span>
                  <p className="text-sm">${payment.remainingBalance}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="pt-2">
                <div className="h-1 w-full bg-neutral-700/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      payment.status === "pendiente" ? "bg-green-native" : "bg-neutral-600"
                    }`}
                    style={{ width: `${payment.progressPercent}%` }}
                  ></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-neutral-500">{payment.progressPercent}% completado</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* end */}
    </div>
  )
}

