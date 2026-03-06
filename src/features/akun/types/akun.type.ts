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