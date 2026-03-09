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
