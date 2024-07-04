import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomeSliderComponent } from './navbar-home-slider.component';

describe('NavbarHomeSliderComponent', () => {
  let component: NavbarHomeSliderComponent;
  let fixture: ComponentFixture<NavbarHomeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHomeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
