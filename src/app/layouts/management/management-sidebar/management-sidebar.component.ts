import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { AuthService } from '@services/auth/auth.service';
import { NzSubMenuComponent } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-management-sidebar',
  templateUrl: './management-sidebar.component.html',
  styleUrls: ['./management-sidebar.component.scss'],
})
export class ManagementSidebarComponent implements OnInit {

  @ViewChildren('subMenuItem') subMenuItem!: QueryList<NzSubMenuComponent>;

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).LAYOUT.MNG.SIDEBAR;
  //////////////////////////////

  nameOfUser = '';
  avatarOfUser = '';

  listMenu: {
    icon: string;
    title: string;
    routerLink: string;
    isHaveChild: boolean;
    roles: string[];
    listChild: {
      icon: string;
      title: string;
      roles: string[]; // Empty = all roles
      routerLink: string;
    }[];
  }[] = [];

  listRoleUser: string[] = [];

  constructor(
    private authSvc: AuthService,
    // private nhanVienSvc: NhanVienService,
  ) { }

  ngOnInit(): void {
    // this.nhanVienSvc.getCurrentLogin()
    //   .subscribe(res => {
    //     this.listRoleUser = res.roles;
    //   });

    this.nameOfUser = this.authSvc.getNameOfLogin();
    this.avatarOfUser = this.authSvc.getAvatarOfLogin();

    this.listMenu = [
      {
        roles: [
          SystemConstant.MNG_ROLE.ADMIN,
        ],
        icon: 'fa-solid fa-solar-panel', // If have child, this icon must using from zorro
        title: this.langData.TONG_QUAN,
        routerLink: UrlConstant.ROUTE.MANAGEMENT.DASHBOARD,
        isHaveChild: false,
        listChild: [],
      },
      {
        roles: [
          SystemConstant.MNG_ROLE.ADMIN,
        ],
        icon: 'pic-left', // If have child, this icon must using from zorro
        title: this.langData.DANH_MUC,
        routerLink: '',
        isHaveChild: true,
        listChild: [
          // {
          //   icon: 'fa-solid fa-certificate',
          //   title: this.langData.HOC_HAM,
          //   routerLink: UrlConstant.ROUTE.MANAGEMENT.ACADEMIC_RANKS,
          //   roles: []
          // },
          // {
          //   icon: 'fa-solid fa-graduation-cap',
          //   title: this.langData.HOC_VI,
          //   routerLink: UrlConstant.ROUTE.MANAGEMENT.DEGREE_RANKS,
          //   roles: []
          // },
          // {
          //   icon: 'fa-solid fa-book',
          //   title: this.langData.NGANH,
          //   routerLink: UrlConstant.ROUTE.MANAGEMENT.MAJORS,
          //   roles: []
          // },
          // {
          //   icon: 'fa-solid fa-university',
          //   title: this.langData.KHOA,
          //   routerLink: UrlConstant.ROUTE.MANAGEMENT.FACULTIES,
          //   roles: []
          // },
          // {
          //   icon: 'fa-solid fa-list',
          //   title: this.langData.LINH_VUC,
          //   routerLink: UrlConstant.ROUTE.MANAGEMENT.RESEARCH_DOMAINS,
          //   roles: []
          // },
          // {
          //   icon: 'fa-solid fa-user-tag',
          //   title: this.langData.CHUC_VU,
          //   routerLink: UrlConstant.ROUTE.MANAGEMENT.POSITIONS,
          //   roles: []
          // },
        ],
      },
      {
        roles: [
          SystemConstant.MNG_ROLE.ADMIN,
        ],
        icon: 'setting', // If have child, this icon must using from zorro
        title: this.langData.CAU_HINH,
        routerLink: '',
        isHaveChild: true,
        listChild: [],
      },
      {
        roles: [
          SystemConstant.MNG_ROLE.ADMIN,
        ],
        icon: 'code-sandbox', // If have child, this icon must using from zorro
        title: this.langData.CONG_VIEC,
        routerLink: '',
        isHaveChild: true,
        listChild: [],
      },
      {
        roles: [
          SystemConstant.MNG_ROLE.ADMIN,
        ],
        icon: 'user', // If have child, this icon must using from zorro
        title: this.langData.SINH_VIEN,
        routerLink: '',
        isHaveChild: true,
        listChild: [],
      },
    ];
  }

  checkRole(listRoleCheck: string[]) {
    if (!listRoleCheck.length) {
      return true;
    }
    return !!this.listRoleUser.filter(value => listRoleCheck.includes(value)).length;
  }

  autoHideMenu() {
    this.subMenuItem.forEach(e => {
      if (!e.isSelected && !e.isActive && e.nzOpen) {
        e.toggleSubMenu();
      }
    });
  }
}
