import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IChiTietBaiViet } from '@models/tin-tuc-sk/chi-tiet.model';

export const pluginsModules = [
  CommonModule,
];
@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss'],
  standalone: true,
  imports: [pluginsModules],
})
export class ContentDisplayComponent {
  @Input() chiTiet!: IChiTietBaiViet;

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  shareTitle = this.langCode === 'vi' ? 'Chia sẻ bài viết này'
    : 'Share this post';
}
