import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChuongTrinhDaoTaoComponent } from './list-chuong-trinh-dao-tao.component';

describe('ListChuongTrinhDaoTaoComponent', () => {
  let component: ListChuongTrinhDaoTaoComponent;
  let fixture: ComponentFixture<ListChuongTrinhDaoTaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChuongTrinhDaoTaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChuongTrinhDaoTaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
