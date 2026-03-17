interface Props {
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export default function TextInput({
  label,
  placeholder,
  type = 'text',
  required = false,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-5">
      <label className="block text-sm mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type={type}
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          w-full
          rounded-lg
          border border-gray-300
          px-3 py-2
          text-sm
          bg-white
          focus:outline-none
          focus:ring-2 focus:ring-green-500
        "
      />
    </div>
  )
}
