import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThamQuanThucTapComponent } from './form-tham-quan-thuc-tap.component';

describe('FormThamQuanThucTapComponent', () => {
  let component: FormThamQuanThucTapComponent;
  let fixture: ComponentFixture<FormThamQuanThucTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThamQuanThucTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormThamQuanThucTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
