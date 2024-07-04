import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuuSinhVienComponent } from './form-cuu-sinh-vien.component';

describe('FormCuuSinhVienComponent', () => {
  let component: FormCuuSinhVienComponent;
  let fixture: ComponentFixture<FormCuuSinhVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCuuSinhVienComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormCuuSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
