'use client'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAgree: () => void
  theme?: 'light' | 'dark'
}

export default function ImportantInfoModal({
  isOpen,
  onClose,
  onAgree,
  theme = 'light',
}: Props) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-sm rounded-t-2xl shadow-xl p-6 ${
          theme === 'dark' ? 'bg-[#111] text-white' : 'bg-white text-gray-900'
        }`}
      >
        <h3 className="font-semibold text-base mb-4 text-center">
          Informasi Penting
        </h3>

        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">Proses Pengkinian Data</h4>

          <ul
            className={`text-xs leading-relaxed space-y-2 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <li>
              • Pastikan data terbaru yang anda masukkan telah benar. Proses
              perubahan data ini akan memakan waktu{' '}
              <span className="font-medium">1 x 24 jam</span> (pada hari bursa)
            </li>

            <li>
              • Perubahan data berikutnya dapat dilakukan setelah proses
              pengkinian data selesai di konfirmasi.
            </li>
          </ul>
        </div>

        {/* <div className="mb-4">
          <h4 className="font-semibold text-sm mb-1">
            Pembatasan Fitur Selama 24 Jam
          </h4>
          <p
            className={`text-xs leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Untuk melindungi akun Anda dan menjaga keamanan aset Anda, fitur
            Penarikan Dana Bank RDN akan dibatasi selama 24 jam setelah Anda
            melakukan proses pengkinian data.
          </p>
        </div> */}

        <div
          className={`border-t my-4 ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}
        />

        {/* <div className="mb-6">
          <h4 className="font-semibold text-sm mb-1">Proses Pengkinian Data</h4>
          <p
            className={`text-xs leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Proses pengkinian data hanya dapat dilakukan sekali setelah proses
            verifikasi data terkirim. Untuk proses pengkinian data berikutnya
            hanya dapat dilakukan setelah 3 bulan sejak pengkinian data terakhir
            dilakukan.
          </p>
        </div> */}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className={`flex-1 py-2 rounded-xl ${
              theme === 'dark'
                ? 'border border-green-500 text-green-400'
                : 'border border-green-600 text-green-500'
            }`}
          >
            Batal
          </button>

          <button
            onClick={onAgree}
            className="flex-1 bg-green-600 text-white py-2 rounded-xl"
          >
            Setuju
          </button>
        </div>
      </div>
    </div>
  )
}
