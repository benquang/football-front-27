export interface ILoaiHinhDaoTao {
  id: string;
  thuTu: number;
  tieuDe: string;
  hinhAnhId: string;
  link: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}
export interface ILoaiHinhDaoTaoDTO {
  thuTu: number;
  tieuDe: string;
  hinhAnhId: string;
  link: string;
}
