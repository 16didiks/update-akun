interface Props {
  label: string
  checked?: boolean
  required?: boolean
}

export default function CheckboxInput({ label, checked, required }: Props) {
  return (
    <div className="flex items-start gap-2 mb-4">

      <input
        type="checkbox"
        defaultChecked={checked}
        className="mt-1 accent-green-600"
      />

      <label className="text-sm text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

    </div>
  )
}