import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { NzTagModule } from 'ng-zorro-antd/tag';

const plugins = [
  CommonModule,
  NzTagModule,
];

@Component({
  selector: 'app-danh-sach-tt-sk-tb',
  standalone: true,
  imports: plugins,
  templateUrl: './danh-sach-tt-sk-tb.component.html',
  styleUrls: ['./danh-sach-tt-sk-tb.component.scss'],
})
export class DanhSachTtSkTbComponent {
  @Input() listData: IThongBaoSuKienTinTuc[] = [];
}
