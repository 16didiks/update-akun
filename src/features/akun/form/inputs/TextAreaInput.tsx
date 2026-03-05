interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function TextAreaInput({
  label,
  placeholder,
  required,
}: Props) {
  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <textarea
        rows={3}
        placeholder={placeholder}
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-3 py-2
          text-sm
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
        "
      />
    </div>
  );
}