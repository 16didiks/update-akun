'use client'

import Select, { SingleValue, MultiValue } from 'react-select'

interface Option {
  value: string
  label: string
}

interface Props {
  label: string
  options: Option[]
  isMulti?: boolean
  placeholder?: string
  required?: boolean
  onChange?: (value: string | string[]) => void
}

export default function SearchSelectInput({
  label,
  options,
  isMulti = false,
  placeholder = 'Pilih...',
  required = false,
  onChange,
}: Props) {
  const handleChange = (selected: SingleValue<Option> | MultiValue<Option>) => {
    if (!onChange) return

    if (isMulti) {
      const multi = selected as MultiValue<Option>
      const values = multi.map((item) => item.value)
      onChange(values)
      return
    }

    const single = selected as SingleValue<Option>
    onChange(single?.value ?? '')
  }

  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <Select<Option, boolean>
        instanceId={label}
        options={options}
        isMulti={isMulti}
        placeholder={placeholder}
        className="text-sm"
        onChange={handleChange}
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: '40px',
            borderRadius: '0.5rem',
            borderColor: state.isFocused ? '#16a34a' : '#d1d5db',
            boxShadow: state.isFocused
              ? '0 0 0 2px rgba(22,163,74,0.3)'
              : 'none',
            '&:hover': {
              borderColor: '#16a34a',
            },
          }),
          menu: (base) => ({
            ...base,
            zIndex: 50,
          }),
        }}
      />
    </div>
  )
}
