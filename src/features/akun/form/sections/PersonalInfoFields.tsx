import FormInput from '@/features/akun/components/FormInput'
import DateInput from '../inputs/DateInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField } from '../../types/akun.type'

interface Props {
  master: {
    jenisKelamin: MasterField[]
    agama: MasterField[]
    statusPerkawinan: MasterField[]
    alasanNpwp: MasterField[]
  }
}

export default function PersonalInfoFields({ master }: Props) {
  const genderOptions =
    master.jenisKelamin?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const agamaOptions =
    master.agama?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const statusPerkawinanOptions =
    master.statusPerkawinan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const alasanNpwpOptions =
    master.alasanNpwp?.map((item) => ({
      label: item.Description,
      value: item.Value,
    })) ?? []

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold">Perubahan Data Pribadi</h2>
      <label>Lengkapi data diri anda sesuai KTP.</label>
      <br />
      <br />

      <FormInput
        label="Kode Referal / Kode Sales (Jika ada)"
        placeholder="12345"
      />

      <FormInput label="Email" placeholder="email@gmail.com" />

      <FormInput label="Nomor Handphone" placeholder="0852.xxxx.xxxx" />

      <FormInput label="No. E-KTP" placeholder="1712xxxxxxxxxx4" />

      <FormInput label="Nama lengkap sesuai KTP" placeholder="Jhon" required />

      <SearchSelectInput
        label="Sudah Punya NPWP?"
        options={alasanNpwpOptions}
      />

      <FormInput label="No. NPWP" placeholder="456.646.xxx.xx.xxx" required />

      <FormInput label="Tempat Lahir" placeholder="Jakarta" required />

      <DateInput label="Tanggal Lahir" required />

      <SearchSelectInput label="Jenis Kelamin" options={genderOptions} />

      <SearchSelectInput label="Agama" required options={agamaOptions} />

      <SearchSelectInput
        label="Status Perkawinan"
        required
        options={statusPerkawinanOptions}
      />

      <FormInput label="Nama Ibu Kandung" placeholder="Mora" required />

      <SearchSelectInput
        label="Pendidikan"
        required
        options={[
          { label: 'SD', value: 'w' },
          { label: 'SMP ', value: 'x' },
          { label: 'SMA/SMk ', value: 'r' },
          { label: 'Sarjana ', value: 't' },
        ]}
      />
    </div>
  )
}
