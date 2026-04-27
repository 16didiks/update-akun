'use client'

import { useState, useEffect } from 'react'
import CameraInput from '../../inputs/CameraInput'
import Image from 'next/image'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  form: FormState
  onChange: (field: string, value: string | string[] | File | null) => void
  showCamera: boolean
  setShowCamera: (val: boolean) => void
}

export default function KtpUploadFields({
  onChange,
  showCamera,
  setShowCamera,
}: Props) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleCapture = (file: File) => {
    onChange('KtpFile', file)

    const url = URL.createObjectURL(file)
    setPreview(url)

    setShowCamera(false)
  }

  useEffect(() => {
    console.log('MOUNT KTP FIELDS')
  }, [])

  useEffect(() => {
    console.log('showCamera:', showCamera)
  }, [showCamera])

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-2">Foto KTP</h2>

      <p className="text-sm text-gray-500 mb-4">
        Sebelum Anda mengambil foto KTP, pastikan Anda mengikuti langkah berikut
        ini:
      </p>

      {/* CAMERA MODE */}
      {showCamera && (
        <div className="mb-4 relative z-20">
          <CameraInput onCapture={handleCapture} />
        </div>
      )}

      {/* 🔥 PREVIEW MODE */}
      {!showCamera && (
        <>
          <div className="border rounded-xl p-2 mb-4 flex justify-center">
            {preview ? (
              <div className="relative w-full max-w-[280px] aspect-[1.6/1]">
                <Image
                  src={preview}
                  alt="Preview KTP"
                  fill
                  unoptimized
                  className="object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                Preview Foto
              </div>
            )}
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

          {/* Button */}
          <button
            onClick={() => {
              console.log('CLICK → OPEN CAMERA')
              setShowCamera(true)
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm w-full"
          >
            {preview ? 'Ambil Ulang Foto KTP' : 'Ambil Foto KTP'}
          </button>
        </>
      )}
    </div>
  )
}
