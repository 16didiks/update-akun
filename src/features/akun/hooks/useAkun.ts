import { useEffect, useState } from 'react'
import { getUserUpdate } from '../services/akun.service'
import { UserUpdate } from '../types/akun.type'

export const useAkun = (p1?: string) => {
  const [data, setData] = useState<UserUpdate | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    if (!p1) return

    try {
      setLoading(true)
      const res = await getUserUpdate(p1)
      setData(res.Result)
    } catch (error) {
      console.error('getUserUpdate error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [p1])

  return {
    data,
    loading,
  }
}
