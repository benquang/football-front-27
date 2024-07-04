import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachTtSkTbComponent } from './danh-sach-tt-sk-tb.component';

describe('DanhSachTtSkTbComponent', () => {
  let component: DanhSachTtSkTbComponent;
  let fixture: ComponentFixture<DanhSachTtSkTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DanhSachTtSkTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhSachTtSkTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
