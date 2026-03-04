import FormInput from "@/features/akun/components/FormInput";
import RadioInput from "../inputs/RadioInput";

export default function PersonalInfoFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold">Perubahan Data Pribadi</h2>
      <label htmlFor="">Lengkapi data diri anda sesuai KTP.</label>
      <br /><br />

      <FormInput
        label="Kode Referal / Kode Sales (Jika ada)"
        placeholder="12345"
      />

      <FormInput label="Email" placeholder="email@gmail.com" />

      <FormInput label="Nomor Handphone" placeholder="0852.xxxx.xxxx" />

      <FormInput label="No. E-KTP" placeholder="1712xxxxxxxxxx4" />

      <FormInput label="Nama lengkap sesuai KTP" placeholder="Jhon" required />

      <RadioInput
        label="Sudah Punya NPWP?"
        name="npwp_status"
        options={[
          { label: "Sudah", value: "yes" },
          { label: "Belum", value: "no" },
        ]}
      />

      <FormInput label="No. NPWP" placeholder="456.646.xxx.xx.xxx" required />
    </div>
  );
}
