export default function KtpUploadFields() {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-2">Foto KTP</h2>

      <p className="text-sm text-gray-500 mb-4">
        Sebelum Anda mengambil foto KTP, pastikan Anda mengikuti langkah berikut
        ini:
      </p>

      {/* Preview KTP */}
      <div className="border rounded-xl p-3 mb-4 flex justify-center">
        <div className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
          Preview Foto
        </div>
      </div>

      {/* Rules */}
      <div className="text-sm mb-6">
        <p className="font-semibold mb-2">Pastikan :</p>

        <ul className="space-y-1 text-gray-600">
          <li>✔ Foto terlihat jelas dan dapat dibaca.</li>
          <li>✔ Foto berada dalam frame kotak.</li>
          <li>✔ KTP milik Anda pribadi.</li>
        </ul>
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
        Ambil Ulang Foto KTP
      </button>
    </div>
  )
}
