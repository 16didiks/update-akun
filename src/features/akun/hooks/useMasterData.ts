import { useEffect, useState } from 'react'
import { getMasterData } from '../services/akun.service'
import { MASTER_KEY } from '../constants/master.constant'
import { MasterField } from '../types/akun.type'

export const useMasterData = () => {
  const [jenisKelamin, setJenisKelamin] = useState<MasterField[]>([])
  const [agama, setAgama] = useState<MasterField[]>([])
  const [statusPerkawinan, setStatusPerkawinan] = useState<MasterField[]>([])
  const [statusRumah, setStatusRumah] = useState<MasterField[]>([])
  const [hubungan, setHubungan] = useState<MasterField[]>([])
  const [pekerjaan, setPekerjaan] = useState<MasterField[]>([])
  const [jabatan, setJabatan] = useState<MasterField[]>([])
  const [bidangUsaha, setBidangUsaha] = useState<MasterField[]>([])
  const [penghasilanPo, setPenghasilanPo] = useState<MasterField[]>([])
  const [sumberDanaUtama, setSumberDanaUtama] = useState<MasterField[]>([])
  const [pemilikAsset, setPemilikAsset] = useState<MasterField[]>([])
  const [jenisPenerimaManfaat, setJenisPenerimaManfaat] = useState<
    MasterField[]
  >([])
  const [hubunganBo, setHubunganBo] = useState<MasterField[]>([])
  const [alamatSurat, setAlamatSurat] = useState<MasterField[]>([])
  const [alasanNpwp, setAlasanNpwp] = useState<MasterField[]>([])
  const [bankAkhirNew, setBankAkhirNew] = useState<MasterField[]>([])
  const [pendidikan, setPendidikan] = useState<MasterField[]>([])

  useEffect(() => {
    const loadMaster = async () => {
      try {
        const res = await getMasterData(MASTER_KEY.PERSONAL_MASTER)

        setJenisKelamin(res?.OasStandardField?.JenisKelamin ?? [])
        setAgama(res?.OasStandardField?.Agama ?? [])
        setStatusPerkawinan(res?.OasStandardField?.StatusPerkawinan ?? [])
        setStatusRumah(res?.OasStandardField?.StatusRumah ?? [])
        setHubungan(res?.OasStandardField?.Hubungan ?? [])
        setPekerjaan(res?.OasStandardField?.Pekerjaan ?? [])
        setJabatan(res?.OasStandardField?.PosisiPekerjaan ?? [])
        setBidangUsaha(res?.OasStandardField?.BidangUsaha ?? [])
        setPenghasilanPo(res?.OasStandardField?.PenghasilanPo ?? [])
        setSumberDanaUtama(res?.OasStandardField?.SumberDanaUtama ?? [])
        setPemilikAsset(res?.OasStandardField?.PemilikAsset ?? [])
        setJenisPenerimaManfaat(
          res?.OasStandardField?.JenisPenerimaManfaat ?? [],
        )
        setHubunganBo(res?.OasStandardField?.HubunganBO ?? [])
        setAlamatSurat(res?.OasStandardField?.AlamatSurat ?? [])
        setAlasanNpwp(res?.OasStandardField?.AlasanNpwp ?? [])
        setBankAkhirNew(res?.OasStandardField?.BankAkhirNew ?? [])
        setPendidikan(res?.OasStandardField?.Pendidikan ?? [])
      } catch (err) {
        console.error('Master data error', err)
      }
    }

    loadMaster()
  }, [])

  return {
    jenisKelamin,
    agama,
    statusPerkawinan,
    statusRumah,
    hubungan,
    pekerjaan,
    jabatan,
    bidangUsaha,
    penghasilanPo,
    sumberDanaUtama,
    pemilikAsset,
    jenisPenerimaManfaat,
    hubunganBo,
    alamatSurat,
    alasanNpwp,
    bankAkhirNew,
    pendidikan,
  }
}
