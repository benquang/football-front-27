export interface ILoaiThongBao {
  idLoaiThongBao: string;
  tenLoaiThongBao: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}
export interface ILoaiThongBaoDTO {
  tenLoaiThongBao: string;
}
