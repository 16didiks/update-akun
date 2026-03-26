import FormInput from '@/features/akun/components/FormInput'
import TextAreaInput from '../inputs/TextAreaInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField, UserUpdate } from '../../types/akun.type'
import { useAddress } from '../../hooks/useAddress'
import TextInput from '../inputs/TextInput'
import { useEffect } from 'react'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  master: {
    pekerjaan: MasterField[]
    jabatan: MasterField[]
    bidangUsaha: MasterField[]
    penghasilanPo: MasterField[]
    alamatSurat: MasterField[]
  }

  data: UserUpdate | null

  form: FormState

  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function BeneficialOwnerAddressFields({
  master,
  data,
  form,
  onChange,
}: Props) {
  // ===== MASTER OPTIONS =====

  const bidangUsahaOptions =
    master.bidangUsaha?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const penghasilanPoOptions =
    master.penghasilanPo?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const alamatSuratOptions =
    master.alamatSurat?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const jabatanOptions =
    master.jabatan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

  const alamat = data?.AlamatPekerjaan

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

  const perkerjaanOptions =
    master.pekerjaan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

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
      <SearchSelectInput
        label="Alamat Pemilik Manfaat"
        options={alamatSuratOptions}
      />

      {/* ================= */}
      {/* Data Perusahaan BO */}
      {/* ================= */}

      <h3 className="text-sm font-semibold mt-6 mb-3">
        Data Perusahaan Pemilik Manfaat
      </h3>

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

      {/* ===== Alamat Kantor ===== */}

      <h3 className="text-sm font-semibold mb-3">
        Alamat Kantor Pemilik Manfaat
      </h3>

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
    </div>
  )
}
