interface Props {
  label: string
  placeholder?: string
  type?: string
}

export default function TextInput({
  label,
  placeholder,
  type = "text",
}: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600 dark:text-gray-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
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
      />
    </div>
  )
}