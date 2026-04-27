'use client'

import { useState } from 'react'
import { useAkun } from '../hooks/useAkun'
import { UserUpdate } from '../types/akun.type'

import PersonalInfoSection from './sections/update-account/PersonalInfoSection'

import ImportantInfoModal from './modals/ImportantInfoModal'
import SuccessModal from './modals/SuccessModal'
import { useRouter } from 'next/navigation'

type Theme = 'light' | 'dark'

type FormState = {
  phone?: string
  email?: string
  bankName?: string
  bankOwner?: string
  bankAccount?: string
  workAddress?: string
}

type Props = {
  p1?: string
  theme?: Theme
}

export default function UpdateAccountForm({ p1, theme = 'light' }: Props) {
  const dummyUser: UserUpdate = {
    phone: '081234567890',
    email: 'sitisarifahdewi@gmail.com',
    workAddress: 'Bank BCA',
    ktp: 'Siti Sarifah Dewi',
    name: '0987654321',
  }

  const user: UserUpdate = dummyUser
  // const { data: user } = useAkun(p1)

  const [form, setForm] = useState<FormState>({})

  // 🔥 modal states
  const [showImportant, setShowImportant] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = <K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const isDark = theme === 'dark'
  const router = useRouter()

  return (
    <>
      {/* PAGE */}
      <div
        className={`max-w-sm mx-auto min-h-screen px-4 py-6 pb-28 ${
          isDark ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center mb-6">
          <button className="mr-2 text-lg">{'←'}</button>
          <h1 className="text-base font-semibold">Pengkinian Data Pribadi</h1>
        </div>

        {/* CONTENT */}
        <PersonalInfoSection
          data={user}
          form={form}
          onChange={handleChange}
          theme={theme}
        />
      </div>

      {/* FIXED BUTTON */}
      <div
        className={`fixed bottom-0 left-0 right-0 max-w-sm mx-auto p-4 z-50 ${
          isDark ? 'bg-black' : 'bg-white border-t'
        }`}
      >
        <button
          onClick={() => setShowImportant(true)}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold"
        >
          Konfirmasi
        </button>
      </div>

      {/* ================= MODALS ================= */}

      {/* 🔹 IMPORTANT */}
      <ImportantInfoModal
        isOpen={showImportant}
        onClose={() => setShowImportant(false)}
        onAgree={() => {
          setShowImportant(false)
          setShowSuccess(true)
        }}
      />

      {/* 🔹 SUCCESS */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false)
          router.replace(`/update-account?p1=${p1}&theme=${theme}`)
        }}
      />
    </>
  )
}
