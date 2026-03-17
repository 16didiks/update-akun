import TextInput from '../inputs/TextInput'
import DateInput from '../inputs/DateInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField, UserUpdate } from '../../types/akun.type'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  master: {
    jenisKelamin: MasterField[]
    agama: MasterField[]
    statusPerkawinan: MasterField[]
    alasanNpwp: MasterField[]
    pendidikan: MasterField[]
  }

  data: UserUpdate | null

  form: FormState

  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function PersonalInfoFields({
  master,
  data,
  form,
  onChange,
}: Props) {
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

  const pendidikanOptions =
    master.pendidikan?.map((item) => ({
      label: item.Description,
      value: item.Value,
    })) ?? []

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold">Perubahan Data Pribadi</h2>
      <label>Lengkapi data diri anda sesuai KTP.</label>
      <br />
      <br />

      <TextInput
        label="Kode Referal / Kode Sales (Jika ada)"
        placeholder=""
        value={(form.ReferralCode as string) || data?.ReferralCode || ''}
        onChange={(v) => onChange('ReferralCode', v)}
      />

      <TextInput
        label="Email"
        placeholder=""
        value={(form.AlamatEmail as string) || data?.AlamatEmail || ''}
        onChange={(v) => onChange('AlamatEmail', v)}
      />

      <TextInput
        label="Nomor Handphone"
        placeholder=""
        value={(form.NoHandphone as string) || data?.NoHandphone || ''}
        onChange={(v) => onChange('NoHandphone', v)}
      />

      <TextInput
        label="No. E-KTP"
        placeholder=""
        value={(form.NoIdentitas as string) || data?.NoIdentitas || ''}
        onChange={(v) => onChange('NoIdentitas', v)}
      />

      <TextInput
        label="Nama lengkap sesuai KTP"
        placeholder=""
        required
        value={(form.NamaLengkap as string) || data?.NamaLengkap || ''}
        onChange={(v) => onChange('NamaLengkap', v)}
      />

      <SearchSelectInput
        label="Sudah Punya NPWP?"
        options={alasanNpwpOptions}
        value={(form.AlasanNpwp as string) || data?.AlasanNpwp || ''}
        onChange={(v) => onChange('AlasanNpwp', v)}
      />

      <TextInput
        label="No. NPWP"
        placeholder=""
        value={(form.npwp as string) || data?.Npwp || ''}
        onChange={(v) => onChange('npwp', v)}
      />

      <TextInput
        label="Tempat Lahir"
        placeholder=""
        required
        value={(form.TempatLahir as string) || data?.TempatLahir || ''}
        onChange={(v) => onChange('TempatLahir', v)}
      />

      <DateInput
        label="Tanggal Lahir"
        required
        value={(form.TanggalLahir as string) || data?.TanggalLahir || ''}
        onChange={(v) => onChange('TanggalLahir', v)}
      />

      <SearchSelectInput
        label="Jenis Kelamin"
        options={genderOptions}
        value={(form.JenisKelamin as string) || data?.JenisKelamin || ''}
        onChange={(v) => onChange('JenisKelamin', v)}
      />

      <SearchSelectInput
        label="Agama"
        required
        options={agamaOptions}
        value={(form.Agama as string) || data?.Agama || ''}
        onChange={(v) => onChange('Agama', v)}
      />

      <SearchSelectInput
        label="Status Perkawinan"
        required
        options={statusPerkawinanOptions}
        value={(form.StatusKawin as string) || data?.StatusKawin || ''}
        onChange={(v) => onChange('StatusKawin', v)}
      />

      <TextInput
        label="Nama Ibu Kandung"
        placeholder=""
        required
        value={(form.NamaLengkapIbu as string) || data?.NamaLengkapIbu || ''}
        onChange={(v) => onChange('NamaLengkapIbu', v)}
      />

      <SearchSelectInput
        label="Pendidikan"
        options={pendidikanOptions}
        value={
          (form.PendidikanTerakhir as string) || data?.PendidikanTerakhir || ''
        }
        onChange={(v) => onChange('PendidikanTerakhir', v)}
      />
    </div>
  )
}
