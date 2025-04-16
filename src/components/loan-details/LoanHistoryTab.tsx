import type * as React from "react"
import {
  Calendar,
  Download,
  FileText,
  Printer,
  Receipt,
  Share2,
  Eye,
  Trash2,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "components/components/ui/card"
import { Button } from "components/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/components/ui/dropdown-menu"
import { Separator } from "components/components/ui/separator"
import { Badge } from "components/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "components/components/ui/tooltip"

interface Payment {
  date: string
  type: string
  amount: number
  paidAmount: number
}

interface PaymentSummary {
  capitalPayment: number
  interestPayment: number
  lateInterestPayment: number
  totalPayments: number
  balance: number
  remainingCapital: number
  remainingInterest: number
  expectedTotalProfit: number
}

interface LoanHistoryTabProps {
  payments: Payment[]
  summary: PaymentSummary
}

export const LoanHistoryTab: React.FC<LoanHistoryTabProps> = ({ payments, summary }) => {
  const handlePrint = () => {
    window.print()
  }

  const handleShare = (payment: Payment) => {
    // Implement share functionality
  }

  const handleView = (payment: Payment) => {
    // Implement view functionality
  }

  const handleDelete = (payment: Payment) => {
    // Implement delete functionality
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date)
  }

  // Calculate payment progress percentage
  const totalAmount = summary.remainingCapital + summary.remainingInterest + summary.totalPayments
  const progressPercentage = Math.round((summary.totalPayments / totalAmount) * 100)

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white bg-clip-text">
            Estado de Cuenta
          </h3>
          <p className="text-sm text-muted-foreground">Resumen de pagos y balance del préstamo</p>
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  size="sm"
                  className="h-9 border-white-200"
                >
                  <Printer className="h-4 w-4 mr-2 text-green-400" />
                  <span className="hidden sm:inline">Imprimir</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Imprimir estado de cuenta</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-white-200"
                >
                  <Download className="h-4 w-4 mr-2 text-green-400" />
                  <span className="hidden sm:inline">Exportar</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Exportar a PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Progress Card */}
      <Card className="bg-gradient-to-r bg-secondary shadow-md overflow-hidden">
        {/* <div className="h-1 w-full border-t-4 border-t-primary "></div> */}
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Progreso del Préstamo</h3>
              <p className="text-sm text-muted-foreground">Has pagado el {progressPercentage}% del préstamo total</p>

              <div className="w-full bg-purple-200 h-3 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Total pagado</span>
                <span className="text-xl font-bold text-green-400">
                  {formatCurrency(summary.totalPayments)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Balance pendiente</span>
                <span className="text-xl font-bold">
                  {formatCurrency(summary.remainingCapital + summary.remainingInterest)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-secondary shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Receipt className="h-5 w-5 text-green-400" />
              Resumen de Abonos
            </CardTitle>
            <CardDescription>Desglose de los pagos realizados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Abono a capital</span>
                <span className="font-medium">{formatCurrency(summary.capitalPayment)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Abono a intereses</span>
                <span className="font-medium">{formatCurrency(summary.interestPayment)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Abono interés por mora</span>
                <span className="font-medium">{formatCurrency(summary.lateInterestPayment)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center">
                <span className="font-medium">Total de abonos</span>
                <span className="font-bold text-green-400">
                  {formatCurrency(summary.totalPayments)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white-100 shadow-md overflow-hidden bg-secondary">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-400" />
              Balance Pendiente
            </CardTitle>
            <CardDescription>Montos pendientes por pagar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Capital por cobrar</span>
                <span className="font-medium">{formatCurrency(summary.remainingCapital)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Intereses por cobrar</span>
                <span className="font-medium">{formatCurrency(summary.remainingInterest)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center">
                <span className="font-medium">Ganancia total esperada</span>
                <span className="font-bold text-green-400">
                  {formatCurrency(summary.expectedTotalProfit)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


       <Card className="bg-secondary">
         <CardHeader className="pb-2">
           <CardTitle className="text-lg flex items-center gap-2">
             <Calendar className="h-5 w-5 text-primary" />
             Historial de Pagos
           </CardTitle>
           <CardDescription>Registro de todos los pagos realizados</CardDescription>
         </CardHeader>
         <CardContent>
           <div className="space-y-4">
             {payments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No hay pagos registrados</div>
            ) : (
              payments.map((payment, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card  transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{formatDate(payment.date)}</p>
                        <Badge variant="outline" className="text-xs">
                          {payment.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground mr-1">Monto:</span>
                          <span>{formatCurrency(payment.amount)}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground mr-1">Pagado:</span>
                          <span className="text-green-600 font-medium">{formatCurrency(payment.paidAmount)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 sm:mt-0">
                    <Button variant="outline" size="sm" className="h-8" onClick={() => handleView(payment)}>
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      <span>Ver</span>
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => handleShare(payment)}>
                          <Share2 className="h-4 w-4 mr-2" />
                          <span>Compartir</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handlePrint}>
                          <Printer className="h-4 w-4 mr-2" />
                          <span>Imprimir</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleDelete(payment)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          <span>Eliminar</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pt-2 pb-6">
          <Button variant="outline" className="gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Ver historial completo
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
