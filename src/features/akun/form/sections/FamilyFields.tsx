import FormInput from "@/features/akun/components/FormInput";

export default function FamilyFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Data Keluarga</h2>

      <FormInput label="Nama Ibu Kandung" placeholder="Masukkan nama ibu" />

      <FormInput label="Hubungan" placeholder="Pasangan / Orang Tua" />

      <FormInput label="Nama Lengkap" placeholder="Nama keluarga" />

      <FormInput label="Nomor Handphone" placeholder="08xxxxxxxx" />
    </div>
  );
}