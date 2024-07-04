export interface ISuKien {
  id: string;
  tieuDe: string;
  noiDung: string;
  anhBiaId: string;
  url: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}
export interface ISuKienDTO {
  tieuDe: string;
  noiDung: string;
  anhBiaId: string;
  url: string;
}
