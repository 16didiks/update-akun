'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  label?: string
  onCapture: (file: File) => void
  autoStart?: boolean
}

export default function CameraInput({ label, onCapture, autoStart }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const [isReady, setIsReady] = useState(false)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }

      setIsReady(true)
    } catch (err) {
      console.error('Camera error:', err)
      alert('Akses kamera ditolak atau tidak tersedia')
    }
  }

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }

  const capture = () => {
    if (!videoRef.current) return

    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight

    const ctx = canvas.getContext('2d')
    ctx?.drawImage(videoRef.current, 0, 0)

    const dataUrl = canvas.toDataURL('image/png')

    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png'
    const bstr = atob(arr[1])
    const u8arr = new Uint8Array(bstr.length)

    for (let i = 0; i < bstr.length; i++) {
      u8arr[i] = bstr.charCodeAt(i)
    }

    const file = new File([u8arr], 'ktp.png', { type: mime })

    onCapture(file)
    stopCamera()
  }

  // 🔥 AUTO START TANPA WARNING
  useEffect(() => {
    if (autoStart) {
      Promise.resolve().then(() => {
        startCamera()
      })
    }

    return () => stopCamera()
  }, [autoStart])

  return (
    <div className="mb-6">
      {label && <p className="text-sm mb-2">{label}</p>}

      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full rounded-xl bg-black"
        />

        {/* Frame */}
        <div className="absolute inset-4 border-2 border-white rounded-lg pointer-events-none" />

        {isReady && (
          <button
            onClick={capture}
            className="mt-3 w-full bg-green-600 text-white py-2 rounded-xl"
          >
            Ambil Foto
          </button>
        )}
      </div>
    </div>
  )
}
