"use client";

import { useState } from "react";
import PersonalInfoFields from "./sections/PersonalInfoFields";
import BankAkhirFields from "./sections/BankAkhirFields";
import ImportantInfoModal from "./modals/ImportantInfoModal";
import VerificationMethodModal from "./modals/VerificationMethodModal";
import OTPModal from "./modals/OTPModal";
import SuccessModal from "./modals/SuccessModal";
import { useRouter } from "next/navigation";

export default function EditAkunForm() {
  const [showImportant, setShowImportant] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="max-w-sm mx-auto min-h-screen bg-white text-gray-900 px-4 py-6">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="mr-3">
            ←
          </button>

          <h1 className="text-lg font-semibold">Form Pengkinian Data</h1>
        </div>

        <PersonalInfoFields />
        <BankAkhirFields />

        <div className="mt-10 pb-6">
          <button
            onClick={() => setShowImportant(true)}
            className="w-full bg-green-600 py-3 rounded-xl font-semibold"
          >
            Konfirmasi
          </button>
        </div>
      </div>

      <ImportantInfoModal
        isOpen={showImportant}
        onClose={() => setShowImportant(false)}
        onAgree={() => {
          setShowImportant(false);
          setShowVerification(true);
        }}
      />

      <VerificationMethodModal
        isOpen={showVerification}
        onClose={() => setShowVerification(false)}
        onConfirm={(method) => {
          console.log("Method:", method);
          setShowVerification(false);
          setShowOtp(true);
        }}
      />

      <OTPModal
        isOpen={showOtp}
        phone="+62812345****"
        onClose={() => setShowOtp(false)}
        onSuccess={() => {
          setShowOtp(false);
          setShowSuccess(true);
        }}
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
