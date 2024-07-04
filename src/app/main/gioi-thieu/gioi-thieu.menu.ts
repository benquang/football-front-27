import { UrlConstant } from '@constants/url.constant';
import { SideMenu } from '@models/common/side-menu.model';

export const gioiThieuMenu: SideMenu[] = [
  {
    active: false,
    name: 'Thư ngỏ',
    url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.THU_NGO,
    contents: [],
  },
  {
    active: false,
    name: 'Đảng - Đoàn thể',
    url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.BASE,
    contents: [
      { name: 'Đảng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.DANG },
      { name: 'Công đoàn', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.CONG_DOAN },
      { name: 'Đoàn thanh niên -  Hội sinh viên', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.DOAN_TN_HOI_SV },
      { name: 'Hội cựu chiến binh', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.HOI_CUU_CHIEN_BINH },
    ],
  },
  {
    active: false,
    name: 'Về trường',
    url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.BASE,
    contents: [
      { name: 'Sơ đồ tổ chức', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.SO_DO_TO_CHUC },
      { name: 'Chức năng, nhiệm vụ', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.CHUC_NANG_NHIEM_VU },
      { name: 'Sơ đồ vị trí của trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.SO_DO_VI_TRI },
      { name: 'Quá trình phát triển', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.QUA_TRINH_PHAT_TRIEN },
      { name: 'Thành tích của nhà trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.THANH_TICH },
      { name: 'Triết lý giáo dục', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.TRIET_LY_GIAO_DUC },
      { name: 'Kiểm định chất lượng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.KIEM_DINH_CHAT_LUONG },
      { name: 'Công khai giáo dục', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.CONG_KHAI_GIAO_DUC },
      { name: 'Đối tác - Đối ngoại', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.DOI_TAC_DOI_NGOAI },
    ],
  },
  {
    active: false,
    name: 'Cơ cấu tổ chức',
    url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.BASE,
    contents: [
      { name: 'Hội đồng trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.HOI_DONG_TRUONG },
      { name: 'Ban giám hiệu', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.BAN_GIAM_HIEU },
      { name: 'Các khoa viện trực thuộc', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
      { name: 'Các phòng ban, tt chức năng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.PHONG_BAN_TT },
      { name: 'Các trung tâm độc lập', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    ],
  },
];
