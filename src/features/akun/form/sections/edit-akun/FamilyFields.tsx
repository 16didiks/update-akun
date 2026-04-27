import TextInput from '../../inputs/TextInput'
import SearchSelectInput from '../../inputs/SearchSelectInput'
import { MasterField, UserUpdate } from '../../../types/akun.type'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  master: {
    statusRumah: MasterField[]
  }

  data: UserUpdate | null

  form: FormState

  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function FamilyFields({ master, data, form, onChange }: Props) {
  const statusRumahOptions =
    master.statusRumah?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">
        Data Pasangan / Orang Tua
      </h2>

      <SearchSelectInput
        label="Status Rumah"
        options={statusRumahOptions}
        value={(form.StatusRumah as string) || data?.StatusRumah || ''}
        onChange={(v) => onChange('StatusRumah', v)}
      />

      <TextInput
        label="Nama Lengkap"
        placeholder=""
        value={
          (form.KeluargaNamaLengkap as string) ||
          data?.KeluargaNamaLengkap ||
          ''
        }
        onChange={(v) => onChange('KeluargaNamaLengkap', v)}
      />

      <TextInput
        label="Nomor Handphone"
        placeholder=""
        value={
          (form.KeluargaNoHandphone as string) ||
          data?.KeluargaNoHandphone ||
          ''
        }
        onChange={(v) => onChange('KeluargaNoHandphone', v)}
      />
    </div>
  )
}
