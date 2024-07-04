import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacNghanhCuaKhoaSubpageComponent } from './cac-nghanh-cua-khoa-subpage.component';

describe('CacNghanhCuaKhoaSubpageComponent', () => {
  let component: CacNghanhCuaKhoaSubpageComponent;
  let fixture: ComponentFixture<CacNghanhCuaKhoaSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacNghanhCuaKhoaSubpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacNghanhCuaKhoaSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
