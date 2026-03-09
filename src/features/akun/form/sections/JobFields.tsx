import FormInput from '@/features/akun/components/FormInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import TextAreaInput from '../inputs/TextAreaInput'
import { MasterField } from '../../types/akun.type'
import { useAddress } from '../../hooks/useAddress'

interface Props {
  master: {
    pekerjaan: MasterField[]
    bidangUsaha: MasterField[]
    jabatan: MasterField[]
    penghasilanPo: MasterField[]
    sumberDanaUtama: MasterField[]
  }
}

export default function JobFields({ master }: Props) {
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

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-1">Data Pekerjaan</h2>

      <p className="text-sm text-gray-500 mb-4">
        Lengkapi data pekerjaan anda.
      </p>

      <SearchSelectInput label="Pekerjaan" options={perkerjaanOptions} />

      <SearchSelectInput label="Jabatan" options={jabatanOptions} />

      <SearchSelectInput label="Bidang Usaha" options={bidangUsahaOptions} />

      <FormInput label="Nama Perusahaan" placeholder="PT MNC Sekuritas" />

      <FormInput label="No. Telp Kantor" placeholder="021xxxxxxx" />

      {/* Lama Bekerja */}

      <div className="mb-6">
        <label className="block text-sm text-gray-700 mb-2">Lama Bekerja</label>

        <div className="flex gap-3">
          <FormInput label="Tahun" placeholder="6" />

          <FormInput label="Bulan" placeholder="7" />
        </div>
      </div>

      {/* ===== Alamat Kantor ===== */}

      <h3 className="text-sm font-semibold mb-3">Alamat Kantor</h3>

      <SearchSelectInput
        label="Provinsi"
        options={provinsiOptions}
        onChange={(val) => fetchKotaKab(val as string)}
      />

      <SearchSelectInput
        label="Kabupaten / Kota"
        options={kotaOptions}
        onChange={(val) => fetchKecamatan(val as string)}
      />

      <SearchSelectInput
        label="Kecamatan"
        options={kecamatanOptions}
        onChange={(val) => fetchKelurahan(val as string)}
      />

      <SearchSelectInput label="Kelurahan" options={kelurahanOptions} />

      <FormInput label="Kode Pos" placeholder="16720" />

      <div className="flex gap-3">
        <FormInput label="RT" placeholder="02" />

        <FormInput label="RW" placeholder="01" />
      </div>

      <TextAreaInput label="Alamat" placeholder="Masukkan alamat lengkap" />

      <SearchSelectInput
        label="Penghasilan Pokok Pertahun"
        options={penghasilanPoOptions}
      />

      <SearchSelectInput
        label="Sumber Dana Utama"
        options={sumberDanaUtamaOptions}
      />
    </div>
  )
}
