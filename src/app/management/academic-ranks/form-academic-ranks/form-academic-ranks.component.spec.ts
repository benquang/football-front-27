import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcademicRanksComponent } from './form-academic-ranks.component';

describe('FormAcademicRanksComponent', () => {
  let component: FormAcademicRanksComponent;
  let fixture: ComponentFixture<FormAcademicRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAcademicRanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAcademicRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
