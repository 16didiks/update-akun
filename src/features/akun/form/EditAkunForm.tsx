'use client'

import { useState } from 'react'

import PersonalInfoFields from './sections/edit-akun/PersonalInfoFields'
import AddressFields from './sections/edit-akun/AddressFields'
import FamilyFields from './sections/edit-akun/FamilyFields'
import JobFields from './sections/edit-akun/JobFields'
import BankFields from './sections/edit-akun/BankFields'
import { useMasterData } from '../hooks/useMasterData'

import { useAkun } from '../hooks/useAkun'

import ImportantInfoModal from './modals/ImportantInfoModal'
import VerificationMethodModal from './modals/VerificationMethodModal'
import OTPModal from './modals/OTPModal'
import SuccessModal from './modals/SuccessModal'
import BeneficialOwnerFields from './sections/edit-akun/BeneficialOwnerFields'
import BeneficialOwnerAddressFields from './sections/edit-akun/BeneficialOwnerAddressFields'
import KtpUploadFields from './sections/edit-akun/KtpUploadFields'
import SignatureFields from './sections/edit-akun/SignatureFields'

type FormState = Record<string, string | string[] | File | null>

const STEP_CONFIG = [
  { section: 'personal', component: PersonalInfoFields },
  { section: 'personal', component: AddressFields },

  { section: 'profile', component: FamilyFields },
  { section: 'profile', component: JobFields },
  { section: 'profile', component: BankFields },

  { section: 'trading', component: BeneficialOwnerFields },
  { section: 'trading', component: BeneficialOwnerAddressFields },
  { section: 'trading', component: KtpUploadFields },
  { section: 'trading', component: SignatureFields },
]

export default function EditAkunForm({
  section,
  encryptedId,
  theme = 'light',
}: {
  section?: string
  encryptedId?: string
  theme?: 'light' | 'dark'
}) {
  const [showImportant, setShowImportant] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [showCamera, setShowCamera] = useState(false)

  const master = useMasterData()
  const { data: user } = useAkun(encryptedId)

  const steps = section
    ? STEP_CONFIG.filter((s) => s.section === section)
    : STEP_CONFIG

  const [stepIndex, setStepIndex] = useState(0)

  const CurrentComponent = steps[stepIndex]?.component

  const [form, setForm] = useState<FormState>({})

  const handleChange = (
    field: string,
    value: string | string[] | File | null,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <>
      <div
        className={`max-w-sm mx-auto min-h-screen px-4 py-6 ${
          theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
        }`}
      >
        <h1 className="text-lg font-semibold mb-4">Form Pengkinian Data</h1>

        {/* Step */}
        <div className="text-sm mb-2">
          Step {stepIndex + 1} dari {steps.length}
        </div>

        <div className="w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="bg-green-600 h-2 rounded"
            style={{
              width: `${((stepIndex + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Content */}
        {CurrentComponent && (
          <CurrentComponent
            data={user}
            master={master}
            form={form}
            onChange={handleChange}
            showCamera={showCamera}
            setShowCamera={setShowCamera}
          />
        )}

        {/* Navigation */}
        <div className="mt-10 flex gap-3">
          {stepIndex > 0 && (
            <button
              onClick={() => setStepIndex(stepIndex - 1)}
              className="w-1/3 border py-3 rounded-xl"
            >
              Kembali
            </button>
          )}

          {stepIndex < steps.length - 1 ? (
            <button
              onClick={() => setStepIndex(stepIndex + 1)}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl"
            >
              Selanjutnya
            </button>
          ) : (
            <button
              onClick={() => setShowImportant(true)}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl"
            >
              Konfirmasi
            </button>
          )}
        </div>
      </div>

      {/* MODALS */}
      <ImportantInfoModal
        isOpen={showImportant}
        onClose={() => setShowImportant(false)}
        onAgree={() => {
          setShowImportant(false)
          setShowVerification(true)
        }}
      />

      <VerificationMethodModal
        isOpen={showVerification}
        onClose={() => setShowVerification(false)}
        onConfirm={() => {
          setShowVerification(false)
          setShowOtp(true)
        }}
      />

      <OTPModal
        isOpen={showOtp}
        phone="+62812345****"
        onClose={() => setShowOtp(false)}
        onSuccess={() => {
          setShowOtp(false)
          setShowSuccess(true)
        }}
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  )
}
