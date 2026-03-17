export interface MasterField {
  FieldCode: string
  FieldCodeDt: string
  CreatedBy: string
  CreatedDate: string
  Description: string
  Description2: string | null
  FieldNameDt: string
  IsActive: boolean
  ModifiedBy: string
  ModifiedDate: string
  Value: string
}

export interface MasterDataResponse {
  OasStandardField: {
    [key: string]: MasterField[]
  }
}

export interface Provinsi {
  Id: string
  Nama: string
}

export interface KotaKab {
  Id: string
  IdProvinsi: string
  Nama: string
}

export interface Kecamatan {
  Id: string
  IdKotaKab: string
  Nama: string
}

export interface Kelurahan {
  Id: string
  IdKecamatan: string
  Nama: string
  KodePos: string
}

export interface Address {
  Id?: string
  Address?: string
  Rt?: string
  Rw?: string
  District?: string
  Subdistrict?: string
  City?: string
  Province?: string
  Country?: string
  PostalCode?: string

  ProvinceName?: string
  CityName?: string
  DistrictName?: string
  SubdistrictName?: string

  Active?: boolean
}

export interface UserUpdate {
  RegId?: number

  ReferralCode?: string

  NamaLengkap?: string
  Email?: string
  AlamatEmail?: string

  NoHandphone?: string
  Hp?: string

  Nik?: string
  NoIdentitas?: string

  Npwp?: string
  AlasanNpwp?: string
  email?: string

  TempatLahir?: string
  TanggalLahir?: string
  AlamatSuratMenyurat?: string

  JenisKelamin?: string
  Agama?: string
  StatusKawin?: string

  PendidikanTerakhir?: string

  NamaLengkapIbu?: string
  NamaLengkapAyah?: string

  Kewarganegaraan?: string

  NoTeleponRumah?: string

  ProvinceName?: string

  Alamat?: string
  AlamatTempatTinggal?: string

  BankNamaRekening?: string
  BankNoRekening?: string
  BankId?: string

  JabatanPekerjaan?: string
  NamaPerusahaan?: string
  Jabatan?: string
  JenisPekerjaan?: string
  BidangUsaha?: string
  NoTelpKantor?: string

  SumberDanaUtama?: string
  TujuanInvestasi?: string

  PenghasilanPokok?: string
  PenghasilanTambahan?: string

  KeluargaNamaLengkap?: string
  KeluargaNoHandphone?: string

  StatusRumah?: string

  LamaBekerjaTahun?: number
  LamaBekerjaBulan?: number

  PemilikAsset?: number
  PenerimaManfaat?: number
  StatusHubunganKeluarga?: string
  KeluargaNoIdentitas?: string

  Step?: number

  // ===== ADDRESS OBJECT FROM API =====
  AlamatIdentitas?: Address
  AlamatDomisili?: Address
  AlamatPekerjaan?: Address
  AlamatKantor?: Address
}
