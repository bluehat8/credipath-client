"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "components/components/ui/table"
import { Badge } from "components/components/ui/badge"
import { Button } from "components/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/components/ui/tabs"

// Mock data - replace with actual data
const pendingPayments = [
  {
    id: "1",
    collaborator: "Juan Pérez",
    client: "Cliente A",
    amount: 550,
    installmentNumber: 1,
    dueDate: "2025-03-10",
    status: "pending",
  },
  {
    id: "2",
    collaborator: "Juan Pérez",
    client: "Cliente B",
    amount: 545,
    installmentNumber: 2,
    dueDate: "2025-03-05",
    status: "overdue",
  },
  {
    id: "3",
    collaborator: "María López",
    client: "Cliente C",
    amount: 540,
    installmentNumber: 3,
    dueDate: "2025-03-10",
    status: "pending",
  },
]

// Group payments by collaborator
const groupByCollaborator = (payments: any[]) => {
  return payments.reduce((acc, payment) => {
    const { collaborator } = payment
    if (!acc[collaborator]) {
      acc[collaborator] = []
    }
    acc[collaborator].push(payment)
    return acc
  }, {})
}

type PendingPaymentsProps = {
  className?: string
}

export default function PendingPayments({ className }: PendingPaymentsProps) {
  const [groupedPayments, setGroupedPayments] = useState<Record<string, any[]>>({})

  useEffect(() => {
    const grouped = groupByCollaborator(pendingPayments)
    setGroupedPayments(grouped)
  }, [])

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0] // Format: YYYY-MM-DD
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Cuotas pendientes para hoy</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="bg-secondary border-green-native">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-gradient data-[state=active]:text-white">
              Todos
            </TabsTrigger>
            {Object.keys(groupedPayments).map((collaborator) => (
              <TabsTrigger
                key={collaborator}
                value={collaborator}
                className="data-[state=active]:bg-green-gradient data-[state=active]:text-white"
              >
                {collaborator}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="rounded-md border border-green-native-border">
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow>
                    <TableHead>Colaborador</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Número de cuota</TableHead>
                    <TableHead>Fecha de vencimiento</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingPayments.map((payment) => (
                    <TableRow key={payment.id} className="hover:bg-green-native-light/10">
                      <TableCell className="font-medium">{payment.collaborator}</TableCell>
                      <TableCell>{payment.client}</TableCell>
                      <TableCell>${payment.amount.toLocaleString()}</TableCell>
                      <TableCell>{payment.installmentNumber}</TableCell>
                      <TableCell>{new Date(payment.dueDate).toLocaleDateString("es-ES")}</TableCell>
                      <TableCell>
                        <Badge
                          variant={payment.status === "overdue" ? "destructive" : "outline"}
                          className={payment.status === "overdue" ? "" : "border-green-native-border text-green-native"}
                        >
                          {payment.status === "overdue" ? "Vencida" : "Pendiente"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {payment.status === "pending" && payment.dueDate === getTodayDate() ? (
                          <Button size="sm" className="bg-green-gradient hover:bg-green-native-dark">
                            Ir a pagar
                          </Button>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {Object.entries(groupedPayments).map(([collaborator, payments]) => (
            <TabsContent key={collaborator} value={collaborator} className="space-y-4">
              <div className="rounded-md border border-green-native-border">
                <Table>
                  <TableHeader className="bg-secondary/50">
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Monto</TableHead>
                      <TableHead>Número de cuota</TableHead>
                      <TableHead>Fecha de vencimiento</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id} className="hover:bg-green-native-light/10">
                        <TableCell className="font-medium">{payment.client}</TableCell>
                        <TableCell>${payment.amount.toLocaleString()}</TableCell>
                        <TableCell>{payment.installmentNumber}</TableCell>
                        <TableCell>{new Date(payment.dueDate).toLocaleDateString("es-ES")}</TableCell>
                        <TableCell>
                          <Badge
                            variant={payment.status === "overdue" ? "destructive" : "outline"}
                            className={
                              payment.status === "overdue" ? "" : "border-green-native-border text-green-native"
                            }
                          >
                            {payment.status === "overdue" ? "Vencida" : "Pendiente"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {payment.status === "pending" && payment.dueDate === getTodayDate() ? (
                            <Button size="sm" className="bg-green-gradient hover:bg-green-native-dark">
                              Ir a pagar
                            </Button>
                          ) : null}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

