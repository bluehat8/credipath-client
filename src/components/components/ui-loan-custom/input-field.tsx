import { cn } from "../../lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, type = "text", className, ...props }) => {
  const inputClasses = cn(
    "w-full px-4 py-2 bg-accent/90 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
    className
  );

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">{label}</label>
      {type === "textarea" ? (
        <textarea className={inputClasses} rows={4} {...props} />
      ) : (
        <input type={type} className={inputClasses} {...props} />
      )}
    </div>
  );
};