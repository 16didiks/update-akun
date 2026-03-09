import CheckboxInput from '../inputs/CheckboxInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField } from '../../types/akun.type'

interface Props {
  master: {
    bankAkhirNew: MasterField[]
  }
}

export default function BankAkhirFields({ master }: Props) {
  const bankAkhirNewOptions =
    master.bankAkhirNew?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h2 className="text-base font-semibold mb-4">
        Perubahan Rekening Bank Akhir
      </h2>

      <SearchSelectInput
        label="Data Rekening Bank Akhir"
        required
        options={bankAkhirNewOptions}
      />

      <p className="text-yellow-500 text-xs mt-4 leading-relaxed">
        * Kolom input Perubahan Data yang menggunakan tanda * wajib menerima
        verifikasi via video call oleh Customer Service. Pastikan Handphone Anda
        aktif
      </p>

      <div className="mt-4">
        <CheckboxInput label="Update Data Ke semua akun" />
      </div>
    </div>
  )
}
