export interface InputFieldPropsClient {
    label: string;
    placeholder: string;
    width?: string;
  }
  
  export interface IconButtonProps {
    icon: string;
    alt: string;
    onClick?: () => void;
  }
  
  export interface ClientFormData {
    name: string;
    lastname: string;
    route: string;
    note: string;
    direction: string;
    cellphone: string;
    email: string;
    landlinePhone: string;
  }