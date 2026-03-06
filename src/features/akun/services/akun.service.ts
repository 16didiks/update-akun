import axiosInstance from '@/lib/axios'
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
