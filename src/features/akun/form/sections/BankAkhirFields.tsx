import FormInput from "@/features/akun/components/FormInput";

export default function BankAkhirFields() {
  return (
    <div className="mt-8 border-t border-gray-800 pt-6">
      <h2 className="text-base font-semibold mb-4">
        Perubahan Rekening Bank Akhir
      </h2>

      <FormInput label="Data Rekening Bank Akhir" placeholder="BCA" required />

      <p className="text-yellow-500 text-xs mt-4 leading-relaxed">
        * Kolom input Perubahan Data yang menggunakan tanda * wajib menerima
        verifikasi via video call oleh Customer Service. Pastikan Handphone Anda
        aktif
      </p>
    </div>
  );
}
