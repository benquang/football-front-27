import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentFromBusinessesPageComponent } from './recruitment-from-businesses-page.component';

describe('RecruitmentFromBusinessesPageComponent', () => {
  let component: RecruitmentFromBusinessesPageComponent;
  let fixture: ComponentFixture<RecruitmentFromBusinessesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentFromBusinessesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentFromBusinessesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
