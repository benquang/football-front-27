import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardAffiliatedBusinessesComponent } from './slide-card-affiliated-businesses.component';

describe('SlideCardAffiliatedBusinessesComponent', () => {
  let component: SlideCardAffiliatedBusinessesComponent;
  let fixture: ComponentFixture<SlideCardAffiliatedBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideCardAffiliatedBusinessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideCardAffiliatedBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
