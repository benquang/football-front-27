import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuuSinhVienComponent } from './cuu-sinh-vien.component';

describe('CuuSinhVienComponent', () => {
  let component: CuuSinhVienComponent;
  let fixture: ComponentFixture<CuuSinhVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuuSinhVienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuuSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
