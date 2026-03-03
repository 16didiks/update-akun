"use client";

import { useState } from "react";
import ChangePhotoModal from "../form/modals/ChangePhotoModal";

export default function ProfileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-700" />

        <button
          onClick={() => setOpen(true)}
          className="text-green-500 text-sm mt-2"
        >
          Ubah Foto
        </button>
      </div>

      <ChangePhotoModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
