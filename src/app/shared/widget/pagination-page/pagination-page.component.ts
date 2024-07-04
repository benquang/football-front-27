import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

const plugins = [
  CommonModule,
  RouterModule,
  NzPaginationModule,
];

@Component({
  selector: 'app-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss'],
  standalone: true,
  imports: plugins,
})
export class PaginationPageComponent {
  @Input() totalItems = 0;
  @Input() limit = 10;
  @Input() currentPage = 1;
  @Output() pageChanged = new EventEmitter<number>();
}
