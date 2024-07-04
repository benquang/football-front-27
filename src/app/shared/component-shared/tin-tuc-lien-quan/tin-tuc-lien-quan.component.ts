import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
const pluginsModules = [
  CommonModule,
  NzTagModule,
  NzGridModule,
];
@Component({
  selector: 'app-tin-tuc-lien-quan',
  standalone: true,
  imports: [pluginsModules],
  templateUrl: './tin-tuc-lien-quan.component.html',
  styleUrls: ['./tin-tuc-lien-quan.component.scss'],
})
export class TinTucLienQuanComponent {
  @Input() title = '';
  @Input() listData: IThongBaoSuKienTinTuc[] = [];
}
