"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "components/components/ui/card"
import { Progress } from "components/components/ui/progress"

// Mock data - replace with actual data fetching
const paidAmount = 15000
const totalAmount = 25000
const paidPercentage = (paidAmount / totalAmount) * 100
const pendingAmount = totalAmount - paidAmount

type PaymentWidgetProps = {
  filterDays?: number
  className?: string
}

export default function PaymentWidget({ filterDays = 0, className }: PaymentWidgetProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Progreso de Cobros</CardTitle>
        <CardDescription className="font-bold text-muted-foreground">
          Total cobrado: ${paidAmount.toLocaleString()} de ${totalAmount.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progreso</span>
            <span className="font-medium">{paidPercentage.toFixed(1)}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-secondary">
            <div className="h-2 rounded-full bg-green-gradient" style={{ width: `${paidPercentage}%` }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-gradient"></div>
              <span className="text-sm font-medium">Cobrado</span>
            </div>
            <p className="text-2xl font-bold">${paidAmount.toLocaleString()}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive"></div>
              <span className="text-sm font-medium">Pendiente</span>
            </div>
            <p className="text-2xl font-bold">${pendingAmount.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
