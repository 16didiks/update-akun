import FormInput from '@/features/akun/components/FormInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField } from '../../types/akun.type'
import { useAddress } from '../../hooks/useAddress'

interface Props {
  master: {
    statusRumah: MasterField[]
    alamatSurat: MasterField[]
  }
}

export default function AddressFields({ master }: Props) {
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

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Alamat Identitas</h2>

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

      <FormInput label="Alamat Lengkap" placeholder="Jl. Kenari Indah No.23" />

      <SearchSelectInput label="Status Rumah" options={statusRumahOptions} />

      <SearchSelectInput
        label="Alamat Tempat Tinggal"
        options={alamatSuratOptions}
      />

      <FormInput
        label="Alamat Surat Menyurat"
        placeholder="Alamat Sesuai Identitas"
      />
    </div>
  )
}
