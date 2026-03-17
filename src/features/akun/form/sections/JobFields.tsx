import TextInput from '../inputs/TextInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import TextAreaInput from '../inputs/TextAreaInput'
import { useAddress } from '../../hooks/useAddress'
import { MasterField, UserUpdate } from '../../types/akun.type'
import { useEffect } from 'react'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  master: {
    pekerjaan: MasterField[]
    bidangUsaha: MasterField[]
    jabatan: MasterField[]
    penghasilanPo: MasterField[]
    sumberDanaUtama: MasterField[]
  }

  data: UserUpdate | null

  form: FormState

  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function JobFields({ master, data, form, onChange }: Props) {
  const {
    provinsi,
    kotaKab,
    kecamatan,
    kelurahan,
    fetchKotaKab,
    fetchKecamatan,
    fetchKelurahan,
  } = useAddress()

  // ===== MASTER OPTIONS =====

  const perkerjaanOptions =
    master.pekerjaan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const bidangUsahaOptions =
    master.bidangUsaha?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const jabatanOptions =
    master.jabatan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const penghasilanPoOptions =
    master.penghasilanPo?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const sumberDanaUtamaOptions =
    master.sumberDanaUtama?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  // ===== ADDRESS OPTIONS =====

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

  const alamat = data?.AlamatPekerjaan

  /**
   * AUTO LOAD CHAIN DROPDOWN
   * Untuk kasus edit data
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
      <h2 className="text-base font-semibold mb-1">Data Pekerjaan</h2>

      <p className="text-sm text-gray-500 mb-4">
        Lengkapi data pekerjaan anda.
      </p>

      <SearchSelectInput
        label="Pekerjaan"
        options={perkerjaanOptions}
        value={(form.JenisPekerjaan as string) || data?.JenisPekerjaan || ''}
        onChange={(v) => onChange('JenisPekerjaan', v)}
      />

      <SearchSelectInput
        label="Jabatan"
        options={jabatanOptions}
        value={
          (form.JabatanPekerjaan as string) || data?.JabatanPekerjaan || ''
        }
        onChange={(v) => onChange('JabatanPekerjaan', v)}
      />

      <SearchSelectInput
        label="Bidang Usaha"
        options={bidangUsahaOptions}
        value={(form.BidangUsaha as string) || data?.BidangUsaha || ''}
        onChange={(v) => onChange('BidangUsaha', v)}
      />

      <TextInput
        label="Nama Perusahaan"
        placeholder=""
        value={(form.NamaPerusahaan as string) || data?.NamaPerusahaan || ''}
        onChange={(v) => onChange('NamaPerusahaan', v)}
      />

      <TextInput
        label="No. Telp Kantor"
        placeholder=""
        value={(form.NoTelpKantor as string) || data?.NoTelpKantor || ''}
        onChange={(v) => onChange('NoTelpKantor', v)}
      />

      {/* Lama Bekerja */}

      <div className="mb-6">
        <label className="block text-sm text-gray-700 mb-2">Lama Bekerja</label>

        <div className="flex gap-3">
          <TextInput
            label="Tahun"
            placeholder="6"
            value={
              (form.LamaBekerjaBulan as string) ||
              (data?.LamaBekerjaTahun !== undefined
                ? String(data.LamaBekerjaTahun)
                : '')
            }
            onChange={(v) => onChange('NoTelpKantor', v)}
          />

          <TextInput
            label="Bulan"
            placeholder="7"
            value={
              (form.LamaBekerjaBulan as string) ||
              (data?.LamaBekerjaBulan !== undefined
                ? String(data.LamaBekerjaBulan)
                : '')
            }
            onChange={(v) => onChange('LamaBekerjaBulan', v)}
          />
        </div>
      </div>

      {/* ===== Alamat Kantor ===== */}

      <h3 className="text-sm font-semibold mb-3">Alamat Kantor</h3>

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

      <TextInput
        label="Kode Pos"
        placeholder=""
        value={(form.PostalCode as string) || alamat?.PostalCode || ''}
        onChange={(v) => onChange('PostalCode', v)}
      />

      <div className="flex gap-3">
        <TextInput
          label="RT"
          placeholder=""
          value={(form.Rt as string) || alamat?.Rt || ''}
          onChange={(v) => onChange('Rt', v)}
        />

        <TextInput
          label="RW"
          placeholder=""
          value={(form.Rw as string) || alamat?.Rw || ''}
          onChange={(v) => onChange('Rw', v)}
        />
      </div>

      <TextAreaInput
        label="Alamat"
        placeholder=""
        value={(form.AlamatKantor as string) || alamat?.Address || ''}
        onChange={(v) => onChange('AlamatKantor', v)}
      />

      <SearchSelectInput
        label="Penghasilan Pokok Pertahun"
        options={penghasilanPoOptions}
        value={
          (form.PenghasilanPokok as string) || data?.PenghasilanPokok || ''
        }
        onChange={(val) => {
          if (typeof val === 'string') {
            onChange('PenghasilanPokok', val)
            fetchKecamatan(val)
          }
        }}
      />

      <SearchSelectInput
        label="Sumber Dana Utama"
        options={sumberDanaUtamaOptions}
        value={(form.SumberDanaUtama as string) || data?.SumberDanaUtama || ''}
        onChange={(val) => {
          if (typeof val === 'string') {
            onChange('SumberDanaUtama', val)
            fetchKecamatan(val)
          }
        }}
      />
    </div>
  )
}
