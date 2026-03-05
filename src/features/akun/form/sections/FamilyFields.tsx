import FormInput from "@/features/akun/components/FormInput";

export default function FamilyFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Data Pasangan / Orang Tua</h2>

      <FormInput label="Hubungan" placeholder="Pasangan / Orang Tua" />

      <FormInput label="Nama Lengkap" placeholder="Mora" />

      <FormInput label="Nomor Handphone" placeholder="0852.xxxx.xxxx" />
    </div>
  );
}