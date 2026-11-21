interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  placeholder
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-white font-mono">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-lg p-3 bg-white/10 border border-white/20 text-white font-mono"
      />
    </div>
  );
}