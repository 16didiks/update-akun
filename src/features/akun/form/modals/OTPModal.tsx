"use client";

import { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  phone: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function OTPModal({ isOpen, phone, onClose, onSuccess }: Props) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        <div className="w-10 h-1 bg-gray-400 rounded-full mx-auto mb-4" />

        <h3 className="text-center font-semibold mb-2">Input OTP</h3>

        <p className="text-center text-xs text-gray-600 mb-6">
          Masukkan kode verifikasi yang dikirimkan melalui sms ke nomor ({phone}
          )
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-12 h-12 text-center text-lg rounded-lg bg-white text-black border-2 border-green-500"
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mb-2">
          Belum menerima OTP?
        </p>

        <p className="text-center text-green-400 text-sm mb-6">
          00:{time.toString().padStart(2, "0")}
        </p>

        <button
          onClick={() => {
            onClose();
            onSuccess();
          }}
          className="w-full bg-green-600 py-3 rounded-xl font-semibold"
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
}
