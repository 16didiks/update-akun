'use client'
import { Suspense } from 'react'
import EditAkunForm from '@/features/akun/form/EditAkunForm'

export default function Page() {
  return (
    <Suspense>
      <EditAkunForm />
    </Suspense>
  )
}
