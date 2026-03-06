"use client";

import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
  required?: boolean;
}

export default function SelectInput({
  label,
  options,
  isMulti = false,
  placeholder = "Pilih...",
  required = false,
}: Props) {
  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <Select
        options={options}
        isMulti={isMulti}
        placeholder={placeholder}
        className="text-sm"
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: "40px",
            borderRadius: "0.5rem",
            borderColor: state.isFocused ? "#16a34a" : "#d1d5db",
            boxShadow: state.isFocused
              ? "0 0 0 2px rgba(22,163,74,0.3)"
              : "none",
            "&:hover": {
              borderColor: "#16a34a",
            },
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "2px 8px",
          }),
          multiValue: (base) => ({
            ...base,
            backgroundColor: "#dcfce7",
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: "#166534",
            fontSize: "12px",
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: "#166534",
            ":hover": {
              backgroundColor: "#bbf7d0",
              color: "#14532d",
            },
          }),
          menu: (base) => ({
            ...base,
            zIndex: 50,
          }),
        }}
      />
    </div>
  );
}