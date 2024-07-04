export interface ICuuSinhVien {
  id: string;
  url: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;

  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}
export interface ICuuSinhVienDTO {
  url: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
}
