export interface IThamQuanThucTap {
  id: string;
  tieuDe: string;
  noiDung: string;
  anhBiaId: string;
  url: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}
export interface IThamQuanThucTapDTO {
  tieuDe: string;
  noiDung: string;
  anhBiaId: string;
  url: string;
}
