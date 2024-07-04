/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from '@environment';

export const UrlConstant = {
  // 'method' string need uppercase for improving perfomance
  PUBLIC_URL: [
    { regex: '.*login.*', method: 'POST' },
    { regex: '.*file/.*', method: 'GET' },
    { regex: '.*googleapis.*', method: 'GET' },
  ],
  API: {
    // File
    FILE: environment.serverFileUrl + 'rest/file',
    GOOGLE_PEOPLE: 'https://people.googleapis.com/v1/people/me?personFields=names,photos,emailAddresses',

    // Main - NOTE: Remember to add ALL login api link to interceptor
    LOGIN_ADMIN: environment.serverUrl + 'rest/login',

    // Catalog
    DEMO_API: environment.serverUrl + 'rest/demo',

  },

  ROUTE: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
    },
    MAIN: {
      HOMEPAGE: '/',
      GIOI_THIEU: {
        BASE: '/gioi-thieu',
        THU_NGO: '/gioi-thieu/thu-ngo',
        DANG_DOAN_THE: {
          BASE: '/gioi-thieu/dang-doan-the',
          DANG: '/gioi-thieu/dang-doan-the/dang',
          CONG_DOAN: '/gioi-thieu/dang-doan-the/cong-doan',
          DOAN_TN_HOI_SV: '/gioi-thieu/dang-doan-the/doan-tn-hoi-sv',
          HOI_CUU_CHIEN_BINH: '/gioi-thieu/dang-doan-the/hoi-cuu-chien-binh',
        },
        VE_TRUONG: {
          BASE: '/gioi-thieu/ve-truong',
          SO_DO_TO_CHUC: '/gioi-thieu/ve-truong/so-do-to-chuc',
          CHUC_NANG_NHIEM_VU: '/gioi-thieu/ve-truong/chuc-nang-nhiem-vu',
          SO_DO_VI_TRI: '/gioi-thieu/ve-truong/so-do-vi-tri',
          QUA_TRINH_PHAT_TRIEN: '/gioi-thieu/ve-truong/qua-trinh-phat-trien',
          THANH_TICH: '/gioi-thieu/ve-truong/thanh-tich',
          TRIET_LY_GIAO_DUC: '/gioi-thieu/ve-truong/triet-ly-giao-duc',
          KIEM_DINH_CHAT_LUONG: '/gioi-thieu/ve-truong/kiem-dinh-chat-luong',
          CONG_KHAI_GIAO_DUC: '/gioi-thieu/ve-truong/cong-khai-giao-duc',
          DOI_TAC_DOI_NGOAI: '/gioi-thieu/ve-truong/doi-tac-doi-ngoai',
        },
        CO_CAU_TO_CHUC: {
          BASE: '/gioi-thieu/co-cau-to-chuc',
          HOI_DONG_TRUONG: '/gioi-thieu/co-cau-to-chuc/hoi-dong-tuong',
          BAN_GIAM_HIEU: '/gioi-thieu/co-cau-to-chuc/ban-giam-hieu',
          KHOA_VIEN_TRUC_THUOC: '/gioi-thieu/co-cau-to-chuc/khoa-vien-truc-thuoc',
          PHONG_BAN_TT: '/gioi-thieu/co-cau-to-chuc/phong-ban-trung-tam',
          TRUNG_TAM_DL: {
            BASE: '/gioi-thieu/co-cau-to-chuc/trung-tam-doc-lap',
          },
        },
        PHONG_BAN: {
          BASE: '/gioi-thieu/phong-ban',
          BQL_KTX: '/gioi-thieu/phong-ban/bql-ktx',
          QL_HO_SO_DU_AN: '/gioi-thieu/phong-ban/ql-hsda',
          DBCL: '/gioi-thieu/phong-ban/pdbcl',
          DAO_TAO: '/gioi-thieu/phong-ban/pdt',
          DAO_TAO_KCQ: '/gioi-thieu/phong-ban/pdt-kcq',
          KE_HOACH_TAI_CHINH: '/gioi-thieu/phong-ban/pkhtc',
          QHDN: '/gioi-thieu/phong-ban/pqhdn',
          KHCN_QHQT: '/gioi-thieu/phong-ban/pkhcn-qhqt',
          QUAN_TRI_CSVC: '/gioi-thieu/phong-ban/qt-csvc',
          THANH_TRA_GIAO_DUC: '/gioi-thieu/phong-ban/ttgd',
          THIET_BI_VAT_TU: '/gioi-thieu/phong-ban/ptbvt',
          TO_CHUC_HANH_CHINH: '/gioi-thieu/phong-ban/ptchc',
          TS_CTSV: '/gioi-thieu/phong-ban/ts-ctsv',
          TRUYEN_THONG: '/gioi-thieu/phong-ban/ptt',
          TRAM_Y_TE: '/gioi-thieu/phong-ban/yte',
          THU_VIEN: '/gioi-thieu/phong-ban/tv',
        },
      },
      DAO_TAO: {
        BASE: '/dao-tao',
        QTE_VA_DU_HOC: '',
        QTE_DU_HOC: '',
        CHINH_QUY_CLC: '',
        VLVH: '',
        THS: '',
        TS: '',
      },
      NCKH: {
        BASE: '/nghien-cuu-khoa-hoc',
      },
      QH_DN: {
        BASE: '/quan-he-doanh-nghiep',
        THAM_QUAN_VA_THUC_TAP: '/quan-he-doanh-nghiep/tham-quan-thuc-tap',
        TUYEN_DUNG_TU_DOANH_NGHIEP: '/quan-he-doanh-nghiep/tuyen-dung-tu-doanh-nghiep',
      },
      CBVC: {
        BASE: '/can-bo-vien-chuc',
      },
      TIN_TUC_SU_KIEN: {
        BASE: '/tin-tuc-su-kien',
      },
      NGUOI_HOC: {
        BASE: '/nguoi-hoc',
        SINH_VIEN: '/nguoi-hoc/sinh-vien',
        HOC_VIEN: '/nguoi-hoc/hoc-vien',
        NGHIEN_CUU_SINH: '/nguoi-hoc/nghien-cuu-sinh',
        CUU_SINH_VIEN: '/nguoi-hoc/cuu-sinh-vien',
      },
      THONG_BAO: {
        BASE: '/thong-bao',
      },
      TUYEN_SINH: {
        BASE: '/tuyen-sinh',
      },
      LIEN_HE: {
        BASE: '/lien-he',
      },



      LEAGUES: {
        BASE: '/leagues'
      },
      FIXTURES: {
        BASE: '/fixtures'
      },


    },
    MANAGEMENT: {
      ADMIN_PROFILE: '/management/profile',
      DASHBOARD: '/management/dashboard',

      BASE: '/management',

      CATEGORIES: '/management/categories',
      ACADEMIC_RANKS: '/management/categories/academic-ranks',

      BANNER_SLIDE: '/management/banner-slide',

      SETTINGS: '/management/settings',
      COMMON_SETTINGS: '/management/settings/common',
    },
  },

  EXTERNAL_URL: {
    ONLINE_OFFICE: 'https://hcmute.edu.vn',
    SITEMAP: '../sitemap.xml',
    GV_CBVC: 'https://hcmute.edu.vn',
    SV: 'https://hcmute.edu.vn',
  },
};
