import { useEffect, useState, useRef } from 'react'
import {
  getProvinsi,
  getKotaKab,
  getKecamatan,
  getKelurahan,
  encryptParam,
} from '../services/akun.service'

import { Provinsi, KotaKab, Kecamatan, Kelurahan } from '../types/akun.type'

export const useAddress = () => {
  const [provinsi, setProvinsi] = useState<Provinsi[]>([])
  const [kotaKab, setKotaKab] = useState<KotaKab[]>([])
  const [kecamatan, setKecamatan] = useState<Kecamatan[]>([])
  const [kelurahan, setKelurahan] = useState<Kelurahan[]>([])

  const [loadingProvinsi, setLoadingProvinsi] = useState(false)
  const [loadingKota, setLoadingKota] = useState(false)
  const [loadingKecamatan, setLoadingKecamatan] = useState(false)
  const [loadingKelurahan, setLoadingKelurahan] = useState(false)

  const fetched = useRef(false)

  const fetchProvinsi = async () => {
    try {
      setLoadingProvinsi(true)

      const res = await getProvinsi()

      setProvinsi(res?.MstProvinsi ?? [])
    } catch (err) {
      console.error('Error fetch provinsi', err)
    } finally {
      setLoadingProvinsi(false)
    }
  }

  const fetchKotaKab = async (provId: string) => {
    try {
      setLoadingKota(true)

      // reset child dropdown
      setKotaKab([])
      setKecamatan([])
      setKelurahan([])

      const encrypted = await encryptParam(provId)

      const res = await getKotaKab(encrypted)

      setKotaKab(res?.MstKotaKab ?? [])
    } catch (err) {
      console.error('Error fetch kota/kab', err)
    } finally {
      setLoadingKota(false)
    }
  }

  const fetchKecamatan = async (kotaId: string) => {
    try {
      setLoadingKecamatan(true)

      // reset child dropdown
      setKecamatan([])
      setKelurahan([])

      const encrypted = await encryptParam(kotaId)

      const res = await getKecamatan(encrypted)

      setKecamatan(res?.MstKecamatan ?? [])
    } catch (err) {
      console.error('Error fetch kecamatan', err)
    } finally {
      setLoadingKecamatan(false)
    }
  }

  const fetchKelurahan = async (kecId: string) => {
    try {
      setLoadingKelurahan(true)

      setKelurahan([])

      const encrypted = await encryptParam(kecId)

      const res = await getKelurahan(encrypted)

      setKelurahan(res?.MstKelurahan ?? [])
    } catch (err) {
      console.error('Error fetch kelurahan', err)
    } finally {
      setLoadingKelurahan(false)
    }
  }

  useEffect(() => {
    if (fetched.current) return

    fetched.current = true

    fetchProvinsi()
  }, [])

  return {
    provinsi,
    kotaKab,
    kecamatan,
    kelurahan,

    fetchKotaKab,
    fetchKecamatan,
    fetchKelurahan,

    loadingProvinsi,
    loadingKota,
    loadingKecamatan,
    loadingKelurahan,
  }
}
