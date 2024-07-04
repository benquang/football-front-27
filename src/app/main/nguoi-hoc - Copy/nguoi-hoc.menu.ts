import { UrlConstant } from '@constants/url.constant';
import { SideMenu } from '@models/common/side-menu.model';
const langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

const listMenuTitle = langCode === 'vi' ? {
  SINH_VIEN: 'Sinh viên',
  HOC_VIEN: 'Học viên',
  NGHIEN_CUU_SINH: 'Nghiên cứu sinh',
  CUU_SINH_VIEN: 'Cựu sinh viên',
} : {
  SINH_VIEN: 'Student',
  HOC_VIEN: 'Trainee',
  NGHIEN_CUU_SINH: 'Doctor of Philosophy',
  CUU_SINH_VIEN: 'Alumni',
};

export const nguoiHocMenu: SideMenu[] = [
  {
    active: false,
    name: listMenuTitle.SINH_VIEN,
    url: UrlConstant.ROUTE.MAIN.NGUOI_HOC.SINH_VIEN,
    contents: [],
  },
  {
    active: false,
    name: listMenuTitle.HOC_VIEN,
    url: UrlConstant.ROUTE.MAIN.NGUOI_HOC.HOC_VIEN,
    contents: [],
  },
  {
    active: false,
    name: listMenuTitle.NGHIEN_CUU_SINH,
    url: UrlConstant.ROUTE.MAIN.NGUOI_HOC.NGHIEN_CUU_SINH,
    contents: [],
  },
  {
    active: false,
    name: listMenuTitle.CUU_SINH_VIEN,
    url: UrlConstant.ROUTE.MAIN.NGUOI_HOC.CUU_SINH_VIEN,
    contents: [],
  },
];
