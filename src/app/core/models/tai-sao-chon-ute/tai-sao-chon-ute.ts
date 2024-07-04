export interface ITaiSaoChonUte {
  id: string;
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
  isInSlider: boolean;
  thuTu: number;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: Date;
}

export interface ITaiSaoChonUteDTO {
  tieuDe: string;
  anhBiaId: string;
  noiDung: string;
  thuTu: number;
}
