import FormInput from "@/features/akun/components/FormInput";

export default function JobFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Data Pekerjaan</h2>

      <FormInput label="Jenis Pekerjaan" placeholder="Karyawan" />

      <FormInput label="Nama Perusahaan" placeholder="PT MNC Sekuritas" />

      <FormInput label="Alamat Perusahaan" placeholder="Alamat kantor" />

      <FormInput label="Lama Bekerja" placeholder="5 Tahun" />

      <FormInput label="Penghasilan" placeholder="Rp 10.000.000" />
    </div>
  );
}