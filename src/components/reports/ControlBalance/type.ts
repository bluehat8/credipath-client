export interface TransactionData {
    type: string;
    icon: string;
    loanCode: string;
    client: string;
    loanAmount: string;
    operation: {
      amount: string;
      type: 'credit' | 'debit';
    };
    date: string;
  }
  
  export interface CategoryData {
    label: string;
    icon?: string;
    hasDropdown?: boolean;
  }

  export interface PendingPayments {
    id: string
    collaborator: string
    client: string
    amount: number
    installmentNumber: string
    dueDate: string
    status: string
  }