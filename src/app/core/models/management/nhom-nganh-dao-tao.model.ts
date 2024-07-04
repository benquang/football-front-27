export interface INhomNganhDaoTao {
  id: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
  thuTu: number;
  tieuDe: string;
  moTa: string;
  iconId: string;
  bannerId: string;
  url: string;
}

export interface INhomNganhDaoTaoDTO {
  thuTu: number;
  tieuDe: string;
  iconId: string;
  bannerId: string;
}
