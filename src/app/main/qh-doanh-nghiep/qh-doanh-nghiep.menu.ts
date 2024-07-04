import { UrlConstant } from '@constants/url.constant';
import { SideMenu } from '@models/common/side-menu.model';

const langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

const listMenuTitle = langCode === 'vi' ? {
  THAM_QUAN_TT: 'Tham quan & Thực tập',
  TUYEN_DUNG_TU_DN: 'Tuyển dụng từ doanh nghiệp',
} : {
  THAM_QUAN_TT: 'Field Trip & Internship',
  TUYEN_DUNG_TU_DN: 'Hiring from Enterprises',
};

export const qhDoanhNghiepMenu: SideMenu[] = [
  {
    active: false,
    name: listMenuTitle.THAM_QUAN_TT,
    url: UrlConstant.ROUTE.MAIN.QH_DN.THAM_QUAN_VA_THUC_TAP,
    contents: [],
  },
  {
    active: false,
    name: listMenuTitle.TUYEN_DUNG_TU_DN,
    url: UrlConstant.ROUTE.MAIN.QH_DN.TUYEN_DUNG_TU_DOANH_NGHIEP,
    contents: [],
  },
];
