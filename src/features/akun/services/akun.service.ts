import axiosInstance from '@/lib/axios'
import axiosEncrypt from '@/lib/axiosEncrypt'
import { MasterDataResponse } from '../types/akun.type'

export const getMasterData = async (
  encryptedKey: string,
): Promise<MasterDataResponse> => {
  const { data } = await axiosInstance.post(
    '/oas/oasMaster/getMasterDataOas',
    null,
    {
      params: {
        p1: encryptedKey,
      },
    },
  )

  return data
}

export const encryptParam = async (value: string): Promise<string> => {
  const payload = {
    p1: value,
  }

  const { data } = await axiosEncrypt.post(
    '/oas/oasOpeningAccount/enc',
    payload,
  )

  return data
}

export const getProvinsi = async () => {
  const { data } = await axiosInstance.post('/oas/oasMaster/getProvinsi')

  return data
}

export const getKotaKab = async (encrypted: string) => {
  const { data } = await axiosInstance.post('/oas/oasMaster/getKotaKab', null, {
    params: {
      p1: encrypted,
    },
  })

  return data
}

export const getKecamatan = async (encrypted: string) => {
  const { data } = await axiosInstance.post(
    '/oas/oasMaster/getKecamatan',
    null,
    {
      params: {
        p1: encrypted,
      },
    },
  )

  return data
}

export const getKelurahan = async (encrypted: string) => {
  const { data } = await axiosInstance.post(
    '/oas/oasMaster/getKelurahan',
    null,
    {
      params: {
        p1: encrypted,
      },
    },
  )

  return data
}

export const getUserUpdate = async (p1: string) => {
  const response = await axiosInstance.post(
    `https://supportdev.mncsekuritas.id:30443/ws/api/oas/oasOpeningAccountV2/getUserUpdate?p1=${p1}`,
  )

  return response.data
}
