import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "components/components/ui/table"
import { Badge } from "components/components/ui/badge"

// Mock data - replace with actual data
const upcomingPayments = [
  {
    client: "Cliente A",
    paymentNumber: 1,
    dueDate: "2025-03-15",
    capitalBalance: 500,
    interestBalance: 50,
    status: "pending",
  },
  {
    client: "Cliente B",
    paymentNumber: 2,
    dueDate: "2025-03-22",
    capitalBalance: 500,
    interestBalance: 45,
    status: "pending",
  },
  {
    client: "Cliente A",
    paymentNumber: 3,
    dueDate: "2025-02-28",
    capitalBalance: 500,
    interestBalance: 40,
    status: "overdue",
  },
]

type ListWidgetProps = {
  className?: string
}

export default function ListWidget({ className }: ListWidgetProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Próximas cuotas a vencer</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Cuota</TableHead>
              <TableHead>Fecha de Vencimiento</TableHead>
              <TableHead className="text-right">Capital</TableHead>
              <TableHead className="text-right">Interés</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-center">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingPayments.map((payment) => (
              <TableRow key={payment.paymentNumber}>
                <TableCell className="font-medium">{payment.client}</TableCell>
                <TableCell className="font-medium">{payment.paymentNumber}</TableCell>
                <TableCell>{new Date(payment.dueDate).toLocaleDateString("es-ES")}</TableCell>
                <TableCell className="text-right">${payment.capitalBalance.toLocaleString()}</TableCell>
                <TableCell className="text-right">${payment.interestBalance.toLocaleString()}</TableCell>
                <TableCell className="text-right font-semibold">
                  ${(payment.capitalBalance + payment.interestBalance).toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={payment.status === "overdue" ? "destructive" : "outline"}
                    className={payment.status === "overdue" ? "" : "border-green-native-border text-green-native"}
                  >
                    {payment.status === "overdue" ? "Vencida" : "Pendiente"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="font-semibold">
                Total
              </TableCell>
              <TableCell className="text-right font-bold">
                ${upcomingPayments.reduce((sum, p) => sum + p.capitalBalance + p.interestBalance, 0).toLocaleString()}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  )
}


