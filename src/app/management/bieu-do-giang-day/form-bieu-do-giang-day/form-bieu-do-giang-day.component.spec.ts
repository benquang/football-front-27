import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBieuDoGiangDayComponent } from './form-bieu-do-giang-day.component';

describe('FormBieuDoGiangDayComponent', () => {
  let component: FormBieuDoGiangDayComponent;
  let fixture: ComponentFixture<FormBieuDoGiangDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBieuDoGiangDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBieuDoGiangDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
