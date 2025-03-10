import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { InputField } from "components/components/ui-loan-custom/input-field";
import { SelectField } from "components/components/ui-loan-custom/select-field";


interface PaymentFormProps {
  onClose: () => void;
}

interface PaymentInfo {
  label: string;
  value: string;
  iconSrc: string;
}

const paymentInfoData: PaymentInfo[] = [
  {
    label: "Valor de la Cuota",
    value: "$50.02",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/13f2e5d4d645a98794b97554ae85ae60facc3abaa6cf169416a194c13702ea7c?apiKey=7930382fac3c4525a2ab54962694cee8&",
  },
  {
    label: "Valor Interes",
    value: "$0.03",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6e8e53096de8c643b4da5621b9defc03ad245b4ca5d155931b92b93ae4b5a89?apiKey=7930382fac3c4525a2ab54962694cee8&",
  },
  {
    label: "Deuda Total",
    value: "$200.10",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee291e462f64f3d44e75521a964caccde40f51628cfc311024ba13448d1d4b51?apiKey=7930382fac3c4525a2ab54962694cee8&",
  },
];

export const PaymentForm: React.FC<PaymentFormProps> = ({ onClose }) => {
  const [formData, setFormData] = React.useState({
    tipoPago: "efectivo",
    banco: "",
    valor: "",
    abonoA: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-start justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <form 
        onSubmit={handleSubmit}
        className="relative w-full max-w-2xl bg-background rounded-xl shadow-xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background px-6 py-4 border-b border-border flex justify-between items-center rounded-t-xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Agregar Abono</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        <Tabs.Root defaultValue="details" className="flex flex-col min-h-[500px]">
          <Tabs.List className="flex border-b border-border">
            <Tabs.Trigger
              value="details"
              className="flex-1 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary transition-colors"
            >
              Detalles
            </Tabs.Trigger>
            <Tabs.Trigger
              value="payment"
              className="flex-1 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary transition-colors"
            >
              Método de Pago
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="details" className="flex-1 p-6 space-y-6">
            {/* Payment Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {paymentInfoData.map((info, index) => (
                <div
                  key={index}
                  className="bg-backgroundprop rounded-lg p-4 flex items-center justify-between hover:bg-accent/20 transition-colors"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-semibold text-foreground">{info.value}</p>
                  </div>
                  <img src={info.iconSrc} alt="" className="w-8 h-8" />
                </div>
              ))}
            </div>

            {/* Main Form Fields */}
            <div className="space-y-6">
              <InputField
                label="Valor"
                id="valor"
                value={formData.valor}
                onChange={handleInputChange}
                placeholder="Ingrese el valor"
                className="text-lg"
              />

              <InputField
                label="Aplicar Abono a"
                id="abonoA"
                value={formData.abonoA}
                onChange={handleInputChange}
              />

              <InputField
                label="Fecha"
                id="fecha"
                type="date"
                value={formData.fecha}
                onChange={handleInputChange}
              />

              <InputField
                label="Nota"
                id="nota"
                type="textarea"
                value={formData.nota}
                onChange={handleInputChange}
                placeholder="Agregar una nota..."
              />
            </div>
          </Tabs.Content>

          <Tabs.Content value="payment" className="flex-1 p-6 space-y-6">
            <div className="space-y-6">
              <SelectField
                label="Tipo de Pago"
                id="tipoPago"
                value={formData.tipoPago}
                onChange={handleInputChange}
                options={[
                  { value: "efectivo", label: "Efectivo" },
                  { value: "tarjeta", label: "Tarjeta" },
                  { value: "transferencia", label: "Transferencia" },
                ]}
              />

              {formData.tipoPago === "tarjeta" && (
                <SelectField
                  label="Banco"
                  id="banco"
                  value={formData.banco}
                  onChange={handleInputChange}
                  options={[
                    { value: "banpro", label: "Banpro" },
                    { value: "bac", label: "BAC" },
                    { value: "lafise", label: "Lafise" },
                    { value: "ficohsa", label: "Ficohsa" },
                    { value: "avanz", label: "Avanz" },
                  ]}
                />
              )}

              {/* Payment Summary */}
              <div className="bg-accent/50 rounded-lg p-6 mt-8">
                <h3 className="font-medium text-foreground mb-4">Resumen del Pago</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Monto:</span>
                    <span className="text-lg font-semibold text-foreground">{formData.valor || "$0.00"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interés:</span>
                    <span className="text-foreground">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Capital:</span>
                    <span className="text-foreground">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-sm font-medium">Total:</span>
                    <span className="text-lg font-semibold text-primary">{formData.valor || "$0.00"}</span>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* Footer */}
        <div className="sticky bottom-0 px-6 py-4 border-t border-border bg-background/80 backdrop-blur-sm flex flex-col-reverse sm:flex-row gap-2 justify-end rounded-b-xl">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};