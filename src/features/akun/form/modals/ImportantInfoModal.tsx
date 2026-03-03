"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export default function ImportantInfoModal({
  isOpen,
  onClose,
  onAgree,
}: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="font-semibold text-base mb-4 text-center">
          Informasi Penting
        </h3>

        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-1">
            Periksa Kembali Data Anda
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Pastikan data terbaru anda telah benar. Proses pengkinian data ini
            akan memakan waktu 1 x 24 jam
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-1">
            Pembatasan Fitur Selama 24 Jam
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Untuk melindungi akun Anda dan menjaga keamanan aset Anda, fitur
            Penarikan Dana Bank RDN akan dibatasi selama 24 jam setelah Anda
            melakukan proses pengkinian data.
          </p>
        </div>

        <div className="border-t border-gray-700 my-4" />

        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-1">Proses Pengkinian Data</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Proses pengkinian data hanya dapat dilakukan sekali setelah proses
            verifikasi data terkirim. Untuk proses pengkinian data berikutnya
            hanya dapat dilakukan setelah 3 bulan sejak pengkinian data terakhir
            dilakukan.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-green-600 text-green-500 py-2 rounded-xl"
          >
            Batal
          </button>

          <button
            onClick={onAgree}
            className="flex-1 bg-green-600 py-2 rounded-xl"
          >
            Setuju
          </button>
        </div>
      </div>
    </div>
  );
}
