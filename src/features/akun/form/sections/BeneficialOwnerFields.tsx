import FormInput from "@/features/akun/components/FormInput";
import SelectInput from "../inputs/SelectInput";
import RadioInput from "../inputs/RadioInput";

export default function BeneficialOwnerFields() {
  return (
    <div className="mb-8">

      <h2 className="text-base font-semibold mb-4">
        Informasi Beneficial Owner
      </h2>

      <SelectInput
        label="Pemilik Manfaat"
        options={[
          { label: "Diri Sendiri", value: "self" },
          { label: "Pihak Lain", value: "other" },
        ]}
      />

      <SelectInput
        label="Jenis Pemilik Manfaat"
        options={[
          { label: "Perorangan", value: "personal" },
          { label: "Perusahaan", value: "company" },
        ]}
      />

      <FormInput
        label="Hubungan dengan pemilik manfaat"
        placeholder="Wali"
      />

      <FormInput label="No. E-KTP" placeholder="3171xxxxxxxxxxxx" />

      <FormInput label="No. NPWP" placeholder="12.345.678.9-012.000" />

      <FormInput label="Nama lengkap sesuai KTP" placeholder="Nama lengkap" />

      <FormInput label="Email" placeholder="email@gmail.com" />

      <FormInput label="Nomor Handphone" placeholder="0812xxxxxxx" />

      <FormInput label="Tempat Lahir" placeholder="Jakarta" />

      <FormInput label="Tanggal Lahir" placeholder="YYYY-MM-DD" />

      <SelectInput
        label="Jenis Kelamin"
        options={[
          { label: "Pria", value: "male" },
          { label: "Perempuan", value: "female" },
        ]}
      />

      <SelectInput
        label="Status Perkawinan"
        options={[
          { label: "Belum Kawin", value: "single" },
          { label: "Kawin", value: "married" },
        ]}
      />

      <FormInput label="Kartu Keluarga" placeholder="Upload dokumen" />

      <RadioInput
        label="Alamat Pemilik Manfaat"
        name="alamat_bo"
        options={[
          { label: "Sama dengan alamat identitas", value: "same" },
          { label: "Alamat lain", value: "other" },
        ]}
      />

    </div>
  );
}