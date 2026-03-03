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
      // nanti kirim ke API upload
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xs bg-neutral-900 rounded-2xl p-6"
      >
        <h3 className="text-sm font-semibold mb-4">Ubah Foto</h3>

        <button
          onClick={openGallery}
          className="w-full text-left py-3 border-b border-neutral-800 text-sm"
        >
          Pilih Dari Galeri
        </button>

        <button onClick={openCamera} className="w-full text-left py-3 text-sm">
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
