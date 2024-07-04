import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDoanhNghiepLkComponent } from './form-doanh-nghiep-lk.component';

describe('FormDoanhNghiepLkComponent', () => {
  let component: FormDoanhNghiepLkComponent;
  let fixture: ComponentFixture<FormDoanhNghiepLkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDoanhNghiepLkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDoanhNghiepLkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
