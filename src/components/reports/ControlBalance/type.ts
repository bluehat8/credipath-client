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