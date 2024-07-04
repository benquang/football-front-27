import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTinTucComponent } from './form-tin-tuc.component';

describe('FormTinTucComponent', () => {
  let component: FormTinTucComponent;
  let fixture: ComponentFixture<FormTinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTinTucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
