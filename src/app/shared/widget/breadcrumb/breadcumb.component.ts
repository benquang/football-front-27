import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

export const pluginsModules = [
  CommonModule,
  RouterModule,
  NzBreadCrumbModule,
];
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: pluginsModules,
})
export class BreadcrumbComponent {

  @Input() breadcrumb!: BreadCrumb;

}
