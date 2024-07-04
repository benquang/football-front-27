import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { IChiTietBaiViet } from '@models/tin-tuc-sk/chi-tiet.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

@Component({
  selector: 'app-chi-tiet-su-kien',
  templateUrl: './chi-tiet-su-kien.component.html',
  styleUrls: ['./chi-tiet-su-kien.component.scss'],
})
export class ChiTietSuKienComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    SU_KIEN_CHI_TIET: 'Sự kiện chi tiết',
    TRANG_CHU: 'Trang chủ',
    TIN_TUC: 'Tin tức',
  } : {
    SU_KIEN_CHI_TIET: 'Event detail',
    TRANG_CHU: 'Home',
    TIN_TUC: 'News',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.SU_KIEN_CHI_TIET,
    listBreadcrumb: [
      {
        title: this.listBreadcrumbTitle.TRANG_CHU,
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: this.listBreadcrumbTitle.TIN_TUC,
        link: UrlConstant.ROUTE.MAIN.TIN_TUC_SU_KIEN.BASE,
      },
    ],
  });

  suKienLienQuanTitle = this.langCode === 'vi' ? 'Sự kiện liên quan'
    : 'Related Events';

  suKienXemNhieuNhatTitle = this.langCode === 'vi' ? 'Sự kiện xem nhiều nhất' : 'Most watched events';
  suKienTitle = this.langCode === 'vi' ? 'Sự kiện' : 'Events';

  chiTiet: IChiTietBaiViet = {
    id: 0,
    tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    anhBia: 'http://localhost:4200/assets/img/bg/default-banner-home.jpg',
    noiDung: `
    <span class="text-title3, text-black font-bold mb-2"> DIỄN VĂN KHAI GIẢNG NĂM HỌC 2021–
      2022
    </span>
    <p class="leading-relaxed"> Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh là
      trường đại học đặc thù, đào
      tạo giáo viên kỹ thuật, là trường đầu ngành trong hệ thống Sư phạm Kỹ thuật của cả
      nước, có bề dày lịch sử hình thành và phát triển đến nay là 59 năm.<br>
      Tiền thân của trường ta là Ban Cao đẳng Sư phạm Kỹ thuật thuộc trường Bách Khoa Phú
      Thọ, được thành lập ngày 5/10/1962 theo quyết định số 1082/GD của Chính phủ Việt Nam
      Cộng hoà ở Miền Nam Việt nam. Khi mới thành lập, Ban Cao đẳng Sư phạm Kỹ thuật nằm
      trong khuôn viên trường Bách Khoa Phú Thọ, nay là trường Đại học Bách Khoa Tp. Hồ Chí
      Minh.<br>
      Năm 1972, Ban được đổi tên thành Trung tâm Cao đẳng Sư phạm Kỹ thuật Nguyễn Trường Tộ
      Thủ Đức, năm học đầu tiên 1972-1973 được khai giảng tại cơ sở ở Thủ Đức. <br>
      Năm 1974, Trung tâm được nâng cấp thành trường Đại học Giáo dục Thủ Đức thuộc Viện Đại
      học Bách khoa Thủ Đức.<br>
      Ngày 27.10.1976, trường được mang tên trường Đại học Sư phạm Kỹ thuật Thủ Đức theo
      quyết định số 426/TTg của Thủ tướng Chính phủ nước Việt Nam Dân chủ Cộng hoà (nay là
      Cộng hoà Xã hội Chủ nghĩa Việt Nam).<br>
      Năm 1984, trường đổi tên thành Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh sau khi
      sáp nhập thêm trường Trung học Công nghiệp Thủ Đức ở kề bên. <br>
      Năm 1991, sáp nhập thêm trường Sư phạm Kỹ thuật V do Liên Xô tài trợ. <br>
      Năm 1995 trường là thành viên không chính thức của Đại học Quốc gia Tp. Hồ Chí Minh.
      <br>
      Năm 1997 trường tiếp quản Trung tâm Đào tạo nghề Việt Nam –Hàn Quốc, có diện tích 4,5
      ha tại Quận 9, ngày nay là Trường Trung học Kỹ thuật Thực hành thuộc trường Đại học Sư
      phạm Kỹ thuật Tp. Hồ Chí Minh. <br>
      Năm 2000, trường tách khỏi Đại học Quốc gia, trực thuộc Bộ Giáo dục-Đào tạo, tên
      trường được khôi phục là Trường Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh cho đến ngày
      nay. br
      Trải qua 59 năm thành lập và phát triển (05/10/1962 –05/10/2021), qua nhiều thời kỳ,
      nhiều giai đoạn phát triển lịch sử, Trường ĐH SPKT TPHCM đã và đang phát triển mạnh
      mẽ, khẳng định uy tín của Nha trường, góp phần đào tạo và bồi dưỡng nguồn nhân lực cho
      hệ thống giáo dục nghề nghiệp cũng như cung cấp đội ngũ kỹ sư chất lượng cao cho cả
      nước, góp sức to lớn vào thành tựu kinh tế xã hội của cả nước. <br>
      Năm học 2020 – 2021 đi qua trong bối cảnh thế giới và cả nước bị ảnh hưởng nghiêm
      trọng bởi tình hình căng thẳng và kéo dài của dịch bệnh Covid 19. Dưới sự lãnh đạo của
      Đảng ủy, Hội đồng trường, Ban Giám hiệu, phối hợp với các tổ chức, đoàn thể trong nhà
      trường; tập thể cán bộ, viên chức, người lao động và người học của Trường Đại học Sư
      phạm Kỹ thuật Tp.HCM đã đồng lòng vượt qua khó khăn hoàn thành tốt nhiệm vụ năm học
      với chủ đề “Sáng tạo và khởi nghiệp”. <br>
      Với những thành tựu về tuyển sinh, nghiên cứu khoa học, chuyển đổi số và các thành
      công trong cải cách, Trường ta đã khẳng định vị thế của mình trong nền giáo dục đại
      học nước nhà, trở thành mô hình cải cách giáo dục thành công được World Bank và các
      trường trong và ngoài nước học tập. <br>
      Thông qua báo cáo tổng kết năm học, chúng ta có thể thấy được những quả ngọt từ sự nỗ
      lực, phấn đấu của tập thể lãnh đạo, CBVC, Giảng viên Trường về nhiều mặt.<br>
    </p>
    <span class="text-title3, text-black font-bold mb-2">Nổi bật trong số đó là mảng Tự chủ
      đại học, chúng ta đã liên tục đổi mới sáng tạo, cung cấp nguồn nhân lực và các sản
      phẩm khoa học chất lượng cao;</span>
    <p class="leading-relaxed">
      Chương trình đào tạo của nhà trường từng bước được cập nhật cải tiến, tiệm cận với
      chuẩn khu vực và quốc tế, Nhà trường đã kiểm định thành công 14 chương trình đào tạo
      theo tiêu chuẩn AUN-QA, triển khai công tác đánh giá ngoài 05 chương trình đào tạo mới
      và chuẩn bị đánh giá ngoài cấp cơ sở giáo dục theo AUN-QA. <br>
      Hội đồng trường Trường Đại học Sư phạm Kỹ thuật TP. Hồ Chí Minh nhiệm kỳ 2020-2025
      được Bộ Giáo dục và Đào tạo ra QĐ công nhận ngày 20/11/2020, với 17 thành viên trong
      và ngoài trường; <br>
      Thành lập các phòng thực hành, thí nghiệm mới hiện đại theo xu hướng phát triển của
      thế giới bằng tổng số vốn đầu tư khoảng 194 tỷ đồng; <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2"> Nhằm bồi dưỡng nâng cao năng lực
      cho giảng viên, cán bộ quản lý, viên chức hành chính phù hợp với giáo dục 4.0.</span>
    <p class="leading-relaxed">
      Trong năm học 2020 - 2021, Nhà trường đã mở 03 lớp bồi dưỡng chức danh nghề nghiệp
      giảng viên, giảng viên chính, giảng viên cao cấp, 01 lớp bồi dưỡng lãnh đạo quản lý
      cấp phòng, 01 lớp Trung cấp Chính trị - Hành chính, 01 lớp bồi dưỡng trí tuệ nhân tạo
      cho cán bộ viên chức, cử 552 lượt viên chức tham gia đào tạo bồi dưỡng trong nước.
      <br>
      Cử 30 viên chức tham gia 02 khóa học tiếng Anh online do Trường Đại học Kettering tổ
      chức phục vụ công tác nâng cao năng lực tiếng Anh của cán bộ viên chức tiến tới đưa
      tiếng Anh thành ngôn ngữ công sở trong nhà trường. <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2">Hoạt động NCKH có nhiều bước tiến
      đáng kể với số lượng đề tài NCKH tăng</span>
    <p class="leading-relaxed">
      Số lượng bài báo khoa học đăng trên tạp chí ISI/ Scopus năm học 2020-2021 đạt 191 bài
      tăng 38% so với năm học trước. Tổ chức thành công Hội nghị khoa học quốc tế Công nghệ
      xanh và Phát triển bền vững (GTSD) lần 5 vào tháng 11/2020 theo hình thức online; <br>
      Nhà trường đã thực hiện tổng cộng 8 hợp đồng chuyển giao công nghệ và sở hữu trí tuệ,
      tổng giá trị chuyển giao đạt 4,150 tỷ đồng, (năm học 2019-2020 (2,740 tỷ đồng)). <br>
      Phong trào NCKH trong sinh viên phát triển mạnh, có nhiều sản phẩm của sinh viên được
      công nhận và đưa vào thực tiễn, đã đạt nhiều giải cao trong các cuộc thi khoa học quốc
      gia. (đạt 03 giải nhì, 01 giải ba và 02 giải khuyến khích tại chung kết Giải thưởng
      sinh viên nghiên cứu khoa học năm 2020 do Bộ Giáo dục và Đào tạo tổ chức). <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2">Đặc biệt, các hoạt động sáng tạo và
      khởi nghiệp là chủ đề năm học, có nhiều điểm nhấn</span>
    <p class="leading-relaxed">
      Trong năm học, Nhà trường thành lập nhiều đội thi tham gia các cuộc thi liên quan đến
      sáng tạo khởi nghiệp và đạt được nhiều thành tích cao: Giải Nhất và Giải Ba Cuộc thi
      SV_Startup-2020, giải Nhóm khởi nghiệp xuất sắc nhất Cuộc thi Startup Wheel 2020, Giải
      Nhì Chung kết Cuộc đua số FPT 2020 và nhiều giải thưởng khác. Tổ chức thành công 12
      sân chơi NCKH cho SV điển hình như Rockwell Automation Competition, UTE Talent
      Logistics, Cuộc thi lập trình “trò chơi ánh sáng mừng giáng sinh”, Cuộc thi Hackathon
      2020, Cuộc thi Animal robot... Đặc biệt, Đoàn Thanh niên đã phối hợp với tỉnh Đoàn Phú
      Yên tổ chức thành công Cuộc thi Sáng tạo Robot Phú Yên 2021 cho học sinh THPT Phú Yên
      vào tháng 4/2021. <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2">Trong bối cảnh dịch bệnh căng
      thẳng, Nhà trường đã đẩy mạnh công tác chuyển đổi số trong quá trình dạy – học và quản
      trị nhà trường.</span>
    <p class="leading-relaxed">
      Trong năm học qua, các khóa học liên tục được tổ chức và vận hành nền tảng dạy học số
      trong toàn trường, với tổng cộng 5.274 lớp đối với hệ đại trà và 6.057 lớp đối với hệ
      chất lượng cao. Quy chế quản lý, tổ chức đào tạo trực tuyến đã cho phép các khóa học
      MOOCs ra đời và ngày càng được nâng cao về chất lượng bên cạnh hệ thống đào tạo trực
      tuyến - Trường ĐH ảo UTEx. <br>
      Đã hoàn thành giai đoạn 2 cho việc xây dựng Hệ thống quản lý hoạt động và lưu trữ dữ
      liệu cho hệ sinh thái HCMUTE 4.0 phục vụ nhà trường một cách hiệu quả giúp Nhà trường
      chủ động trong công tác tuyển sinh, xét tuyển, việc học, việc kiểm tra và thi trực
      tuyến đạt được kết quả vượt mong đợi. <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2">Công tác truyền thông giáo dục tiếp
      tục được chú trọng phát triển với hàng trăm chương trình được tổ chức truyền hình trực
      tiếp trên kênh UTETV</span>
    <p class="leading-relaxed">
      Kênh truyền hình UTE TV phát triển mạnh mẽ và phát huy vai trò tuyên truyền, cập nhật
      nhanh chóng và cung cấp thông tin của nhà trường đến người học và XH. Xây dựng mối
      quan hệ thân thiết với các báo đài lớn, góp phần to lớn trong việc quảng bá hình ảnh
      nhà trường đến xã hội. Trong bối cảnh dịch bệnh, Kênh truyền hình UTE TV tổ chức thực
      hiện các chương trình livestream thông qua Zoom, tổ chức các buổi tư vấn tuyển sinh,
      talkshow về ngành nghề tạo điều kiện cho học sinh và phụ huynh ở xa nắm bắt thông tin
      để chọn ngành phù hợp. <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2">Trong năm học 2020-2021, Trường Đại
      học Sư phạm Kỹ thuật TP. Hồ Chí Minh đã thành lập 17 hội đồng doanh nghiệp tư vấn
      ngành/nhóm ngành tại 11 Khoa, với kinh phí hỗ trợ cho các hoạt động tư vấn tổng cộng
      460 triệu đồng.</span>
    <p class="leading-relaxed">
      Phối hợp DN và các khoa/bộ môn tổ chức tổng cộng chương trình, hội thảo, chuyến xe
      tham quan nhà máy, xí nghiệp, doanh nghiệp cho sinh viên và giảng viên tham gia. <br>
      Tổ chức các chương trình tuyển dụng việc làm như Tuần lễ vàng tuyển dụng, Tuần lễ
      tuyển dụng nhân tài với 139 lượt doanh nghiệp tham gia các chương trình, mang đến
      5.050 cơ hội việc làm và 1.023 cơ hội thực tập, … <br>
    </p>
    <span class="text-title3, text-black font-bold mb-2"> Nhà trường đã kiện toàn Đội phản
      ứng nhanh phòng, chống dịch COVID-19 trong tình hình mới.</span>
    <p class="leading-relaxed">
      Kịp thời xây dụng các phương án làm việc trực tuyến, tuyên truyền, giáo dục CBVC và SV
      thực hiện nghiêm túc “thông điệp 5K” và thực hiện các biện pháp tăng cường công tác
      phòng, chống dịch Covid-19. Thành lập các đội hình tình nguyện của KTX, Đoàn TN và Hội
      SV và bố trí cán bộ công đoàn tham gia hỗ trợ cán bộ viên chức và sinh viên trong việc
      cung cấp thực phẩm, nhu yếu phẩm đến các khu phong tỏa, KTX. Trường ta thành lập Quỹ
      hỗ trợ Covid cho SV kẹt lại tại Tp.HCM, quỹ đã được khoảng 200 đơn vị và hàng trăm cá
      nhân đóng góp gần 600 triệu đồng tiền mặt. Bên cạnh hiện kim được đóng góp, nhà trường
      cũng tiếp nhận gần 1000 thùng mì, hơn 11 tấn gạo, 35 tấn rau củ, bánh mì thịt chả,
      trứng, các loại gia vị,.. <br>
      Từ số tiền trên, TTDVSV cùng Đoàn TN đã trao tặng hơn 2700 “phần quà nghĩa tình” gồm
      các nhu yếu phẩm cần thiết trị giá từ 300.000 đ – 1,5 triệu đồng, hơn 5000 phần rau củ
      quả cho các em SV đang còn ở lại Tp.HCM và gặp khó khăn khi TP thực hiện giãn cách.
      <br>
    </p>
    <img src="http://localhost:4200/assets/img/bg/default-banner-home.jpg"/>
    <p class="leading-relaxed">
      Ngoài việc thu hút tài trợ khủng về thiết bị của các doanh nghiệp nhằm giúp giữ mức
      học phí ở mức thấp nhất, nhà trường đã tập trung nguồn lực để tạo ra mô trường học tập
      tốt nhất cho SV theo xu hướng học tập 4.0 bằng việc đầu tư vào các hệ thống dạy và học
      trực tuyến, UTEx, MOOCs, ... mở rộng không gian sáng tạo cho GV, SV hướng đến chủ đề
      năm học mới 2021 – 2022: “Chuyển đổi số - Digital Transformation in HCMUTE”. <br>
      Kế thừa những thành công của năm học 2020 – 2021, nhà trường bước vào năm học 2021 -
      2022 với chủ đề: “Chuyển đổi số - Digital Transformation in HCMUTE”, ĐH Sư phạm Kỹ
      thuật Tp.HCM tiếp tục mong muốn mang đến chất lượng đào tạo tốt nhất, phù hợp với nhu
      cầu xã hội, một môi trường làm việc và học tập đầy tính nhân bản, sáng tạo và đặc biệt
      là luôn bắt kịp, đi đầu trong xu thế thời đại về chuyển đổi số, sáng tạo và khởi
      nghiệp, đưa thương hiệu của nhà trường vươn xa hơn nữa bằng việctiếp tục nâng cao chất
      lượng đại học trong điều kiện tự chủ. Trước những thời cơ và thách thức lớn, Lãnh đạo
      nhà trường kêu gọi toàn thể công chức, viên chức và học viên, sinh viên Trường Đại học
      Sư phạm Kỹ thuật Tp.HCM đoàn kết, nỗ lực nâng cao năng lực, phấn đấu trong giảng dạy,
      học tập và nghiên cứu cùng thực hiện đạt kết quả cao chủ đề năm học 2021- 2022, với
      các trọng tâm lớn như sau: <br>
      1. Kiện toàn nhân sự lãnh đạo trường; <br>
      2. Thi đua lập thành tích chào mừng 60 năm thành lập Trường; <br>
      3. Áp dụng Chuyển đổi số hệ thống quy trình, thủ tục của các lĩnh vực công tác như các
      quy trình, thủ tục tác nghiệp, thông tin 1 cửa, xử lý công việc, áp dụng chữ ký số,
      quản lý các hoạt động NCKH, giao dịch công nghệ, ... <br>
      4. Cơ cấu lại một số đơn vị chức năng đảm bảo quy định theo Nghị định số
      120/2020/NĐ-CP, Thành lập Khoa Quốc tế; <br>
      5. Xây dựng khung pháp lý giao tự chủ cho các đơn vị; <br>
      6. Tiếp tục các hoạt động nâng cao năng lực ngoại ngữ dành cho giảng viên; <br>
      7. Tăng cường chuyển đổi số dạy và học: XD các khóa UTEx -MOOC, UTEx -LMS, hồ sơ giảng
      dạy trực tuyến ePortfolio, ... <br>
      8. Triển khai các đề tài nghiên cứu khoa học liên quan đến IoT và AI <br>
      9. Tiếp tục triển khai công tác đánh giá ngoài cấp CTĐT và cấp cơ sở giáo dục theo
      tiêu chuẩn của Bộ và AUN-QA <br>
      - Cải tạo CSVC mạnh mẽ phù hợp xu hướng công nghệ và chủ đề năm học: Hoàn thành và đưa
      vào sử dụng MakerSpace, Không gian Sáng tạo khởi nghiệp BEEHIVE, Quy hoạch lại hoạt
      động dịch vụ, chuyển đổi nhà ăn sinh viên và siêu thị sinh viên hiện hữu thành không
      gian “Food court”, Cải tạo và nâng cấp cơ sở vật chất , Nâng cấp & cải tiến hệ thống
      công nghệ thông tin của Nhà trường, Triển khai Các công trình xây dựng Tòa nhà F2, Cải
      tạo nâng cấp khu A (Khoa Cơ khí Động lực), ... <br>
      Với tinh thần trách nhiệm cao, với tâm huyết và sự cống hiến của toàn thể CBVC của Nhà
      trường, sự nỗ lực của sinh viên, chúng ta tin rằng tất cả chúng ta sẽ đoàn kết, nỗ lực
      thực hiện và hoàn thành xuất sắc các mục tiêu nêu trên.
    </p>
  </div>`,
    ngayDang: new Date(),
  };

  suKiens: IThongBaoSuKienTinTuc[] = [
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


  suKienLienQuans: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      tag: 'Tin Tức',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      tag: 'Tin Tức',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      tag: 'Tin Tức',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      tag: 'Tin Tức',
      ngayDang: new Date(),
    },
  ];

}
