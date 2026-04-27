import TextInput from '../../inputs/TextInput'
import SearchSelectInput from '../../inputs/SearchSelectInput'
import { MasterField, UserUpdate } from '../../../types/akun.type'
import DateInput from '../../inputs/DateInput'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  master: {
    pemilikAsset: MasterField[]
    jenisKelamin: MasterField[]
    jenisPenerimaManfaat: MasterField[]
    hubunganBo: MasterField[]
    statusPerkawinan: MasterField[]
  }

  data: UserUpdate | null

  form: FormState

  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function BeneficialOwnerFields({
  master,
  data,
  form,
  onChange,
}: Props) {
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

  const dataBO = data?.BeneficialOwner || {}

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">
        Informasi Beneficial Owner
      </h2>

      <SearchSelectInput
        label="Pemilik Manfaat"
        options={pemilikAssetOptions}
        value={
          (form.PemilikAsset as string) ||
          (data?.PemilikAsset !== undefined ? String(data.PemilikAsset) : '')
        }
        onChange={(v) => onChange('LamaBekerjaBulan', v)}
      />

      <SearchSelectInput
        label="Jenis Pemilik Manfaat"
        options={jenisPenerimaManfaatOptions}
        value={
          (form.PenerimaManfaat as string) ||
          (data?.PenerimaManfaat !== undefined
            ? String(data.PenerimaManfaat)
            : '')
        }
        onChange={(v) => onChange('PenerimaManfaat', v)}
      />

      <SearchSelectInput
        label="Hubungan Dengan Pemilik Manfaat"
        options={hubunganBoOptions}
        value={
          (form.StatusHubunganKeluarga as string) ||
          (data?.StatusHubunganKeluarga !== undefined
            ? String(data.StatusHubunganKeluarga)
            : '')
        }
        onChange={(v) => onChange('StatusHubunganKeluarga', v)}
      />

      <TextInput
        label="No. E-KTP"
        placeholder=""
        value={(form.NoIdentitas as string) || dataBO?.IdentityNumber || ''}
        onChange={(v) => onChange('NoIdentitas', v)}
      />

      <TextInput
        label="No. NPWP"
        placeholder=""
        value={(form.Npwp as string) || dataBO?.Npwp || ''}
        onChange={(v) => onChange('Npwp', v)}
      />

      <TextInput
        label="Nama lengkap sesuai KTP"
        placeholder=""
        value={(form.NamaLengkap as string) || dataBO?.Fullname || ''}
        onChange={(v) => onChange('NamaLengkap', v)}
      />

      <TextInput
        label="Email"
        placeholder=""
        value={(form.email as string) || dataBO?.Email || ''}
        onChange={(v) => onChange('email', v)}
      />

      <TextInput
        label="Nomor Handphone"
        placeholder=""
        value={(form.Hp as string) || dataBO?.Phone_number || ''}
        onChange={(v) => onChange('Hp', v)}
      />

      <TextInput
        label="Tempat Lahir"
        placeholder=""
        value={(form.TempatLahir as string) || dataBO?.BirthPlace || ''}
        onChange={(v) => onChange('TempatLahir', v)}
      />

      <DateInput
        label="Tanggal Lahir"
        value={(form.TanggalLahir as string) || dataBO?.BirthDate || ''}
        onChange={(v) => onChange('BirthDate', v)}
      />

      <SearchSelectInput
        label="Jenis Kelamin"
        options={genderOptions}
        value={
          (form.JenisKelamin as string) ||
          (data?.JenisKelamin !== undefined ? String(dataBO?.Gender) : '')
        }
        onChange={(v) => onChange('JenisKelamin', v)}
      />

      <SearchSelectInput
        label="Status Perkawinan"
        options={statusPerkawinanOptions}
        value={
          (form.StatusKawin as string) ||
          (data?.StatusKawin !== undefined ? String(dataBO?.MaritalStatus) : '')
        }
        onChange={(v) => onChange('StatusKawin', v)}
      />

      <TextInput
        label="Kartu Keluarga"
        placeholder=""
        value={
          (form.KeluargaNoIdentitas as string) ||
          data?.KeluargaNoIdentitas ||
          ''
        }
        onChange={(v) => onChange('KeluargaNoIdentitas', v)}
      />
    </div>
  )
}
