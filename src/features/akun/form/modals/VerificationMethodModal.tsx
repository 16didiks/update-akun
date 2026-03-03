"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (method: string) => void;
}

export default function VerificationMethodModal({
  isOpen,
  onClose,
  onConfirm,
}: Props) {
  const [method, setMethod] = useState("sms");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xs bg-white rounded-2xl shadow-xl rounded-2xl p-6"
      >
        <h3 className="font-semibold mb-4 text-center">
          Pilih Metode Verifikasi
        </h3>

        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={method === "wa"}
              onChange={() => setMethod("wa")}
              className="accent-green-500"
            />
            WhatsApp OTP
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={method === "sms"}
              onChange={() => setMethod("sms")}
              className="accent-green-500"
            />
            SMS OTP
          </label>
        </div>

        <button
          onClick={() => onConfirm(method)}
          className="w-full bg-green-600 py-2 rounded-xl"
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
}
