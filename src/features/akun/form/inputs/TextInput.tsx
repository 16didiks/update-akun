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
  theme,
}: Props) {
  const isDark = theme === 'dark'

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
  px-3 py-2
  text-sm
  focus:outline-none
  focus:ring-2 focus:ring-green-500

  ${
    theme === 'dark'
      ? disabled
        ? 'bg-[#1A1A1A] text-gray-400 border border-white/5 cursor-not-allowed'
        : 'bg-[#111] text-white border border-white/10 placeholder:text-gray-500'
      : disabled
        ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
        : 'bg-white text-gray-900 border border-gray-300 placeholder:text-gray-400'
  }
`}
      />
    </div>
  )
}
