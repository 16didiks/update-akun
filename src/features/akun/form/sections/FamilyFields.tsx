import FormInput from "@/features/akun/components/FormInput";
import SearchSelectInput from "../inputs/SearchSelectInput";
import { MasterField } from "../../types/akun.type";

interface Props {
  master: {
    hubungan: MasterField[];
  };
}

export default function FamilyFields({ master }: Props) {

    const hubunganOptions =
    master.hubungan?.map((item) => ({
      label: item.Description,
      value: item.Value,
    })) ?? [];  

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-4">Data Pasangan / Orang Tua</h2>

      <SearchSelectInput
                  label="Status Rumah"
                  options={hubunganOptions}
                />

      <FormInput label="Nama Lengkap" placeholder="Mora" />

      <FormInput label="Nomor Handphone" placeholder="0852.xxxx.xxxx" />
    </div>
  );
}