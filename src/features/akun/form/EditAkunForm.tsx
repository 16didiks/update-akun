'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import PersonalInfoFields from './sections/PersonalInfoFields'
import AddressFields from './sections/AddressFields'
import FamilyFields from './sections/FamilyFields'
import JobFields from './sections/JobFields'
import BankFields from './sections/BankFields'
import { useMasterData } from '../hooks/useMasterData'

import ImportantInfoModal from './modals/ImportantInfoModal'
import VerificationMethodModal from './modals/VerificationMethodModal'
import OTPModal from './modals/OTPModal'
import SuccessModal from './modals/SuccessModal'
import BeneficialOwnerFields from './sections/BeneficialOwnerFields'
import BeneficialOwnerAddressFields from './sections/BeneficialOwnerAddressFields'
import KtpUploadFields from './sections/KtpUploadFields'
import SignatureFields from './sections/SignatureFields'

export default function EditAkunForm() {
  const [showImportant, setShowImportant] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [step, setStep] = useState(1)

  const router = useRouter()

  const totalSteps = 9

  const master = useMasterData()

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoFields master={master} />
      case 2:
        return <AddressFields master={master} />
      case 3:
        return <FamilyFields master={master} />
      case 4:
        return <JobFields master={master} />
      case 5:
        return <BeneficialOwnerFields />
      case 6:
        return <BeneficialOwnerAddressFields />
      case 7:
        return <KtpUploadFields />
      case 8:
        return <SignatureFields />
      case 9:
        return <BankFields />
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
