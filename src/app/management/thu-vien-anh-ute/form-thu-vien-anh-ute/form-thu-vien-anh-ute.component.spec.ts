import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThuVienAnhUteComponent } from './form-thu-vien-anh-ute.component';

describe('FormThuVienAnhUteComponent', () => {
  let component: FormThuVienAnhUteComponent;
  let fixture: ComponentFixture<FormThuVienAnhUteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormThuVienAnhUteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThuVienAnhUteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
