interface Option {
  label: string
  value: string
}

interface Props {
  label: string;
  name: string;
  options: Option[];
  required?: boolean;
}

export default function RadioInput({ label, options }: Props) {
  return (
    <div className="space-y-2 mb-6">
      <p className="text-sm">{label}</p>

      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm">
            <input type="radio" name={label} value={opt.value} />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}