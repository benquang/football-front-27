// File demo. Move the real file to src/app/core/models/.../
export interface IAcademicRanks {
  id: string;
  academicRankName: string;
  academicRankNameEn: string;
  academicRankAbbreviation: string;
  academicRankAbbreviationEn: string;
  status: boolean;
}

export interface IAcademicRanksDTO {
  academicRankName: string;
  academicRankNameEn: string;
  academicRankAbbreviation: string;
  academicRankAbbreviationEn: string;
}
