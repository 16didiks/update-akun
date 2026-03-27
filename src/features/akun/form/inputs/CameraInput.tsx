'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  onCapture: (file: File) => void
}

export default function CameraInput({ onCapture }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  // ✅ INIT CAMERA
  useEffect(() => {
    const initCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        })

        streamRef.current = mediaStream

        if (videoRef.current) {
          const video = videoRef.current
          video.srcObject = mediaStream

          video.onloadedmetadata = () => {
            video.play().catch(console.error)
          }
        }
      } catch (err) {
        console.error(err)
        alert('Tidak bisa akses kamera')
      }
    }

    initCamera()

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop())
    }
  }, [])

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }

  const capture = () => {
    if (!videoRef.current) return

    const video = videoRef.current

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const ctx = canvas.getContext('2d')
    ctx?.drawImage(video, 0, 0)

    const dataUrl = canvas.toDataURL('image/png')
    setPreview(dataUrl)

    // convert ke file
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

  return (
    <div>
      {!preview && (
        <div className="relative">
          {/* VIDEO */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full aspect-[4/3] object-cover rounded-xl bg-black"
          />

          {/* FRAME KTP */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[85%] aspect-[1.6/1]">
              <div className="absolute inset-0 border-2 border-white rounded-lg" />

              {/* corner */}
              <div className="absolute w-6 h-6 border-t-4 border-l-4 border-white top-0 left-0" />
              <div className="absolute w-6 h-6 border-t-4 border-r-4 border-white top-0 right-0" />
              <div className="absolute w-6 h-6 border-b-4 border-l-4 border-white bottom-0 left-0" />
              <div className="absolute w-6 h-6 border-b-4 border-r-4 border-white bottom-0 right-0" />

              {/* overlay */}
              <div className="absolute inset-0 rounded-lg shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
            </div>
          </div>

          {/* CAPTURE BUTTON */}
          <button
            onClick={capture}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center active:scale-90 transition"
          >
            <div className="w-12 h-12 border-2 border-black rounded-full" />
          </button>
        </div>
      )}

      {preview && (
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={preview}
            alt="Preview KTP"
            fill
            unoptimized
            className="object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  )
}
