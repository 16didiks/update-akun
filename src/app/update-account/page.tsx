'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ImportantInfoModal from '@/features/akun/form/modals/ImportantInfoModal'

export default function UpdateAccountMenuPage() {
  const [tab, setTab] = useState<'form' | 'history'>('form')
  const router = useRouter()
  const searchParams = useSearchParams()

  const p1 = searchParams.get('p1') || ''
  const rawTheme = searchParams.get('theme')

  const theme: 'light' | 'dark' = rawTheme === 'dark' ? 'dark' : 'light'

  const menus = [
    { label: 'Data Pribadi', key: 'data-pribadi' },
    { label: 'Data Penerima Manfaat (BO)', key: 'beneficiary' },
    { label: 'Data Penting', key: 'important' },
  ]

  const goTo = (key: string) => {
    router.push(`/update-account/${key}?p1=${p1}&theme=${theme}`)
  }

  const [showImportantModal, setShowImportantModal] = useState(false)

  const handleMenuClick = (key: string) => {
    if (key === 'data-pribadi') {
      setShowImportantModal(true)
    } else {
      goTo(key)
    }
  }

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark'
          ? 'bg-[#0B0B0B] text-white'
          : 'bg-gray-300 text-gray-900'
      }`}
    >
      {/* MOBILE WRAPPER */}
      <div className="flex justify-center">
        <div
          className={`w-full max-w-sm min-h-screen px-4 py-6 ${
            theme === 'dark'
              ? 'bg-black'
              : 'bg-white shadow-lg rounded-none sm:rounded-2xl'
          }`}
        >
          {/* HEADER */}
          <div
            className={`mb-4 text-center pt-4 pb-3 border-b ${
              theme === 'dark'
                ? 'border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.6)]'
                : 'border-gray-200'
            }`}
          >
            <h1 className="text-lg font-semibold">Perubahan Data Pribadi</h1>
          </div>

          {/* Tabs */}
          <div
            className={`flex mb-4 border-b ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <button
              onClick={() => setTab('form')}
              className={`flex-1 py-2 text-sm ${
                tab === 'form'
                  ? 'border-b-2 border-green-500 font-semibold'
                  : theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-gray-500'
              }`}
            >
              Form Perubahan
            </button>

            <button
              onClick={() => setTab('history')}
              className={`flex-1 py-2 text-sm ${
                tab === 'history'
                  ? 'border-b-2 border-green-500 font-semibold'
                  : theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-gray-500'
              }`}
            >
              Riwayat
            </button>
          </div>

          {/* FORM TAB */}
          {tab === 'form' && (
            <div className="space-y-3">
              {menus.map((item) => (
                <div
                  key={item.key}
                  onClick={() => handleMenuClick(item.key)}
                  className={`p-4 rounded-xl flex justify-between items-center cursor-pointer transition active:scale-[0.98]
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
          )}

          {/* HISTORY TAB */}
          {tab === 'history' && (
            <div
              className={`rounded-xl overflow-hidden ${
                theme === 'dark'
                  ? 'bg-[#111] text-white'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              {/* HEADER */}
              <div
                className={`grid grid-cols-3 px-4 py-3 text-xs font-semibold ${
                  theme === 'dark'
                    ? 'text-gray-400 border-b border-gray-700'
                    : 'text-gray-500 border-b border-gray-200'
                }`}
              >
                <span>Time</span>
                <span>Perubahan</span>
                <span className="text-right">Status</span>
              </div>

              {/* LIST */}
              <div
                className={`divide-y ${
                  theme === 'dark' ? 'divide-gray-700' : 'divide-gray-100'
                }`}
              >
                {[
                  {
                    date: '20 Jan 2025',
                    time: '13:42:15',
                    desc: 'Perubahan data berhasil',
                    status: 'Selesai',
                  },
                  {
                    date: '17 Jan 2025',
                    time: '10:15:29',
                    desc: 'Perubahan email masuk',
                    status: 'Dalam Proses',
                  },
                  {
                    date: '16 Jan 2025',
                    time: '13:42:15',
                    desc: 'Perubahan nomor handphone masuk',
                    status: 'Ditolak',
                  },
                ].map((item, i) => {
                  const statusStyle =
                    item.status === 'Selesai'
                      ? 'bg-green-500/20 text-green-400'
                      : item.status === 'Dalam Proses'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'

                  return (
                    <div
                      key={i}
                      onClick={() =>
                        router.push(
                          `/update-account/history/${i}?p1=${p1}&theme=${theme}`,
                        )
                      }
                      className="grid grid-cols-3 px-4 py-3 text-xs cursor-pointer active:opacity-70"
                    >
                      {/* TIME */}
                      <div>
                        <div>{item.date}</div>
                        <div className="text-gray-500">{item.time}</div>
                      </div>

                      {/* DESC */}
                      <div className="text-green-400">{item.desc}</div>

                      {/* STATUS */}
                      <div className="flex justify-end items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-medium ${statusStyle}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <ImportantInfoModal
        isOpen={showImportantModal}
        theme={theme}
        onClose={() => setShowImportantModal(false)}
        onAgree={() => {
          setShowImportantModal(false)
          setTimeout(() => {
            goTo('data-pribadi')
          }, 200)
        }}
      />
    </div>
  )
}
