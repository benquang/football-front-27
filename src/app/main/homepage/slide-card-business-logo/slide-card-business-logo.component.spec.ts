import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardBusinessLogoComponent } from './slide-card-business-logo.component';

describe('SlideCardBusinessLogoComponent', () => {
  let component: SlideCardBusinessLogoComponent;
  let fixture: ComponentFixture<SlideCardBusinessLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideCardBusinessLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideCardBusinessLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
