import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { NzTagModule } from 'ng-zorro-antd/tag';

const plugins = [
  CommonModule,
  RouterModule,
  NzTagModule,
];

@Component({
  selector: 'app-tb-tt-sk-side-panel',
  standalone: true,
  imports: plugins,
  templateUrl: './tb-tt-sk-side-panel.component.html',
  styleUrls: ['./tb-tt-sk-side-panel.component.scss'],
})
export class TbTtSkSidePanelComponent {
  @Input() title = '';
  @Input() tag = '';
  @Input() xemThemRouterLink = '';
  @Input() listData: IThongBaoSuKienTinTuc[] = [];

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  xemThemTitle = this.langCode === 'vi' ? 'Xem thêm'
    : 'View more';
}
