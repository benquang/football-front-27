export interface IThuVienAnhUte {
  id: string;
  trangThai: boolean;
  modifiedAt: Date;
  modifiedBy: string;
  thuTu: number;
  hinhAnhId: string;
}

export interface IThuVienAnhUteDTO {
  thuTu: number;
  hinhAnhId: string;
}
