import { loans } from "pages/ClientDetailsPage";
import { paymentData } from "pages/LoanDetails";
import { pendingPayments } from "data/ControlBalance";
import { PendingPayments } from "components/reports/ControlBalance/type";

// Cálculo de totales
export const totalAmount = loans.reduce((total, loan) => total + loan.amount, 0);
export const paidAmount = paymentData.filter(payment => payment.status === 'paid').reduce((total, payment) => total + payment.amountPaid, 0);
export const overdueAmount = paymentData.filter(payment => payment.status === 'overdue').reduce((total, payment) => total + payment.amountPaid, 0);
export const pendingAmount = totalAmount - paidAmount - overdueAmount;

// Porcentajes
export const paidPercentage = (paidAmount / totalAmount) * 100;
export const pendingPercentage = (pendingAmount / totalAmount) * 100;

//Capital
export const totalCapital = paymentData.reduce((total, payment) => total + payment.capitalBalance, 0)

//Interes
export const totalInterest = loans.reduce((total, loan) => total + (loan.amount * loan.interestRate), 0)
export const totalOverdueInterest = loans.filter(loan => loan.status === 'overdue').reduce((total, loan) => total + (loan.amount * loan.interestRate), 0)

//Lista de proximas cuotas a vencer
export const upcomingPayments = paymentData
.filter((p) => p.status === "pending" || p.status === "overdue")
.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

//Pending Payments
const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
}

export const filterPendingPaymentsForToday = (payments: PendingPayments[]) => {
    const today = getTodayDate()
    return payments.filter(payment => payment.dueDate === today)
}


export type GroupedPayments = Record<string, PendingPayments[]>
export const groupByCollaborator = (payments: PendingPayments[]): GroupedPayments => {
    return pendingPayments.reduce<GroupedPayments>((c, payment) => {
        if(!c[payment.collaborator]) {
            c[payment.collaborator] = []
        }
        c[payment.collaborator].push(payment)
        return c
    }, {})
}