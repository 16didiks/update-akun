'use client'

import { useState } from 'react'
import CameraInput from '../inputs/CameraInput'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  form: FormState
  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function KtpUploadFields({ form, onChange }: Props) {
  const [showCamera, setShowCamera] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  const handleCapture = (file: File) => {
    onChange('KtpFile', file)

    const url = URL.createObjectURL(file)
    setPreview(url)

    setShowCamera(false)
  }

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-2">Foto KTP</h2>

      <p className="text-sm text-gray-500 mb-4">
        Sebelum Anda mengambil foto KTP, pastikan Anda mengikuti langkah berikut
        ini:
      </p>

      {/* Preview / Camera */}
      {!showCamera ? (
        <div className="border rounded-xl p-3 mb-4 flex justify-center">
          {preview ? (
            <img src={preview} className="w-48 h-28 object-cover rounded-lg" />
          ) : (
            <div className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
              Preview Foto
            </div>
          )}
        </div>
      ) : (
        <CameraInput onCapture={handleCapture} />
      )}

      {/* Rules */}
      {!showCamera && (
        <div className="text-sm mb-6">
          <p className="font-semibold mb-2">Pastikan :</p>

          <ul className="space-y-1 text-gray-600">
            <li>✔ Foto terlihat jelas dan dapat dibaca.</li>
            <li>✔ Foto berada dalam frame kotak.</li>
            <li>✔ KTP milik Anda pribadi.</li>
          </ul>
        </div>
      )}

      {/* Button */}
      {!showCamera && (
        <button
          onClick={() => setShowCamera(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm w-full"
        >
          {preview ? 'Ambil Ulang Foto KTP' : 'Ambil Foto KTP'}
        </button>
      )}
    </div>
  )
}
