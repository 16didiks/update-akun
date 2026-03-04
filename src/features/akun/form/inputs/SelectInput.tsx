interface Option {
  label: string
  value: string
}

interface Props {
  label: string
  options: Option[]
}

export default function SelectInput({ label, options }: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600 dark:text-gray-300">
        {label}
      </label>

      <select
        className="
          w-full
          rounded-lg
          border border-gray-300 dark:border-gray-600
          px-3 py-2
          text-sm
          bg-white dark:bg-gray-800
          focus:outline-none
          focus:ring-2 focus:ring-green-500
        "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}