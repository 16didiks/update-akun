'use client'

import { useSearchParams } from 'next/navigation'
import UpdateAccountForm from '@/features/akun/form/UpdateAccountForm'

export default function Page({ params }: { params: { section: string } }) {
  const searchParams = useSearchParams()

  const p1 = searchParams.get('p1') || ''
  const theme = (searchParams.get('theme') || 'light') as 'light' | 'dark'

  return <UpdateAccountForm p1={p1} theme={theme} />
}
