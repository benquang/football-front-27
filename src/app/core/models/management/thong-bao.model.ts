export interface IThongBao {
  id: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
  loaiThongBaoId: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
}
export interface IThongBaoDTO {
  loaiThongBaoId: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
}
