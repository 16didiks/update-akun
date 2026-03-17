interface Props {
  label: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export default function DateInput({
  label,
  required = false,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-gray-600 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type="date"
        value={value ?? ''}
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
