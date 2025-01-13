export interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: string;
    id: string;
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

export interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  height?: string;
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
