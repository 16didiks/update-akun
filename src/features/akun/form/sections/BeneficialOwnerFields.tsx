import FormInput from '@/features/akun/components/FormInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField } from '../../types/akun.type'

interface Props {
  master: {
    pemilikAsset: MasterField[]
    jenisKelamin: MasterField[]
    jenisPenerimaManfaat: MasterField[]
    hubunganBo: MasterField[]
    statusPerkawinan: MasterField[]
  }
}

export default function BeneficialOwnerFields({ master }: Props) {
  const pemilikAssetOptions =
    master.pemilikAsset?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const genderOptions =
    master.jenisKelamin?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const jenisPenerimaManfaatOptions =
    master.jenisPenerimaManfaat?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const hubunganBoOptions =
    master.hubunganBo?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const statusPerkawinanOptions =
    master.statusPerkawinan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">
        Informasi Beneficial Owner
      </h2>

      <SearchSelectInput
        label="Pemilik Manfaat"
        options={pemilikAssetOptions}
      />

      <SearchSelectInput
        label="Jenis Pemilik Manfaat"
        options={jenisPenerimaManfaatOptions}
      />

      <SearchSelectInput
        label="Hubungan Dengan Pemilik Manfaat"
        options={hubunganBoOptions}
      />

      <FormInput label="No. E-KTP" placeholder="3171xxxxxxxxxxxx" />

      <FormInput label="No. NPWP" placeholder="12.345.678.9-012.000" />

      <FormInput label="Nama lengkap sesuai KTP" placeholder="Nama lengkap" />

      <FormInput label="Email" placeholder="email@gmail.com" />

      <FormInput label="Nomor Handphone" placeholder="0812xxxxxxx" />

      <FormInput label="Tempat Lahir" placeholder="Jakarta" />

      <FormInput label="Tanggal Lahir" placeholder="YYYY-MM-DD" />

      <SearchSelectInput label="Jenis Kelamin" options={genderOptions} />

      <SearchSelectInput
        label="Status Perkawinan"
        options={statusPerkawinanOptions}
      />

      <FormInput label="Kartu Keluarga" placeholder="Upload dokumen" />
    </div>
  )
}
