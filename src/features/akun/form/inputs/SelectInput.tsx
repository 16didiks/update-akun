interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  options: Option[];
  required?: boolean;
}

export default function SelectInput({ label, options, required }: Props) {
  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-3
          py-2
          text-sm
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
        "
      >
        <option value="" disabled>Pilih</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}