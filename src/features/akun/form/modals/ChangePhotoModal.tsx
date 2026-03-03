"use client";

import { useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChangePhotoModal({ isOpen, onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const openGallery = () => {
    fileInputRef.current?.removeAttribute("capture");
    fileInputRef.current?.click();
  };

  const openCamera = () => {
    fileInputRef.current?.setAttribute("capture", "environment");
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xs bg-white rounded-2xl p-6 shadow-xl"
      >
        <h3 className="text-sm font-semibold mb-4 text-gray-900 text-center">
          Ubah Foto
        </h3>

        <button
          onClick={openGallery}
          className="w-full text-left py-3 border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
        >
          Pilih Dari Galeri
        </button>

        <button
          onClick={openCamera}
          className="w-full text-left py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
        >
          Ambil Dari Kamera
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
