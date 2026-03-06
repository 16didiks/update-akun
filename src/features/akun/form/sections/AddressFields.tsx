import FormInput from '@/features/akun/components/FormInput'
import RadioInput from '../inputs/RadioInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField } from '../../types/akun.type'

interface Props {
  master: {
    statusRumah: MasterField[]
  }
}

export default function AddressFields({ master }: Props) {
  const statusRumahOptions =
    master.statusRumah?.map((item) => ({
      label: item.Description,
      value: item.Value,
    })) ?? []

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Alamat Identitas</h2>

      <FormInput label="Provinsi" placeholder="Jawa Timur" />

      <FormInput label="Kabupaten / Kota" placeholder="Kabupaten Jember" />

      <FormInput label="Kecamatan" placeholder="Kaliwates" />

      <FormInput label="Alamat Lengkap" placeholder="Jl. Kenari Indah No.23" />

      <SearchSelectInput label="Status Rumah" options={statusRumahOptions} />

      <RadioInput
        label="Alamat Tempat Tinggal"
        name="npwp_status"
        options={[
          { label: 'Sama Dengan Alamat Identitas', value: 'yes' },
          { label: 'Alamat Surat Menyurat', value: 'no' },
        ]}
      />

      <FormInput
        label="Alamat Surat Menyurat"
        placeholder="Alamat Sesuai Identitas"
      />
    </div>
  )
}
