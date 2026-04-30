'use client'

import { UserUpdate } from '../../../types/akun.type'
import TextInput from '../../inputs/TextInput'
import RdnItem from '@/features/akun/components/RdnItem'

type Theme = 'light' | 'dark'

type FormState = {
  phone?: string
  email?: string
  workAddress?: string
}

type Props = {
  data: UserUpdate | null
  form: FormState
  onChange: <K extends keyof FormState>(field: K, value: FormState[K]) => void
  theme: Theme
}

export default function PersonalInfoSection({
  data,
  form,
  onChange,
  theme,
}: Props) {
  const isDark = theme === 'dark'

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h2 className="text-sm font-semibold">Informasi Pribadi</h2>

      {/* READONLY FIELD */}
      <div className="space-y-4">
        {/* Nama */}
        <TextInput
          label="Nama Pemilik"
          value={data?.name ?? 'Siti Sarifah Dewi'}
          onChange={() => {}}
          theme={theme}
          disabled
        />

        {/* KTP */}
        <TextInput
          label="No KTP"
          value={data?.ktp ?? '3788688768788'}
          onChange={() => {}}
          theme={theme}
          disabled
        />

        {/* Alamat kerja */}
        <TextInput
          label="Alamat Pekerjaan"
          value={form.workAddress ?? data?.workAddress ?? 'PT MNC Sekuritas'}
          onChange={(val) => onChange('workAddress', val)}
          theme={theme}
        />

        {/* Phone */}
        <TextInput
          label="No. Handphone"
          value={form.phone ?? data?.phone ?? ''}
          onChange={(val) => onChange('phone', val)}
          theme={theme}
        />

        {/* Email */}
        <TextInput
          label="Email"
          value={form.email ?? data?.email ?? ''}
          onChange={(val) => onChange('email', val)}
          theme={theme}
        />

        <RdnItem
          logo="/mnc-bank.png"
          bankName=""
          accountNumber="01298031113"
          accountName="Siti Sarifah Dewi"
          theme={theme}
        />
      </div>

      {/* Divider */}
      <div
        className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
      />
    </div>
  )
}
