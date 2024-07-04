/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { Paginate } from './paginate.model';

export const pluginsModules = [
  CommonModule,
  FormsModule,
  // ReactiveFormsModule,
  NzGridModule,
  NzButtonModule,
  NzInputNumberModule,
];
@Component({
  selector: 'app-table-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss'],
  standalone: true,
  imports: pluginsModules,
})
export class TablePaginateComponent {
  @Input() pageConfig!: Paginate<any>;
  @Output() pageChange: EventEmitter<Paginate<any>> = new EventEmitter<Paginate<any>>();
  @Output() numOfItemChange: EventEmitter<Paginate<any>> = new EventEmitter<Paginate<any>>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).SHARED.PAGINATE;
  //////////////////////////////

  setPage(page: number): void {
    if (page > 0 && page <= this.pageConfig.totalPage && page !== this.pageConfig.currentPage) {
      this.pageConfig.currentPage = page;
      this.refreshPage();
    }
  }

  changedPage(page: number): void {
    if (page - 1 > 0 && page - 1 < this.pageConfig.totalPage) {
      this.pageConfig.currentPage = page;
      this.refreshPage();
    } else {
      this.pageConfig.currentPage = 1;
      this.refreshPage();
    }
  }

  changedNumOfItem(numOfItem: string): void {
    this.pageConfig.limit = Number.parseInt(numOfItem, 10);
    this.pageConfig.currentPage = 1;
    this.refreshPage();
  }

  refreshPage(): void {
    this.pageChange.emit(this.pageConfig);
  }
}
