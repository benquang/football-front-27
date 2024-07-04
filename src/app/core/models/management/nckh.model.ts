export interface INckh {
  id: string;
  thuTu: number;
  tieuDe: string;
  hinhAnhId: string;
  link: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}

export interface INckhDTO {
  thuTu: number;
  tieuDe: string;
  hinhAnhId: string;
  link: string;
}
