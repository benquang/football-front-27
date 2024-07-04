export interface ITinTuc {
  id: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
  url: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
  isGhim: boolean;
  thuTu: number;
}
export interface ITinTucDTO {
  url: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
}
