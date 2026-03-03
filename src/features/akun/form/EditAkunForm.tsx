"use client";

import PersonalInfoFields from "./sections/PersonalInfoFields";
import BankAkhirFields from "./sections/BankAkhirFields";

export default function EditAkunForm() {
  return (
    <div className="max-w-sm mx-auto h-screen overflow-y-auto bg-black text-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="mr-3">←</button>
        <h1 className="text-lg font-semibold">Form Pengkinian Data</h1>
      </div>

      {/* Sections */}
      <PersonalInfoFields />
      <BankAkhirFields />

      {/* Footer Button */}
      <div className="mt-10 pb-6">
        <button className="w-full bg-green-600 hover:bg-green-700 transition-colors py-3 rounded-xl font-semibold">
          Konfirmasi
        </button>
      </div>
    </div>
  );
}
