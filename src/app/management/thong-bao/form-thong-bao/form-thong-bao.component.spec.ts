import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThongBaoComponent } from './form-thong-bao.component';

describe('FormThongBaoComponent', () => {
  let component: FormThongBaoComponent;
  let fixture: ComponentFixture<FormThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThongBaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
