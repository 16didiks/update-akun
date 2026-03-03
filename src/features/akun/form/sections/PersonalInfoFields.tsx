import FormInput from "@/features/akun/components/FormInput";

export default function PersonalInfoFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Perubahan Data Pribadi</h2>

      <FormInput
        label="Alamat Pribadi"
        placeholder="Jl. Kenari Indah No.23..."
      />

      <FormInput label="Status Perkawinan" placeholder="Belum Kawin" />

      <FormInput label="Data Pekerjaan" placeholder="Karyawan" />

      <FormInput label="Alamat Pekerjaan" placeholder="PT MNC Sekuritas" />

      <FormInput label="No. Handphone" placeholder="081234567890" required />

      <FormInput label="Alamat Email" placeholder="email@gmail.com" required />

      <FormInput label="Data BO" placeholder="Suharman Hidayat" />
    </div>
  );
}
