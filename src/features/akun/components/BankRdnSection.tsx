import Section from "./Section";
import InfoItem from "./InfoItem";

export default function BankRdnSection() {
  return (
    <Section title="Informasi Akun Bank RDN">
      <InfoItem label="Nama Bank" value="MNC Bank" />
      <InfoItem label="Nama Pemilik" value="Siti Sarifah Dewi" />
      <InfoItem label="Nomor Rekening" value="1234567890" />
    </Section>
  );
}
