interface Props {
  label: string
}

export default function DateInput({ label }: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600 dark:text-gray-300">
        {label}
      </label>

      <input
        type="date"
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