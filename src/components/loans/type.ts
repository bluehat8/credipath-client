export interface LoanCardProps {
    amount: number;
    installments: number;
    interestRate: number;
    date: string;
    interestType: string;
    note: string;
    status: string;
    imageUrl: string;
  }
  
  export interface SidebarItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
  }
  
  export interface ClientHeaderProps {
    name: string;
    code: string;
  }