import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

export const pluginsModules = [
  CommonModule,
  RouterModule,
  NzBreadCrumbModule,
];

@Component({
  selector: 'app-breadcrumb-home',
  templateUrl: './breadcrumb-home.component.html',
  styleUrls: ['./breadcrumb-home.component.scss'],
  standalone: true,
  imports: pluginsModules,
})

export class BreadcrumbHomeComponent {
  @Input() breadcrumb!: BreadCrumbHome;
}
