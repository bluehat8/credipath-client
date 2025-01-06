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
