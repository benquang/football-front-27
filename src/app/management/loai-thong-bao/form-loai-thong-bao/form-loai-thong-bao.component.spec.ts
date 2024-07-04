import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoaiThongBaoComponent } from './form-loai-thong-bao.component';

describe('FormLoaiThongBaoComponent', () => {
  let component: FormLoaiThongBaoComponent;
  let fixture: ComponentFixture<FormLoaiThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoaiThongBaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoaiThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
