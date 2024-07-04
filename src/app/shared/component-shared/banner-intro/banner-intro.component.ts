import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

const plugins = [
  CommonModule,
];

@Component({
  selector: 'app-banner-intro',
  templateUrl: './banner-intro.component.html',
  styleUrls: ['./banner-intro.component.scss'],
  standalone: true,
  imports: plugins,
})
export class BannerIntroComponent {
  @Input() title = '';
  @Input() imgSrc = '';
}
