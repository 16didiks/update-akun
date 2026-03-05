import FormInput from "@/features/akun/components/FormInput";
import TextAreaInput from "../inputs/TextAreaInput";
import RadioInput from "../inputs/RadioInput";


export default function BeneficialOwnerAddressFields() {
  return (
    <div className="mb-8">

        <RadioInput
        label="Alamat Pemilik Manfaat"
        name="alamat_bo"
        options={[
          { label: "Sama dengan alamat identitas", value: "same" },
          { label: "Alamat lain", value: "other" },
        ]}
      />

      {/* ================= */}
      {/* Data Perusahaan BO */}
      {/* ================= */}

      <h3 className="text-sm font-semibold mt-6 mb-3">
        Data Perusahaan Pemilik Manfaat
      </h3>

      <FormInput label="Pekerjaan" placeholder="Dokter" />

      <FormInput label="Jabatan" placeholder="Manajer" />

      <FormInput label="Bidang Usaha" placeholder="Pertanian" />

      <FormInput label="Nama Perusahaan" placeholder="PT Kagak" />

      <FormInput label="No. Telp Kantor" placeholder="02188988780" />

      {/* ================= */}
      {/* Alamat Kantor BO */}
      {/* ================= */}

      <h3 className="text-sm font-semibold mt-6 mb-3">
        Alamat Kantor Pemilik Manfaat
      </h3>

      <FormInput label="Provinsi" placeholder="Kalimantan Barat" />

      <FormInput label="Kabupaten / Kota" placeholder="Kapuas Hulu" />

      <FormInput label="Kecamatan" placeholder="Embaloh Hilir" />

      <FormInput label="Kelurahan" placeholder="Ujung Bayur" />

      <FormInput label="Kode Pos" placeholder="78754" />

      <div className="flex gap-3">
        <FormInput label="RT" placeholder="02" />
        <FormInput label="RW" placeholder="03" />
      </div>

      <TextAreaInput
        label="Alamat"
        placeholder="Masukkan alamat lengkap"
      />

      <FormInput
        label="Penghasilan Pokok Pertahun"
        placeholder="Kurang dari Rp. 10.000.000"
      />

    </div>
  );
}