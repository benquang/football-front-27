import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBannerSlideComponent } from './form-banner-slide.component';

describe('FormBannerSlideComponent', () => {
  let component: FormBannerSlideComponent;
  let fixture: ComponentFixture<FormBannerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBannerSlideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBannerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
