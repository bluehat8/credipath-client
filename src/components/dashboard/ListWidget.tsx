import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "components/components/ui/table";
import { upcomingPayments } from "helpers";

  export default function ListWidget() {
  
    return (
      <div className="mt-3 p-5 bg-white rounded-lg">
        <h1 className="text-gray-700 font-bold mb-2">Próximas cuotas a vencer</h1>
        <Table className="border border-gray-200 shadow-md rounded-lg bg-white">
            <TableHeader className="bg-gray-100">
            <TableRow>
                <TableHead className="w-[120px]">Cuota</TableHead>
                <TableHead>Fecha de Vencimiento</TableHead>
                <TableHead className="text-right">Capital</TableHead>
                <TableHead className="text-right">Interés</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-center">Estado</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {upcomingPayments.map(payment => (
                <TableRow key={payment.paymentNumber} className="hover:bg-gray-50">
                <TableCell className="font-medium">{payment.paymentNumber}</TableCell>
                <TableCell>{payment.dueDate}</TableCell>
                <TableCell className="text-right">${payment.capitalBalance.toFixed(2)}</TableCell>
                <TableCell className="text-right">${payment.interestBalance.toFixed(2)}</TableCell>
                <TableCell className="text-right font-semibold">
                    ${(payment.capitalBalance + payment.interestBalance).toFixed(2)}
                </TableCell>
                <TableCell
                    className={`text-center font-medium ${
                    payment.status === "overdue" ? "text-red-500" : "text-yellow-500"
                    }`}
                >
                    {payment.status === "overdue" ? "Vencida" : "Pendiente"}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
            <TableFooter className="bg-gray-100">
            <TableRow>
                <TableCell colSpan={4} className="font-semibold">Total</TableCell>
                <TableCell className="text-right font-bold">
                ${upcomingPayments
                    .reduce((sum, p) => sum + p.capitalBalance + p.interestBalance, 0)
                    .toFixed(2)}
                </TableCell>
                <TableCell />
            </TableRow>
            </TableFooter>
        </Table>
      </div>
    );
  }
  