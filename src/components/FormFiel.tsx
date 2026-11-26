interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  ...props
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-foreground font-mono">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-lg p-3 bg-white/10 border text-foreground font-mono"
        {...props}
      />
    </div>
  );
}