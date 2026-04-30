'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function HistoryDetailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const theme = searchParams.get('theme') || 'dark'
  const isDark = theme === 'dark'

  const data = [
    { label: 'Nama Pemilik', value: 'Siti Sarifah Dewi' },
    { label: 'Jenis Kelamin', value: 'Perempuan' },
    { label: 'Tempat Lahir', value: 'Jakarta' },
    { label: 'Tanggal Lahir', value: '1 Januari 2000' },
    { label: 'Agama', value: 'Islam' },
    { label: 'Pendidikan', value: 'Strata 2' },
    { label: 'Nomor Identitas', value: '378688076878' },
    { label: 'Masa Berlaku', value: 'Seumur Hidup' },
    { label: 'Kewarganegaraan', value: 'Indonesia' },
  ]

  return (
    <div className={isDark ? 'bg-[#0B0B0B]' : 'bg-gray-100'}>
      <div
        className={`max-w-sm mx-auto min-h-screen px-4 py-6 pb-28 ${
          isDark ? 'bg-[#111] text-white' : 'bg-white text-gray-900'
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="mr-2 text-lg">
            ←
          </button>
          <h1 className="text-base font-semibold">Data Nasabah</h1>
        </div>

        {/* CONTENT */}
        <div className="space-y-4">
          {data.map((item, i) => (
            <div key={i}>
              <p
                className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {item.label}
              </p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        {/* STATUS */}
        <div className="mt-6 text-green-400 text-xs">
          Perubahan data anda telah selesai
        </div>
      </div>

      {/* BUTTON */}
      <div
        className={`fixed bottom-0 left-0 right-0 max-w-sm mx-auto p-4 ${
          isDark ? 'bg-[#0B0B0B]' : 'bg-white border-t'
        }`}
      >
        {/* <button className="w-full bg-green-600 text-white py-3 rounded-xl">
          Ubah Data Nasabah
        </button> */}
      </div>
    </div>
  )
}
