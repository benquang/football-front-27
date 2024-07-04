export interface IChuongTrinhDaoTao {
  id: string;
  thuTu: number;
  nhomNganhDaoTaoId: string;
  url: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}

export interface IChuongTrinhDaoTaoDTO {
  thuTu: number;
  nhomNganhDaoTaoId: string;
  url: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
}
