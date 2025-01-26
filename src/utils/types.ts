export interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: { target: { id: string; value: string } }) => void;
  placeholder?: string;
  height?: string;
  options?: string[]; // Opcional, solo para selects
}

  
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface CollaboratorCardProps {
    name: string;
    phone: string;
    email: string;
    onEdit: () => void;
    onDelete: () => void;
  }
  
export interface SidebarItemProps {
    icon: string;
    text: string;
    isActive?: boolean;
}


export interface LoanFormData {
  value: string;
  interestType: string;
  interest: string;
  payment: string;
  loanDate: string;
  note: string;
}



export interface SidebarItemProps {
    icon: string;
    text: string;
    isActive?: boolean;
}
  
export interface ClientCardProps {
    name: string;
    phone?: string;
    countryCode?: string;
    email: string;
    profileImage?: string;
}
