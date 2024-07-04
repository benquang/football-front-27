import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoaiThongBaoComponent } from './list-loai-thong-bao.component';

describe('ListLoaiThongBaoComponent', () => {
  let component: ListLoaiThongBaoComponent;
  let fixture: ComponentFixture<ListLoaiThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLoaiThongBaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLoaiThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
