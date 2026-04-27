type Theme = 'light' | 'dark'

interface Props {
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  value?: string
  theme: Theme
  onChange?: (value: string) => void
  disabled?: boolean
}

export default function TextInput({
  label,
  placeholder,
  type = 'text',
  required = false,
  value,
  onChange,
  disabled = false,
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
        disabled={disabled}
        className={`
          w-full
          rounded-lg
          border border-gray-300
          px-3 py-2
          text-sm
          bg-white
          focus:outline-none
          focus:ring-2 focus:ring-green-500
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `}
      />
    </div>
  )
}
