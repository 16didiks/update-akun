"use client";

import Image from "next/image";

export default function AkunPage() {
  const data = {
    nama: "Siti Sarifah Dewi",
    namaAlias: "Sarifah",
    userId: "MT1234567890",
    accountNumber: "0010340",
    email: "sitisarifahdewi@gmail.com",
    phone: "081234567890",
  };

  return (
    <div className="min-h-screen flex justify-center py-10 px-4">
      {/* Card Container */}
      <div className="w-full max-w-md bg-black text-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button className="mr-4">←</button>
          <h1 className="text-lg font-semibold">Detail Akun</h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              width={110}
              height={110}
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-pink-500 text-xs px-3 py-1 rounded-full">
              Level 5
            </div>
          </div>

          <button className="text-green-400 text-sm mt-3">Ubah Foto</button>
        </div>

        {/* Informasi Pribadi */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold">Informasi Pribadi</h2>
            <button className="text-green-400 text-sm">Ubah Data</button>
          </div>

          <div className="space-y-4">
            <InfoItem label="Nama" value={data.nama} />
            <InfoItem label="Nama Alias" value={data.namaAlias} />
            <InfoItem label="User ID" value={data.userId} />
            <InfoItem label="Account Number" value={data.accountNumber} />
            <InfoItem label="Email" value={data.email} />
            <InfoItem label="Nomor Telepon" value={data.phone} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
