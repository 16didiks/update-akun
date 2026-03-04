interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormInput({ label, placeholder, required }: Props) {
  return (
    <div className="mb-5">
      <label className="block text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        placeholder={placeholder}
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
  );
}
