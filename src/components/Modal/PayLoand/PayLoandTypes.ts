export interface PaymentInfoProps {
    label: string;
    value: string;
    iconSrc?: string;
  }
  
  export interface InputFieldProps {
    label: string;
    className?: string;
    type?: "text" | "date" | "textarea";
  }