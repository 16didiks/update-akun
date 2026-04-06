'use client'

import { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

type FormState = Record<string, string | string[] | File | null>

interface Props {
  form: FormState
  onChange: (field: string, value: string | string[] | File | null) => void
}

export default function SignatureFields({ form, onChange }: Props) {
  const sigRef = useRef<SignatureCanvas | null>(null)

  const handleSave = () => {
    if (!sigRef.current) return

    const dataUrl = sigRef.current.toDataURL('image/png')

    // convert ke file
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png'
    const bstr = atob(arr[1])
    const u8arr = new Uint8Array(bstr.length)

    for (let i = 0; i < bstr.length; i++) {
      u8arr[i] = bstr.charCodeAt(i)
    }

    const file = new File([u8arr], 'signature.png', { type: mime })

    onChange('SignatureFile', file)
  }

  const handleClear = () => {
    sigRef.current?.clear()
    onChange('SignatureFile', null)
  }

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold mb-2">Tanda Tangan</h2>

      <p className="text-sm text-gray-500 mb-4">
        Silakan tanda tangan di dalam kotak berikut
      </p>

      {/* Canvas */}
      <div className="border rounded-xl overflow-hidden">
        <SignatureCanvas
          ref={sigRef}
          penColor="black"
          canvasProps={{
            className: 'w-full h-40 bg-white',
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleClear}
          className="flex-1 border rounded-lg py-2 text-sm"
        >
          Hapus
        </button>

        <button
          onClick={handleSave}
          className="flex-1 bg-green-600 text-white rounded-lg py-2 text-sm"
        >
          Simpan
        </button>
      </div>
    </div>
  )
}
