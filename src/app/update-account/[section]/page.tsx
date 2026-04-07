'use client'

import { useSearchParams } from 'next/navigation'
import EditAkunForm from '@/features/akun/form/EditAkunForm'

export default function SectionPage({
  params,
}: {
  params: { section: string }
}) {
  const searchParams = useSearchParams()

  const p1 = searchParams.get('p1') || ''
  const theme = (searchParams.get('theme') || 'light') as 'light' | 'dark'

  return (
    <EditAkunForm section={params.section} encryptedId={p1} theme={theme} />
  )
}
