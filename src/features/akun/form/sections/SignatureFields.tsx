export default function SignatureFields() {
  return (
    <div className="mb-8">

      <h2 className="text-base font-semibold mb-2">
        Spesimen Tanda Tangan
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Silahkan tanda tangan di area kotak yang sudah kami sediakan.
      </p>

      <p className="text-sm text-gray-500 mb-4">
        Pastikan tanda tangan Anda mirip dengan yang ada di KTP.
      </p>

      {/* Canvas area */}
      <div className="border rounded-xl h-64 mb-4 bg-white flex items-center justify-center">
        Area Tanda Tangan
      </div>

      <button className="text-sm text-gray-500 mb-6">
        Clear
      </button>

    </div>
  );
}