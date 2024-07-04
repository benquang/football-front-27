export interface IBannerSlide {
  id: string;
  thuTu: number;
  tieuDe: string;
  hinhAnhId: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
}

export interface IBannerSlideDTO {
  thuTu: number;
  tieuDe: string;
  hinhAnhId: string;
}
