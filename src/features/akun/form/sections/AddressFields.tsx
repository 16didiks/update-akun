import { useEffect } from 'react'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField, UserUpdate } from '../../types/akun.type'
import { useAddress } from '../../hooks/useAddress'
import TextAreaInput from '../inputs/TextAreaInput'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  master: {
    statusRumah: MasterField[]
    alamatSurat: MasterField[]
  }

  data: UserUpdate | null

  form: FormState

  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function AddressFields({ master, data, form, onChange }: Props) {
  // ===== MASTER OPTIONS =====

  const statusRumahOptions =
    master.statusRumah?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const alamatSuratOptions =
    master.alamatSurat?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  // ===== ADDRESS OPTIONS =====

  const {
    provinsi,
    kotaKab,
    kecamatan,
    kelurahan,
    fetchKotaKab,
    fetchKecamatan,
    fetchKelurahan,
  } = useAddress()

  const provinsiOptions =
    provinsi?.map((item) => ({
      label: item.Nama,
      value: item.Id,
    })) ?? []

  const kotaOptions =
    kotaKab?.map((item) => ({
      label: item.Nama,
      value: item.Id,
    })) ?? []

  const kecamatanOptions =
    kecamatan?.map((item) => ({
      label: item.Nama,
      value: item.Id,
    })) ?? []

  const kelurahanOptions =
    kelurahan?.map((item) => ({
      label: item.Nama,
      value: item.Id,
    })) ?? []

  // ===== API ADDRESS =====

  const alamat = data?.AlamatIdentitas

  /**
   * AUTO LOAD CHAIN DROPDOWN
   */

  useEffect(() => {
    if (alamat?.Province) {
      fetchKotaKab(alamat.Province)
    }
  }, [alamat?.Province, fetchKotaKab])

  useEffect(() => {
    if (alamat?.City) {
      fetchKecamatan(alamat.City)
    }
  }, [alamat?.City, fetchKecamatan])

  useEffect(() => {
    if (alamat?.District) {
      fetchKelurahan(alamat.District)
    }
  }, [alamat?.District, fetchKelurahan])

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Alamat Identitas</h2>

      <SearchSelectInput
        label="Provinsi"
        options={provinsiOptions}
        value={(form.Provinsi as string) || alamat?.Province || ''}
        onChange={(val) => {
          if (typeof val === 'string') {
            onChange('Provinsi', val)
            fetchKotaKab(val)
          }
        }}
      />

      <SearchSelectInput
        label="Kabupaten / Kota"
        options={kotaOptions}
        value={(form.Kota as string) || alamat?.City || ''}
        onChange={(val) => {
          if (typeof val === 'string') {
            onChange('Kota', val)
            fetchKecamatan(val)
          }
        }}
      />

      <SearchSelectInput
        label="Kecamatan"
        options={kecamatanOptions}
        value={(form.Kecamatan as string) || alamat?.District || ''}
        onChange={(val) => {
          if (typeof val === 'string') {
            onChange('Kecamatan', val)
            fetchKelurahan(val)
          }
        }}
      />

      <SearchSelectInput
        label="Kelurahan"
        options={kelurahanOptions}
        value={(form.Kelurahan as string) || alamat?.Subdistrict || ''}
        onChange={(val) => {
          if (typeof val === 'string') {
            onChange('Kelurahan', val)
          }
        }}
      />

      {/* <TextInput
        label="Alamat Lengkap"
        placeholder="Jl. Kenari Indah No.23"
        value={(form.Alamat as string) || alamat?.Address || ''}
        onChange={(v) => onChange('Alamat', v)}
      /> */}

      <TextAreaInput
        label="Alamat"
        value={(form.Alamat as string) || alamat?.Address || ''}
        onChange={(v) => onChange('Alamat', v)}
      />

      <SearchSelectInput
        label="Status Rumah"
        options={statusRumahOptions}
        value={(form.StatusRumah as string) || data?.StatusRumah || ''}
        onChange={(v) => {
          if (typeof v === 'string') onChange('StatusRumah', v)
        }}
      />

      <SearchSelectInput
        label="Alamat Tempat Tinggal"
        options={alamatSuratOptions}
        value={
          (form.AlamatSuratMenyurat as string) ||
          data?.AlamatSuratMenyurat ||
          ''
        }
        onChange={(v) => {
          if (typeof v === 'string') onChange('AlamatSuratMenyurat', v)
        }}
      />

      <TextAreaInput
        label="Alamat"
        value={(form.AlamatSuratDetail as string) || data?.Alamat || ''}
        onChange={(v) => onChange('AlamatSuratDetail', v)}
      />
    </div>
  )
}
