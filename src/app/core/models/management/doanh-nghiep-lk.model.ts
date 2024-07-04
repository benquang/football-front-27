export interface IDoanhNghiepLk {
  id: string;
  thuTu: number;
  tenDoanhNghiep: string;
  hinhAnhId: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}
export interface IDoanhNghiepLkDTO {
  thuTu: number;
  tenDoanhNghiep: string;
  hinhAnhId: string;
}
