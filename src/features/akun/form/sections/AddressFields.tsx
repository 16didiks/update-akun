import FormInput from "@/features/akun/components/FormInput";

export default function AddressFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Alamat Identitas</h2>

      <FormInput label="Provinsi" placeholder="Jawa Timur" />

      <FormInput label="Kabupaten / Kota" placeholder="Kabupaten Jember" />

      <FormInput label="Kecamatan" placeholder="Kaliwates" />

      <FormInput label="Alamat Lengkap" placeholder="Jl. Kenari Indah No.23" />
    </div>
  );
}