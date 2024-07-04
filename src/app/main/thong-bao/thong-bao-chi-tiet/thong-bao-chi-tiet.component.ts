import { Component } from '@angular/core';

import { UrlConstant } from '@constants/url.constant';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

import { IChiTietBaiViet } from '@models/tin-tuc-sk/chi-tiet.model';

@Component({
  selector: 'app-thong-bao-chi-tiet',
  templateUrl: './thong-bao-chi-tiet.component.html',
  styleUrls: ['./thong-bao-chi-tiet.component.scss'],
})
export class ThongBaoChiTietComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    THONG_BAO_CHI_TIET: 'Thông báo chi tiết',
    THONG_BAO: 'Thông báo',
    TRANG_CHU: 'Trang chủ',
  } : {
    THONG_BAO_CHI_TIET: 'Notification details',
    THONG_BAO: 'Notifications',
    TRANG_CHU: 'Home',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.THONG_BAO_CHI_TIET,
    listBreadcrumb: [
      {
        title: this.listBreadcrumbTitle.TRANG_CHU,
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: this.listBreadcrumbTitle.THONG_BAO,
        link: UrlConstant.ROUTE.MAIN.THONG_BAO.BASE,
      },
    ],
  });

  thongBaoLienQuanTitle = this.langCode === 'vi' ?
    'Thông báo liên quan' : 'Related notifications';
  thongBaoXemNhieuNhatTitle = this.langCode === 'vi' ?
    'Thông báo xem nhiều nhất' : 'Most watched notifications';

  chiTiet: IChiTietBaiViet = {
    id: 0,
    tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    anhBia: '',
    noiDung: `
        <div>
          <div class="text-justify">
            <p class="leading-relaxed"></p>
            <span class="text-title3, text-black font-bold mb-2">Lấy cảm hứng từ hòn đảo thiên
              đường, viên bích ngọc nồng nàn mang hơi thở Địa Trung Hải, Léman Cap Residence lần đầu
              đem Santorini về ngay trên Hạ Long – đại lộ trung tâm đẹp nhất tại thành phố biển Vũng
              Tàu.
            </span>
            <p class="leading-relaxed"></p>
            <span class="text-title3, text-black font-bold mb-2">Từ câu chuyện thiên đường
              Santorini, điểm đến của các ngôi sao Hollywood
            </span>
            <p class="leading-relaxed">Trong danh sách 10 hòn đảo “thiên đường nơi hạ giới” do Tạp
              chí Travel + Leisure nổi tiếng của Mỹ bình chọn, Santorini luôn giữ vững vị trí top
              đầu. Không chỉ thế, nơi đây còn luôn trụ vững với danh hiệu “Top 20 địa điểm du lịch
              đắt đỏ nhất thế giới” với các dịch vụ nghỉ dưỡng giải trí đẳng cấp 5 sao. Điều đó cũng
              lý giải vì sao nhiều ngôi sao Hollywood nổi tiếng thế giới luôn chọn Santorini cho kỳ
              nghỉ của mình.<br>
              Đồn rằng “Bà Smith” Angelina Jolie từng mua biệt thự ngay trên đảo Santorini để làm
              nơi nghỉ ngơi hàng năm. Nếu một lần lạc bước đến đây, rất có thể bạn sẽ bắt gặp vợ
              chồng Tom Hanks, hay cặp đôi Shakira – Pique, cầu thủ bóng rổ Michael Jordan.<br>
              Hay như hình ảnh về ngôi sao ca nhạc Justin Bieber đã dạo bước đến đây vào một buổi
              chiều tháng 8 thưởng thức những món ăn ngon và uống rượu vang, đặc sản trứ danh của
              vùng đất này được làm từ loại nho trồng trên những ngọn núi lửa cách đây hàng nghìn
              năm.<br>
              Santorini luôn là thỏi nam châm có sức hút khó cưỡng với kiến trúc đặc trưng phong
              cách Cycladic (kiến trúc thềm lục địa), một phần không thể tách rời của văn hoá vùng
              Địa Trung Hải thể hiện triết lý nhân sinh tương hỗ, trong đó con người hoà hợp tuyệt
              đối với thiên nhiên.<br>
              Với những mái vòm màu xanh coban đặc trưng đầy nổi bật hay mảng tường gam màu rực rỡ
              nằm trải dài theo bờ biển Aegean đã làm nên một Santorini say đắm lòng người.<br>

            </p>
            <span class="text-title3, text-black font-bold mb-2">Đến viên kim cương Léman Cap
              Residence ngay trung tâm thành phố biển Vũng Tàu…
            </span>
            <p class="leading-relaxed">
              Giờ đây không cần đi quá xa, hình ảnh Santorini trong Léman Cap Residence chính là
              thiên đường mà các tín đồ yêu du lịch đều ao ước một lần đặt chân đến, đã xuất hiện
              ngay cung đường Hạ Long đẹp nhất thành phố biển Vũng Tàu.<br>
              Nói về cung đường Hạ Long, đây luôn là nơi sinh sống trong mơ của người dân Vũng Tàu
              với sự phát triển vượt bậc về hạ tầng giao thông, bao bọc bởi hàng ngàn dịch vụ vui
              chơi giải trí đẳng cấp 5 sao. Dọc theo đại lộ này có rất nhiều điểm du lịch nổi tiếng
              như: Bãi Trước, Bãi Dứa, mũi Nghinh Phong, xa hơn nữa là Bãi Dâu và khu du lịch Bãi
              Sau,… nơi mỗi năm đón hàng triệu lượt khách du lịch.<br>
              Chỉ mất vài phút đi bộ từ căn hộ Léman Cap Residence bước ra đường Hạ Long là có thể
              dễ dàng tiếp cận hàng loạt các shophouse hàng hiệu, các nhà hàng đặc sản, dịch vụ giải
              trí, nhiều đền chùa và nhà thờ mang tính biểu tượng văn hóa Vũng Tàu.<br>
              Không những thế, với lợi thế là tuyến đường trung tâm của thành phố, từ Hạ Long có thể
              di chuyển đến các khu vực khác một cách nhanh chóng và dễ dàng. Đó là sân bay Long
              Thành, cầu kết vành đai 4 nối miền Tây với Vũng Tàu và nhiều đường cao tốc khác.<br>
              Tuyệt tác Léman Cap Residence mê hoặc lòng người không chỉ bởi kiến trúc Santorini độc
              đáo với 2 gam màu trắng – xanh đặc trưng, mà còn sở hữu tầm nhìn hướng biển độc nhất,
              lưng tựa núi đồi xanh mát.<br>
              Rừng giữa phố sầm uất, Léman Cap Residence là một quần thể nghỉ dưỡng riêng biệt với
              hệ sinh thái rừng tự nhiên núi Nhỏ xanh mát, các loài hoa khoe sắc quanh năm, chim
              muông hót líu lo. Phía trước là tầm nhìn bao quát vẻ đẹp của biển cả.<br>
              Chắc chắn Léman Cap Residence sẽ gây thương nhớ cho ai có cơ hội một lần đặt chân đến,
              bởi tuyệt tác Santorini độc đáo, bởi biển xanh ngút ngàn trước mắt, bởi núi rừng xanh
              mát trong lành sau lưng, và xung quanh là khu phức hợp vui chơi giải trí đa sắc màu vô
              cùng nhộn nhịp. Tất cả tạo nên một Léman Cap Residence danh giá ngay trung tâm thành
              phố biển Vũng Tàu.<br>
            </p>
          </div>
        </div>
      `,
    ngayDang: new Date(),
  };

  thongBaos: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
  ];




  thongBaoLienQuans: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
  ];

  currentDate: Date = new Date();

}
