export interface LoanPaymentCardProps {
    paymentNumber: string;
    capitalBalance: number;
    totalBalance: number;
    interestRate: number;
    amountPaid: number;
    interestBalance: number;
    dueDate: string;
    status: string;
  }
  
  export interface SidebarItemProps {
    icon: string;
    text: string;
    isActive?: boolean;
  }
  
  export interface LoanHeaderProps {
    name: string;
    amount: number;
    interestRate: number;
    frequency: string;
  }