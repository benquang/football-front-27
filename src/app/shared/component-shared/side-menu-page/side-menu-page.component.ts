import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenu } from '@models/common/side-menu.model';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

const plugins = [
  CommonModule,
  RouterModule,
  NzCollapseModule,
];

@Component({
  selector: 'app-side-menu-page',
  templateUrl: './side-menu-page.component.html',
  styleUrls: ['./side-menu-page.component.scss'],
  standalone: true,
  imports: plugins,
})
export class SideMenuPageComponent {
  @Input() panels: SideMenu[] = [];
}
