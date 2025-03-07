"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "components/components/ui/card";
import { totalAmount, paidAmount, paidPercentage, pendingPercentage, pendingAmount } from "helpers";

type PaymentWidgetProps = {
  filterDays: number
}

export default function PaymentWidget({filterDays}: PaymentWidgetProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Progreso de Cobros</CardTitle>
        <CardDescription className="font-bold text-gray-500">Total cobrado: C${paidAmount} de C${totalAmount}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Línea horizontal con los dos colores (Pendiente y Cobrado) */}
        <div className="relative mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${paidPercentage}%`,
                backgroundColor: "#22c55e", // Color Cobrado
              }}
            ></div>
            <div
              className="h-2 rounded-full"
              style={{
                width: `${pendingPercentage}%`,
                backgroundColor: "#2229c5", // Color Pendiente
              }}
            ></div>
          </div>
          <div className="absolute top-5 right-0 text-sm font-semibold">
            {paidPercentage.toFixed(2)}%
          </div>
        </div>

        {/* Etiquetas debajo de la línea */}
        <section className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: "#22c55e" }}></div>
            <div className="">
              <span>Cobrado: </span>
              <span className="text-black font-bold">C${paidAmount}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: "#2229c5" }}></div>
            <div className="">
              <span>Pendiente: </span>
              <span className="text-black font-bold">C${pendingAmount}</span>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
