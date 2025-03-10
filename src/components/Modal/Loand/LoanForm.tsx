// "use client"

// import * as React from "react"
// import { InputField } from "./LoandInputField"
// import { SelectField } from "./select-field"
// import { DateField } from "./date-field"
// import { LoanSimulation } from "./LoandSimulation"
// import { ArrowRight, X } from "lucide-react"

// interface LoanFormProps {
//   valor: string
//   tipoInteres: string
//   interes: string
//   pago: string
//   fechaPrestamo: string
//   nota: string
// }

// export const LoanForm: React.FC<LoanFormProps> = (prop) => {
//   const [formData, setFormData] = React.useState({
//     valor: prop?.valor || "100",
//     tipoInteres: prop?.tipoInteres || "anual",
//     interes: prop?.interes || "5",
//     pago: prop?.pago || "mensual",
//     fechaPrestamo: prop?.fechaPrestamo || new Date().toISOString().split("T")[0],
//     nota: prop?.nota || "",
//   })

//   const [isLoanListVisible, setLoanListVisible] = React.useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { id, value } = e.target
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }))
//   }

//   const handleDateChange = (id: string, value: string) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }))
//   }

//   const handleSimulation = () => {
//     console.log("Simulación ejecutada con los datos:", formData)
//     setLoanListVisible(true)
//   }

//   const closeLoanList = () => {
//     setLoanListVisible(false)
//   }

//   // Options for select fields
//   const tipoInteresOptions = [
//     { value: "anual", label: "Anual" },
//     { value: "mensual", label: "Mensual" },
//     { value: "quincenal", label: "Quincenal" },
//     { value: "semanal", label: "Semanal" },
//   ]

//   const pagoOptions = [
//     { value: "mensual", label: "Mensual" },
//     { value: "quincenal", label: "Quincenal" },
//     { value: "semanal", label: "Semanal" },
//     { value: "diario", label: "Diario" },
//   ]

//   return (
//     <>
//       <div className="max-w-[580px] mx-auto">
//         <h2 className="text-xl font-light text-white mb-6 tracking-wide">Agregar Préstamo</h2>

//         <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <InputField
//               label="Valor"
//               id="valor"
//               value={formData.valor}
//               onChange={handleInputChange}
//               placeholder="Ingrese monto"
//               type="number"
//             />

//             <SelectField
//               label="Tipo de Interés"
//               id="tipoInteres"
//               value={formData.tipoInteres}
//               onChange={handleInputChange}
//               options={tipoInteresOptions}
//             />

//             <InputField
//               label="Interés (%)"
//               id="interes"
//               value={formData.interes}
//               onChange={handleInputChange}
//               placeholder="Ingrese tasa"
//               type="number"
//             />

//             <SelectField
//               label="Frecuencia de Pago"
//               id="pago"
//               value={formData.pago}
//               onChange={handleInputChange}
//               options={pagoOptions}
//             />

//             <DateField
//               label="Fecha de Préstamo"
//               id="fechaPrestamo"
//               value={formData.fechaPrestamo}
//               onChange={handleDateChange}
//             />
//           </div>

//           <InputField
//             label="Nota"
//             id="nota"
//             value={formData.nota}
//             onChange={handleInputChange}
//             placeholder="Ingrese nota o descripción del préstamo"
//             isTextarea={true}
//           />

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <button
//               type="button"
//               onClick={handleSimulation}
//               className="px-6 py-2.5 flex items-center justify-center gap-2 text-sm font-normal text-white bg-transparent border border-green-native/30 rounded-md transition-all hover:border-green-native hover:bg-green-native/10"
//             >
//               Simulación
//               <ArrowRight className="w-4 h-4" />
//             </button>

//             <button
//               type="button"
//               className="px-6 py-2.5 text-sm font-normal text-white bg-green-native rounded-md hover:bg-green-native-dark transition-all"
//             >
//               Guardar
//             </button>
//           </div>
//         </form>
//       </div>

//       {isLoanListVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
//           <div className="relative bg-neutral-900 text-white rounded-lg w-[95%] max-w-4xl overflow-hidden shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95">
//             <div className="flex items-center justify-between p-4 border-b border-neutral-800">
//               <h2 className="text-lg font-light tracking-wide">Simulación de Préstamo</h2>
//               <button className="text-neutral-400 hover:text-white transition-colors" onClick={closeLoanList}>
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
//                 <div className="space-y-1">
//                   <p className="text-xs text-neutral-400">Monto</p>
//                   <p className="text-white font-medium">C${Number.parseFloat(formData.valor).toLocaleString()}</p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="text-xs text-neutral-400">Interés</p>
//                   <p className="text-white font-medium">
//                     {formData.interes}% {formData.tipoInteres}
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="text-xs text-neutral-400">Frecuencia</p>
//                   <p className="text-white font-medium">
//                     {pagoOptions.find((opt) => opt.value === formData.pago)?.label}
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="text-xs text-neutral-400">Fecha</p>
//                   <p className="text-white font-medium">
//                     {new Date(formData.fechaPrestamo).toLocaleDateString("es-ES")}
//                   </p>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="text-xs text-neutral-400">Total a pagar</p>
//                   <p className="text-white font-medium">
//                     C$
//                     {(
//                       Number.parseFloat(formData.valor) *
//                       (1 + Number.parseFloat(formData.interes) / 100)
//                     ).toLocaleString()}
//                   </p>
//                 </div>
//               </div>

//               <div className="max-h-[60vh] overflow-y-auto">
//                 <LoanSimulation formData={formData} />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// "use client"

// import * as React from "react"
// import { InputField } from "./LoandInputField"
// import { SelectField } from "./select-field"
// import { DateField } from "./date-field"
// import { LoanSimulation } from "./LoandSimulation"
// import { ArrowRight, X } from "lucide-react"

// interface LoanFormProps {
//   valor: string
//   tipoInteres: string
//   interes: string
//   pago: string
//   fechaPrestamo: string
//   nota: string
//   numeroCuotas: string
//   tipoPago: string
//   banco?: string
// }

// export const LoanForm: React.FC<LoanFormProps> = (prop) => {
//   const [formData, setFormData] = React.useState({
//     valor: prop?.valor || "100",
//     tipoInteres: prop?.tipoInteres || "anual",
//     interes: prop?.interes || "5",
//     pago: prop?.pago || "mensual",
//     fechaPrestamo: prop?.fechaPrestamo || new Date().toISOString().split("T")[0],
//     nota: prop?.nota || "",
//     numeroCuotas: prop?.numeroCuotas || "12",
//     tipoPago: prop?.tipoPago || "efectivo",
//     banco: prop?.banco || "",
//   })

//   const [isLoanListVisible, setLoanListVisible] = React.useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { id, value } = e.target
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }))
//   }

//   const handleDateChange = (id: string, value: string) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }))
//   }

//   const handleSimulation = () => {
//     console.log("Simulación ejecutada con los datos:", formData)
//     setLoanListVisible(true)
//   }

//   const closeLoanList = () => {
//     setLoanListVisible(false)
//   }

//   // Options for select fields
//   const tipoInteresOptions = [
//     { value: "anual", label: "Anual" },
//     { value: "mensual", label: "Mensual" },
//     { value: "quincenal", label: "Quincenal" },
//     { value: "semanal", label: "Semanal" },
//   ]

//   const pagoOptions = [
//     { value: "mensual", label: "Mensual" },
//     { value: "quincenal", label: "Quincenal" },
//     { value: "semanal", label: "Semanal" },
//     { value: "diario", label: "Diario" },
//   ]

//   const tipoPagoOptions = [
//     { value: "efectivo", label: "Efectivo" },
//     { value: "tarjeta", label: "Tarjeta" },
//     { value: "transferencia", label: "Transferencia" },
//     { value: "cheque", label: "Cheque" },
//   ]

//   const bancoOptions = [
//     { value: "banpro", label: "Banpro" },
//     { value: "bac", label: "BAC" },
//     { value: "lafise", label: "Lafise" },
//     { value: "ficohsa", label: "Ficohsa" },
//     { value: "avanz", label: "Avanz" },
//   ]

//   // Show bank field only if payment type is card
//   const showBankField = formData.tipoPago === "tarjeta"

//   return (
//     <>
//       <div className="max-w-[680px] mx-auto">
//         <h2 className="text-xl font-light text-white mb-6 tracking-wide">Agregar Préstamo</h2>

//         <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <InputField
//               label="Valor"
//               id="valor"
//               value={formData.valor}
//               onChange={handleInputChange}
//               placeholder="Ingrese monto"
//               type="number"
//             />

//             <SelectField
//               label="Tipo de Interés"
//               id="tipoInteres"
//               value={formData.tipoInteres}
//               onChange={handleInputChange}
//               options={tipoInteresOptions}
//             />

//             <InputField
//               label="Interés (%)"
//               id="interes"
//               value={formData.interes}
//               onChange={handleInputChange}
//               placeholder="Ingrese tasa"
//               type="number"
//             />

//             <SelectField
//               label="Frecuencia de Pago"
//               id="pago"
//               value={formData.pago}
//               onChange={handleInputChange}
//               options={pagoOptions}
//             />

//             <InputField
//               label="Número de Cuotas"
//               id="numeroCuotas"
//               value={formData.numeroCuotas}
//               onChange={handleInputChange}
//               placeholder="Ingrese número de cuotas"
//               type="number"
//             />

//             <DateField
//               label="Fecha de Préstamo"
//               id="fechaPrestamo"
//               value={formData.fechaPrestamo}
//               onChange={handleDateChange}
//             />

//             <SelectField
//               label="Tipo de Pago"
//               id="tipoPago"
//               value={formData.tipoPago}
//               onChange={handleInputChange}
//               options={tipoPagoOptions}
//             />

//             {showBankField && (
//               <SelectField
//                 label="Banco"
//                 id="banco"
//                 value={formData.banco}
//                 onChange={handleInputChange}
//                 options={bancoOptions}
//               />
//             )}
//           </div>

//           <InputField
//             label="Nota"
//             id="nota"
//             value={formData.nota}
//             onChange={handleInputChange}
//             placeholder="Ingrese nota o descripción del préstamo"
//             isTextarea={true}
//           />

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <button
//               type="button"
//               onClick={handleSimulation}
//               className="px-6 py-2.5 flex items-center justify-center gap-2 text-sm font-normal text-white bg-transparent border border-green-native/30 rounded-md transition-all hover:border-green-native hover:bg-green-native/10"
//             >
//               Simulación
//               <ArrowRight className="w-4 h-4" />
//             </button>

//             <button
//               type="button"
//               className="px-6 py-2.5 text-sm font-normal text-white bg-green-native rounded-md hover:bg-green-native-dark transition-all"
//             >
//               Guardar
//             </button>
//           </div>
//         </form>
//       </div>

//       {isLoanListVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
//           <div className="relative bg-neutral-900 text-white rounded-lg w-[95%] max-w-5xl overflow-hidden shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95">
//             <div className="flex items-center justify-between p-4 border-b border-neutral-800">
//               <h2 className="text-lg font-light tracking-wide">Simulación de Préstamo</h2>
//               <button className="text-neutral-400 hover:text-white transition-colors" onClick={closeLoanList}>
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="p-6 max-h-[80vh] overflow-y-auto">
//               <LoanSimulation formData={formData} />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }



"use client"

import * as React from "react"
import { ArrowRight, X, Calculator, Save } from "lucide-react"
import { InputField } from "components/components/ui-custom/input-field"
import { SelectField } from "components/components/ui-custom/select-field"
import { DateField } from "components/components/ui-custom/date-field"
import { Button } from "components/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "components/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"
import { Badge } from "components/components/ui/badge"

interface LoanFormProps {
  valor: string
  tipoInteres: string
  interes: string
  pago: string
  fechaPrestamo: string
  nota: string
  numeroCuotas: string
  tipoPago: string
  banco?: string
}

interface LoanSimulationProps {
  formData: LoanFormProps
}

// Placeholder for the LoanSimulation component
const LoanSimulation: React.FC<LoanSimulationProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Monto del préstamo</h3>
          <p className="text-2xl font-semibold">${formData.valor}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Tasa de interés</h3>
          <p className="text-2xl font-semibold">
            {formData.interes}% <span className="text-sm text-muted-foreground">({formData.tipoInteres})</span>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Plazo</h3>
          <p className="text-2xl font-semibold">
            {formData.numeroCuotas} <span className="text-sm text-muted-foreground">cuotas ({formData.pago})</span>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Fecha de inicio</h3>
          <p className="text-2xl font-semibold">{new Date(formData.fechaPrestamo).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Tabla de amortización</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Cuota</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Fecha</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Pago</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Capital</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Interés</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(Math.min(5, Number.parseInt(formData.numeroCuotas)))].map((_, index) => {
                // Simple simulation calculation
                const loanAmount = Number.parseFloat(formData.valor)
                const interestRate = Number.parseFloat(formData.interes) / 100 / 12 // Monthly rate
                const periods = Number.parseInt(formData.numeroCuotas)

                const payment =
                  (loanAmount * interestRate * Math.pow(1 + interestRate, periods)) /
                  (Math.pow(1 + interestRate, periods) - 1)
                const interest = (loanAmount - payment * index) * interestRate
                const principal = payment - interest
                const balance = loanAmount - principal * (index + 1)

                // Calculate payment date
                const date = new Date(formData.fechaPrestamo)
                date.setMonth(date.getMonth() + index + 1)

                return (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 text-sm">{index + 1}</td>
                    <td className="py-3 px-4 text-sm">{date.toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-sm">${payment.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm">${principal.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm">${interest.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm">${balance > 0 ? balance.toFixed(2) : "0.00"}</td>
                  </tr>
                )
              })}
              {Number.parseInt(formData.numeroCuotas) > 5 && (
                <tr>
                  <td colSpan={6} className="py-3 px-4 text-center text-sm text-muted-foreground">
                    Mostrando 5 de {formData.numeroCuotas} cuotas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const LoanForm: React.FC<LoanFormProps> = (prop) => {
  const [formData, setFormData] = React.useState({
    valor: prop?.valor || "100",
    tipoInteres: prop?.tipoInteres || "anual",
    interes: prop?.interes || "5",
    pago: prop?.pago || "mensual",
    fechaPrestamo: prop?.fechaPrestamo || new Date().toISOString().split("T")[0],
    nota: prop?.nota || "",
    numeroCuotas: prop?.numeroCuotas || "12",
    tipoPago: prop?.tipoPago || "efectivo",
    banco: prop?.banco || "",
  })

  const [isLoanListVisible, setLoanListVisible] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("details")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleDateChange = (id: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSimulation = () => {
    console.log("Simulación ejecutada con los datos:", formData)
    setLoanListVisible(true)
  }

  // Options for select fields
  const tipoInteresOptions = [
    { value: "anual", label: "Anual" },
    { value: "mensual", label: "Mensual" },
    { value: "quincenal", label: "Quincenal" },
    { value: "semanal", label: "Semanal" },
  ]

  const pagoOptions = [
    { value: "mensual", label: "Mensual" },
    { value: "quincenal", label: "Quincenal" },
    { value: "semanal", label: "Semanal" },
    { value: "diario", label: "Diario" },
  ]

  const tipoPagoOptions = [
    { value: "efectivo", label: "Efectivo" },
    { value: "tarjeta", label: "Tarjeta" },
    { value: "transferencia", label: "Transferencia" },
    { value: "cheque", label: "Cheque" },
  ]

  const bancoOptions = [
    { value: "banpro", label: "Banpro" },
    { value: "bac", label: "BAC" },
    { value: "lafise", label: "Lafise" },
    { value: "ficohsa", label: "Ficohsa" },
    { value: "avanz", label: "Avanz" },
  ]

  // Show bank field only if payment type is card
  const showBankField = formData.tipoPago === "tarjeta"

  return (
    <>
      <Card className="bg-background border-green-native shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-medium">Agregar Préstamo</CardTitle>
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
              Nuevo
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="details">Detalles del Préstamo</TabsTrigger>
              <TabsTrigger value="payment">Información de Pago</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Valor"
                  id="valor"
                  value={formData.valor}
                  onChange={handleInputChange}
                  placeholder="Ingrese monto"
                  type="number"
                />

                <SelectField
                  label="Tipo de Interés"
                  id="tipoInteres"
                  value={formData.tipoInteres}
                  onChange={handleInputChange}
                  options={tipoInteresOptions}
                />

                <InputField
                  label="Interés (%)"
                  id="interes"
                  value={formData.interes}
                  onChange={handleInputChange}
                  placeholder="Ingrese tasa"
                  type="number"
                />

                <SelectField
                  label="Frecuencia de Pago"
                  id="pago"
                  value={formData.pago}
                  onChange={handleInputChange}
                  options={pagoOptions}
                />

                <InputField
                  label="Número de Cuotas"
                  id="numeroCuotas"
                  value={formData.numeroCuotas}
                  onChange={handleInputChange}
                  placeholder="Ingrese número de cuotas"
                  type="number"
                />

                <DateField
                  label="Fecha de Préstamo"
                  id="fechaPrestamo"
                  value={formData.fechaPrestamo}
                  onChange={handleDateChange}
                />
              </div>

              <div className="mt-6">
                <InputField
                  label="Nota"
                  id="nota"
                  value={formData.nota}
                  onChange={handleInputChange}
                  placeholder="Ingrese nota o descripción del préstamo"
                  isTextarea={true}
                />
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setActiveTab("payment")} className="gap-2">
                  Siguiente <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="payment" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="Tipo de Pago"
                  id="tipoPago"
                  value={formData.tipoPago}
                  onChange={handleInputChange}
                  options={tipoPagoOptions}
                />

                {showBankField && (
                  <SelectField
                    label="Banco"
                    id="banco"
                    value={formData.banco}
                    onChange={handleInputChange}
                    options={bancoOptions}
                  />
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="outline" onClick={() => setActiveTab("details")} className="order-2 sm:order-1">
                  Atrás
                </Button>

                <div className="flex flex-col sm:flex-row gap-4 order-1 sm:order-2 sm:ml-auto">
                  <Button variant="outline" onClick={handleSimulation} className="gap-2">
                    <Calculator className="w-4 h-4" />
                    Simulación
                  </Button>

                  <Button type="button" className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={isLoanListVisible} onOpenChange={setLoanListVisible}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Simulación de Préstamo</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar</span>
            </DialogClose>
          </DialogHeader>
          <LoanSimulation formData={formData} />
        </DialogContent>
      </Dialog>
    </>
  )
}

