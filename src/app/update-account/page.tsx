'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function UpdateAccountMenuPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const p1 = searchParams.get('p1') || ''
  const theme = searchParams.get('theme') || 'light'

  const menus = [
    { label: 'Data Pribadi', key: 'personal' },
    { label: 'Data Profil', key: 'profile' },
    { label: 'Data Trading', key: 'trading' },
  ]

  const handleClick = (key: string) => {
    router.push(`/update-account/${key}?p1=${p1}&theme=${theme}`)
  }

  return (
    <div
      className={`min-h-screen px-4 py-6 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="mb-6 text-center">
        <h1 className="text-lg font-semibold">Ubah Data</h1>
      </div>

      <div className="space-y-3">
        {menus.map((item) => (
          <div
            key={item.key}
            onClick={() => handleClick(item.key)}
            className={`flex justify-between items-center rounded-xl p-4 cursor-pointer transition active:scale-[0.98]
        ${
          theme === 'dark'
            ? 'bg-[#111] text-white'
            : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
        }
      `}
          >
            <span>{item.label}</span>
            <span className="text-green-500">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
