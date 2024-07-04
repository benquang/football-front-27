import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoaVienTrucThuocPageComponent } from './khoa-vien-truc-thuoc-page.component';

describe('KhoaVienTrucThuocPageComponent', () => {
  let component: KhoaVienTrucThuocPageComponent;
  let fixture: ComponentFixture<KhoaVienTrucThuocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhoaVienTrucThuocPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhoaVienTrucThuocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
