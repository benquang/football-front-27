import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNckhComponent } from './form-nckh.component';

describe('FormNckhComponent', () => {
  let component: FormNckhComponent;
  let fixture: ComponentFixture<FormNckhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNckhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNckhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
