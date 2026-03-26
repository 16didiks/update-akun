'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import PersonalInfoFields from './sections/PersonalInfoFields'
import AddressFields from './sections/AddressFields'
import FamilyFields from './sections/FamilyFields'
import JobFields from './sections/JobFields'
import BankFields from './sections/BankFields'
import { useMasterData } from '../hooks/useMasterData'

import { useSearchParams } from 'next/navigation'
import { useAkun } from '../hooks/useAkun'

import ImportantInfoModal from './modals/ImportantInfoModal'
import VerificationMethodModal from './modals/VerificationMethodModal'
import OTPModal from './modals/OTPModal'
import SuccessModal from './modals/SuccessModal'
import BeneficialOwnerFields from './sections/BeneficialOwnerFields'
import BeneficialOwnerAddressFields from './sections/BeneficialOwnerAddressFields'
import KtpUploadFields from './sections/KtpUploadFields'
import SignatureFields from './sections/SignatureFields'

type FormState = Record<string, string | string[] | File | null>

export default function EditAkunForm() {
  const [showImportant, setShowImportant] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [step, setStep] = useState(1)

  const router = useRouter()

  const totalSteps = 9

  const master = useMasterData()

  const searchParams = useSearchParams()
  const p1 = searchParams.get('p1') || ''

  const { data: user } = useAkun(p1)

  // 🔵 STATE FORM GLOBAL
  const [form, setForm] = useState<FormState>({})

  // 🔵 HANDLE CHANGE FIELD
  const handleChange = (
    field: string,
    value: string | string[] | File | null,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoFields
            master={master}
            data={user}
            form={form}
            onChange={handleChange}
          />
        )

      case 2:
        return (
          <AddressFields
            master={master}
            data={user}
            form={form}
            onChange={handleChange}
          />
        )

      case 3:
        return (
          <FamilyFields
            master={master}
            data={user}
            form={form}
            onChange={handleChange}
          />
        )

      case 4:
        return (
          <JobFields
            master={master}
            data={user}
            form={form}
            onChange={handleChange}
          />
        )

      case 5:
        return (
          <BeneficialOwnerFields
            data={user}
            master={master}
            form={form}
            onChange={handleChange}
          />
        )

      case 6:
        return (
          <BeneficialOwnerAddressFields
            data={user}
            master={master}
            form={form}
            onChange={handleChange}
          />
        )

      case 7:
        return <KtpUploadFields form={form} onChange={handleChange} />

      // case 8:
      //   return <SignatureFields form={form} onChange={handleChange} />

      // case 9:
      //   return (
      //     <BankFields master={master} form={form} onChange={handleChange} />
      //   )

      default:
        return null
    }
  }

  return (
    <>
      <div className="max-w-sm mx-auto min-h-screen bg-white text-gray-900 px-4 py-6">
        {/* Header */}
        <div className="flex items-center mb-4">
          <button onClick={() => router.back()} className="mr-3">
            ←
          </button>
          <h1 className="text-lg items-center font-semibold">
            Form Pengkinian Data
          </h1>
        </div>

        {/* Step Indicator */}
        <div className="text-sm text-gray-500 mb-2">
          Step {step} dari {totalSteps}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="bg-green-600 h-2 rounded"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Current Step Section */}
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="mt-10 pb-6 flex gap-3">
          {step > 1 && (
            <button
              onClick={() => {
                setStep(step - 1)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="w-1/3 border border-gray-300 py-3 rounded-xl"
            >
              Kembali
            </button>
          )}

          {step < totalSteps ? (
            <button
              onClick={() => {
                setStep(step + 1)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold"
            >
              Selanjutnya
            </button>
          ) : (
            <button
              onClick={() => setShowImportant(true)}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold"
            >
              Konfirmasi
            </button>
          )}
        </div>
      </div>

      {/* Modals */}
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
        onConfirm={(method) => {
          console.log('Method:', method)
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
