"use client";

import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl rounded-2xl p-6 text-center">
        <div className="mb-4 flex justify-center">
          <Image
            src="/success.png"
            alt="Success"
            width={150}
            height={150}
            className="object-contain mx-auto"
            priority
          />
        </div>

        <h3 className="font-semibold text-base mb-2">
          Data Anda telah terkirim
        </h3>

        <p className="text-xs text-gray-600 mb-6 leading-relaxed">
          Data baru Anda segera diproses. Mohon cek email dan handphone Anda
          secara berkala untuk informasi bahwa data anda sudah terupdate
        </p>

        <button
          onClick={onClose}
          className="w-full bg-green-600 py-3 rounded-xl font-semibold"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
