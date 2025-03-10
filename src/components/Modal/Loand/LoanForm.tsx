"use client"

import * as React from "react"
import { ArrowRight, Calculator, Save } from "lucide-react"
import { InputField } from "components/components/ui-custom/input-field"
import { SelectField } from "components/components/ui-custom/select-field"
import { DateField } from "components/components/ui-custom/date-field"
import { Button } from "components/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "components/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"
import { Badge } from "components/components/ui/badge"
import { LoanSimulation } from "./LoandSimulation"
import { Switch } from "components/components/ui/switch"

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
  habilitarInteresMora?: boolean
  diasGracia?: string
  tasaInteresMora?: string
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
    habilitarInteresMora: prop?.habilitarInteresMora || false,
    diasGracia: prop?.diasGracia || "0",
    tasaInteresMora: prop?.tasaInteresMora || "0",
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

  const tipoInteresOptions = [
    { value: "anual", label: "Interés al capital inicial" },
    { value: "mensual", label: "Interés a cada cuota" },
    { value: "quincenal", label: "Interés compuesto bancario" },
  ]

  const pagoOptions = [
    { value: "mensual", label: "Mensual" },
    { value: "quincenal", label: "Quincenal" },
    { value: "semanal", label: "Semanal" },
    { value: "diario", label: "Diario" },
    { value: "custom", label: "Días específicos del mes" },
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

                <div className="flex flex-col space-y-2 mb-5">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="habilitarInteresMora"
                      checked={formData.habilitarInteresMora}
                      onCheckedChange={(checked) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          habilitarInteresMora: checked,
                        }))
                      }
                    />
                    <label htmlFor="habilitarInteresMora" className="text-sm font-medium" >
                      Habilitar intereses por mora
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground ml-10">
                    Cobrar intereses sobre montos vencidos después del periodo de gracia
                  </p>
                </div>
              </div>

              {formData.habilitarInteresMora && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <InputField
                    label="Días de gracia"
                    id="diasGracia"
                    value={formData.diasGracia}
                    onChange={handleInputChange}
                    placeholder="Ingrese días de gracia"
                    type="number"
                  />

                  <InputField
                    label="Tasa de interés por mora anual (%)"
                    id="tasaInteresMora"
                    value={formData.tasaInteresMora}
                    onChange={handleInputChange}
                    placeholder="Ingrese tasa de interés por mora"
                    type="number"
                  />
                </div>
              )}

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
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-50 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <span className="sr-only">Cerrar</span>
            </DialogClose>
          </DialogHeader>
          <LoanSimulation formData={formData} />
        </DialogContent>
      </Dialog>
    </>
  )
}

