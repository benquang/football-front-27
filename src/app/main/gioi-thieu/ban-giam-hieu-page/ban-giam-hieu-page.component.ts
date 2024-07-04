import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardInfoBgh } from '@models/gioi-thieu/card-info-bgh.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-ban-giam-hieu-page',
  templateUrl: './ban-giam-hieu-page.component.html',
  styleUrls: ['./ban-giam-hieu-page.component.scss'],
})

export class BanGiamHieuPageComponent {

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Ban giám hiệu',
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: 'Giới thiệu',
        link: UrlConstant.ROUTE.MAIN.GIOI_THIEU.BASE,
      },
      {
        title: 'Cơ cấu tổ chức',
        link: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.BASE,
      },
    ],
  });
  panels = gioiThieuMenu;
  page_intro = '<div class="mt-2 text-action1 text-stone-950 font-normal normal-case "><br>Many desktop publishing packages and '
    + 'web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum Many desktop  '
    + 'publishing packages and web page editors now use Lorem Ipsum as their default modeltext, and a search for lorem ipsum</div>';

  listBgh: ICardInfoBgh[] = [{
    image: 'https://via.placeholder.com/375x420',
    name: 'TS. TRƯƠNG THỊ HIỀN',
    description:
      '<span class ="text-blue3 font-bold text-action1 ">Chức vụ:</span>'
      + ' Chức vụ: Phó Hiệu trưởng Trường Đại học Sư phạm Kỹ thuật, Tp.HCM',
    info: '<div class="text-blue3 font-bold text-action1 mb-[7px]">Phụ trách công tác:</div>'
      + '<div class="mb-[7px]">a/ Kế hoạch Tài chính; Thiết bị vật tư; Dự án xây dựng cơ bản; Hành chính tổng hợp; Quản trị Cơ sở vật chất;'
      + ' Các dự án tài trợ; Nội chính; Chương trình mục tiêu trong nước; Đề án tự chủ đại học; Quy chế chi tiêu nội bộ;'
      + ' Các dịch vụ thuê mặt bằng ngắn hạn và dài hạn; Thư viện;'
      + ' Ký túc xá; Y tế; An ninh trật tự, phòng cháy chữa cháy; Công tác Quốc phòng, Quân sự; Công tác Đoàn thể.</div>'
      + '<div class="mb-[7px]">b/ Phụ trách các đơn vị, đoàn thể:<br>Phòng Kế hoạch Tài chính; Phòng Thiết bị Vật tư;'
      + ' Phòng Quản trị Cơ sở Vật chất; Bộ phận Quản lý hồ sơ dự án; Thư viện; Ban quản lý Ký túc xá; Trạm Y tế; Công đoàn;'
      + ' Đoàn TNCSHCM; Hội Cựu giáo chức; Hội sinh viên; Hội Cựu chiến binh; Hội cựu sinh viên.</div>'
      + '<div class="mb-[7px]">c/ Phụ trách các khoa:<br>Xây dựng; Kinh tế; Công nghê hóa học và Thực phẩm; Thời trang và Du lịch;'
      + ' In – Truyền thông; Chính trị và Luật; Công nghệ Thông tin.</div>'
      + '<div class="mb-[7px]">d/ Các trung tâm:<br>Dịch vụ sinh viên; Đào tạo Ngắn hạn; Nghiên cứu và chuyển giao công nghệ; Tin học; Kỹ t'
      + 'huật Tổng hợp; Hướng nghiệp và Đào tạo Việt Nhật; Giáo dục thể chất và Quốc phòng; Nghiên cứu và Ứng dụng Kỹ thuật Xây dựng.</div>'
      + '<div class="mb-[7px]">đ/ Được ký duyệt và ký hợp đồng theo ủy quyền của Phó hiệu trưởng Phú trách Trường.</div>'
      + '<div class="mb-[7px]">e/ Thực hiện các nhiệm vụ khác theo sự phân công của Phó Hiệu trưởng Phú trách Trường.</div>',
    contact: '<div class="text-blue3 font-bold text-action1 mb-[7px]">Liên hệ: </div>'
      + '<div class="mb-[7px]">Điện thoại: 028.37221223</div>'
      + 'Email: hientt@hcmute.edu.vn',
  },
  {
    image: 'https://via.placeholder.com/375x420',
    name: 'PGS.TS LÊ HIẾU GIANG',
    description:
      '<span class ="text-blue3 font-bold text-action1 ">Chức vụ:</span>'
      + ' Phó Hiệu trưởng – Phụ trách Trường Đại học Sư phạm Kỹ thuật, Tp.HCM',
    info: '<div class="text-blue3 font-bold text-action1 mb-[7px]">Phụ trách công tác:</div>'
      + '<div class="mb-[7px]">a/ Lãnh đạo, quản lý toàn diện mọi hoạt động thuộc chức năng, nhiệm vụ, quyền hạn của nhà trường và lãnh '
      + 'đạo Trường được quy định trong Luật Giáo dục đại học, Quy chế làm việc của Trường và các văn bản quy phạm pháp luật khác có liên'
      + ' quan.</div>'
      + '<div class="mb-[7px]">b/ Trực tiếp chỉ đạo các lĩnh vực: Quy hoạch; Kế hoạch chiến lược; Tổ chức cán bộ; Thi đua khen thưởng;'
      + ' Thanh tra; Đào tạo; Quản lý văn bằng – chứng chỉ; Dạy học số; Khoa học Công nghệ; Quan hệ quốc tế; Truyền thông;'
      + ' đổi mới phương pháp dạy và học, Kiểm tra đánh giá sinh viên, công tác chính trị và quản lý sinh viên,'
      + 'Đề án Ngoại ngữ; Đảm bảo và Kiểm tra chất lượng; Quan hệ Doanh nghiệp.</div>'
      + '<div class="mb-[7px]">c/ Trực triếp phụ trách các đơn vị: Phòng Đào tạo; Phòng Đào tạo Không chính quy; Phòng Tổ chức Hành chính; '
      + 'Phòng Thanh tra Giáo dục; Phòng Truyền thông; phòng Quan hệ Doanh nghiệp; Phòng Tuyển sinh và Công tác Sinh viên; '
      + 'Phòng Khoa học Công nghệ - Quan hệ Quốc tế; Phòng Đảm bảo Chất lượng.</div>'
      + '<div class="mb-[7px]">d/ Trực tiếp phụ trách các khoa, trường, viện: Điện – Điện tử;  Cơ khí Chế tạo máy; Cơ khí Động lực;'
      + ' Đào tạo Chất lượng Cao; Khoa học Ứng dụng; Ngoại ngữ; Đào tạo Quốc tế; Viện Sư phạm Kỹ thuật; '
      + 'Trường Trung học Kỹ thuật thực hành.</div>'
      + '<div class="mb-[7px]">đ/ Trực tiếp phụ trách các Trung tâm, tạp chí: Dạy học số; Công nghệ phần mềm; Sáng tạo và Khởi nghiệp; '
      + 'Thông tin Máy tính; Tư vấn thiết kế, chế tạo thiết bị công nghiệp; Ngoại ngữ; Phát triển Ngôn ngữ; Nghiên cứu năng lượng tái tạo; '
      + 'Kỹ thuật Công nghệ Môi trường; Trung tâm Việt Đức; Tạp chí Khoa học Giáo dục kỹ thuật.</div>'
      + '<div class="mb-[7px]">e/ Là chủ tài khoản số 1 của nhà trường</div>',
    contact: '<div class="text-blue3 font-bold text-action1 mb-[7px]">Liên hệ: </div>'
      + '<div class="mb-[7px]">Điện thoại: 028.37221223</div>'
      + 'Email: gianglh@hcmute.edu.vn',
  },
  ];
}
