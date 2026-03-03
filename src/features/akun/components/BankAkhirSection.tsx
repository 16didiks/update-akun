import Section from "./Section";
import InfoItem from "./InfoItem";

export default function BankAkhirSection() {
  return (
    <Section title="Informasi Akun Bank Akhir">
      <InfoItem label="Nama Bank" value="MNC Bank" />
      <InfoItem label="Nama Pemilik Rekening" value="Siti Sarifah Dewi" />
      <InfoItem label="Nomor Rekening" value="0987654321" />
    </Section>
  );
}
