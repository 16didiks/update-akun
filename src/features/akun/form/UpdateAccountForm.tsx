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
    ktp: '0987654321',
    name: 'Siti Sarifah Dewi',
  }

  const user: UserUpdate = dummyUser
  // const { data: user } = useAkun(p1)

  const [form, setForm] = useState<FormState>({})

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
      {/* OUTER BACKGROUND (ADDED) */}
      <div className={isDark ? 'bg-[#0B0B0B]' : 'bg-gray-300 text-gray-900'}>
        {/* PAGE */}
        <div
          className={`max-w-sm mx-auto min-h-screen px-4 py-6 pb-28 ${
            isDark ? 'bg-[#000] text-white' : 'bg-gray-100 text-gray-900'
          }`}
        >
          {/* HEADER */}
          <div
            className={`flex items-center mb-6 pb-3 border-b ${
              isDark
                ? 'border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.6)]'
                : 'border-gray-200'
            }`}
          >
            <button onClick={() => router.back()} className="mr-2 text-lg">
              ←
            </button>

            <h1
              className={`text-base font-semibold ${
                isDark ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]' : ''
              }`}
            >
              Data Pribadi
            </h1>
          </div>

          {/* CONTENT */}
          <PersonalInfoSection
            data={user}
            form={form}
            onChange={handleChange}
            theme={theme}
          />

          {/* FIXED BUTTON */}
          <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto p-4 z-50">
            {/* LINE (INSET) */}
            <div className="mb-3">
              <div
                className={`border-t ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}
              />
            </div>

            <button
              onClick={() => setShowImportant(true)}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODALS ================= */}

      <ImportantInfoModal
        isOpen={showImportant}
        theme={theme}
        onClose={() => setShowImportant(false)}
        onAgree={() => {
          setShowImportant(false)
          setShowSuccess(true)
        }}
      />

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
