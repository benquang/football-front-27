import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSchoolSubpageComponent } from './about-school-subpage.component';

describe('AboutSchoolSubpageComponent', () => {
  let component: AboutSchoolSubpageComponent;
  let fixture: ComponentFixture<AboutSchoolSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSchoolSubpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSchoolSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
