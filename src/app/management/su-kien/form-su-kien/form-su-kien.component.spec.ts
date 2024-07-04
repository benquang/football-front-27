import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuKienComponent } from './form-su-kien.component';

describe('FormSuKienComponent', () => {
  let component: FormSuKienComponent;
  let fixture: ComponentFixture<FormSuKienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuKienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
