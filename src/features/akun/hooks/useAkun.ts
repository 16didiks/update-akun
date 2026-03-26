import { useEffect, useState } from 'react'
import { getUserUpdate } from '../services/akun.service'
import { UserUpdate } from '../types/akun.type'

export const useAkun = (p1: string) => {
  const [data, setData] = useState<UserUpdate | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await getUserUpdate(p1)

      setData(res.Result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (p1) {
      fetchData()
    }
  }, [p1])

  return {
    data,
    loading,
  }
}
