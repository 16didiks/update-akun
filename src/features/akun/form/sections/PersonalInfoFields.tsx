import FormInput from "@/features/akun/components/FormInput";
import RadioInput from "../inputs/RadioInput";
import DateInput from "../inputs/DateInput";
import SelectInput from "../inputs/SelectInput";

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

      <FormInput label="Tempat Lahir" placeholder="Jakarta" required />

      <DateInput label="Tanggal Lahir" required />

      <SelectInput
        label="Jenis Kelamin"
        required
        options={[
          { label: "Laki-laki", value: "male" },
          { label: "Perempuan", value: "female" },
        ]}
      />

      <SelectInput
        label="Agama"
        required
        options={[
          { label: "Islam", value: "w" },
          { label: "Kristen ", value: "x" },
          { label: "Hindu", value: "d" },
        ]}
      />

      <SelectInput
        label="Status Perkawinan"
        required
        options={[
          { label: "Menikah", value: "w" },
          { label: "Single ", value: "x" },
        ]}
      />

      <FormInput label="Nama Ibu Kandung" placeholder="Mora" required />
      
      <SelectInput
        label="Pendidikan"
        required
        options={[
          { label: "SD", value: "w" },
          { label: "SMP ", value: "x" },
          { label: "SMA/SMk ", value: "r" },
          { label: "Sarjana ", value: "t" },
        ]}
      />
      
    </div>
  );
}
