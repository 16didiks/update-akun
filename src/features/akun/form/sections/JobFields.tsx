import FormInput from "@/features/akun/components/FormInput";
import SelectInput from "../inputs/SelectInput";
import TextAreaInput from "../inputs/TextAreaInput";

export default function JobFields() {
  return (
    <div className="mb-8">

      <h2 className="text-base font-semibold mb-1">Data Pekerjaan</h2>
      <p className="text-sm text-gray-500 mb-4">
        Lengkapi data pekerjaan anda.
      </p>

      <SelectInput
        label="Pekerjaan"
        options={[
          { label: "Pegawai Swasta", value: "swasta" },
          { label: "Wiraswasta", value: "wiraswasta" },
          { label: "PNS", value: "pns" },
        ]}
      />

      <FormInput label="Jabatan" placeholder="Direktur / Presiden" />

      <FormInput label="Bidang Usaha" placeholder="Finance / Banking" />

      <FormInput label="Nama Perusahaan" placeholder="PT MNC Sekuritas" />

      <FormInput label="No. Telp Kantor" placeholder="021xxxxxxx" />

      {/* Lama Bekerja */}
      <div className="mb-6">
        <label className="block text-sm text-gray-700 mb-2">
          Lama Bekerja
        </label>

        <div className="flex gap-3">
          <FormInput label="Tahun" placeholder="6" />
          <FormInput label="Bulan" placeholder="7" />
        </div>
      </div>

      {/* Alamat Kantor */}
      <h3 className="text-sm font-semibold mb-3">Alamat Kantor</h3>

      <SelectInput
        label="Provinsi"
        options={[
          { label: "Jawa Barat", value: "jabar" },
          { label: "DKI Jakarta", value: "jakarta" },
        ]}
      />

      <SelectInput
        label="Kabupaten / Kota"
        options={[
          { label: "Kabupaten Bogor", value: "bogor" },
        ]}
      />

      <SelectInput
        label="Kecamatan"
        options={[
          { label: "Ciawi", value: "ciawi" },
        ]}
      />

      <FormInput label="Kelurahan" placeholder="Ciawi" />

      <FormInput label="Kode Pos" placeholder="16720" />

      <div className="flex gap-3">
        <FormInput label="RT" placeholder="02" />
        <FormInput label="RW" placeholder="01" />
      </div>

      <TextAreaInput
        label="Alamat"
        placeholder="Masukkan alamat lengkap"
        />

      <SelectInput
        label="Penghasilan pokok Pertahun"
        options={[
          { label: "Lebih dari Rp. 1.000.0000.000", value: "x" },
        ]}
       />

      <FormInput label="Sumber Dana Utama" placeholder="Gaji" />

    </div>
  );
}