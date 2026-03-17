interface Props {
  label: string
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export default function FormInput({
  label,
  placeholder,
  required,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-5">
      <label className="block text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          w-full
          bg-white
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          text-gray-900
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
          focus:border-green-500
        "
      />
    </div>
  )
}
