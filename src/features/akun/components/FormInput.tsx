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
        className="w-full bg-neutral-800 text-white px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
