import FormInput from '@/features/akun/components/FormInput'
import TextAreaInput from '../inputs/TextAreaInput'
import SearchSelectInput from '../inputs/SearchSelectInput'
import { MasterField } from '../../types/akun.type'
import { useAddress } from '../../hooks/useAddress'

interface Props {
  master: {
    jabatan: MasterField[]
    bidangUsaha: MasterField[]
    penghasilanPo: MasterField[]
    alamatSurat: MasterField[]
  }
}

export default function BeneficialOwnerAddressFields({ master }: Props) {
  // ===== MASTER OPTIONS =====

  const jabatanOptions =
    master.jabatan?.map((item) => ({
      label: item.FieldNameDt,
      value: item.Value,
    })) ?? []

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

      <FormInput label="Pekerjaan" placeholder="Dokter" />

      <SearchSelectInput label="Jabatan" options={jabatanOptions} />

      <SearchSelectInput label="Bidang Usaha" options={bidangUsahaOptions} />

      <FormInput label="Nama Perusahaan" placeholder="PT Kagak" />

      <FormInput label="No. Telp Kantor" placeholder="02188988780" />

      {/* ================= */}
      {/* Alamat Kantor BO */}
      {/* ================= */}

      <h3 className="text-sm font-semibold mt-6 mb-3">
        Alamat Kantor Pemilik Manfaat
      </h3>

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

      <FormInput label="Kode Pos" placeholder="78754" />

      <div className="flex gap-3">
        <FormInput label="RT" placeholder="02" />
        <FormInput label="RW" placeholder="03" />
      </div>

      <TextAreaInput label="Alamat" placeholder="Masukkan alamat lengkap" />

      <SearchSelectInput
        label="Penghasilan Pokok Pertahun"
        options={penghasilanPoOptions}
      />
    </div>
  )
}
