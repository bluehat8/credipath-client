import * as React from "react";
import { Printer, Share, Eye, Trash2, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card";
import { Button } from "components/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/components/ui/dropdown-menu";
import { Separator } from "components/components/ui/separator";

interface Payment {
  date: string;
  type: string;
  amount: number;
  paidAmount: number;
}

interface PaymentSummary {
  capitalPayment: number;
  interestPayment: number;
  lateInterestPayment: number;
  totalPayments: number;
  balance: number;
  remainingCapital: number;
  remainingInterest: number;
  expectedTotalProfit: number;
}

interface LoanHistoryTabProps {
  payments: Payment[];
  summary: PaymentSummary;
}

export const LoanHistoryTab: React.FC<LoanHistoryTabProps> = ({ payments, summary }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = (payment: Payment) => {
    // Implement share functionality
  };

  const handleView = (payment: Payment) => {
    // Implement view functionality
  };

  const handleDelete = (payment: Payment) => {
    // Implement delete functionality
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-end">
        <Button onClick={handlePrint} variant="outline" className="gap-2">
          <Printer className="h-4 w-4" />
          <span>Imprimir Estado de Cuenta</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resumen de Abonos</CardTitle>
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
                <span className="font-bold text-primary">
                  {formatCurrency(summary.totalPayments)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Balance</CardTitle>
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
                <span className="font-bold text-primary">
                  {formatCurrency(summary.expectedTotalProfit)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Historial de Pagos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Fecha de pago</p>
                      <p className="font-medium">{payment.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Abono a</p>
                      <p className="font-medium">{payment.type}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interés y capital</p>
                    <p className="font-medium">{formatCurrency(payment.amount)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 mt-4 sm:mt-0">
                  <div>
                    <p className="text-sm text-muted-foreground">Abonado</p>
                    <p className="font-medium text-green-500">
                      {formatCurrency(payment.paidAmount)}
                    </p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => handleShare(payment)}>
                        <Share className="h-4 w-4 mr-2" />
                        <span>Imprimir/Compartir</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleView(payment)}>
                        <Eye className="h-4 w-4 mr-2" />
                        <span>Ver</span>
                      </DropdownMenuItem>
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};