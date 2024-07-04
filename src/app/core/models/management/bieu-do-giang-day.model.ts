export interface IBieuDoGiangDay {
  id: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
  tieuDe: string;
  hinhAnhId: string;
  filePdfId: string;
}

export interface IBieuDoGiangDayDTO {
  tieuDe: string;
  hinhAnhId: string;
  filePdfId: string;
}
