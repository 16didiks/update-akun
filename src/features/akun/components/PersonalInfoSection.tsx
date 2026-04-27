'use client'

import { useRouter } from 'next/navigation'
import Section from './Section'
import InfoItem from './InfoItem'

export default function PersonalInfoSection() {
  const router = useRouter()

  return (
    <Section
      title="Informasi Pribadi"
      actionText="Ubah Data"
      onAction={() => router.push('/akun/edit')}
    >
      <InfoItem label="Nama" value="Siti Sarifah Dewi" />
      <InfoItem label="Nama Alias" value="Sarifah" />
      <InfoItem label="User ID" value="MT1234567890" />
      <InfoItem label="Account Number" value="0010340" />
      <InfoItem label="Email" value="sitisarifahdewi@gmail.com" />
      <InfoItem label="Nomor Telepon" value="081234567890" />
    </Section>
  )
}
