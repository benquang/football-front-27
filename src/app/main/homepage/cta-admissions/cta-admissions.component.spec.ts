import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAdmissionsComponent } from './cta-admissions.component';

describe('CtaAdmissionComponent', () => {
  let component: CtaAdmissionsComponent;
  let fixture: ComponentFixture<CtaAdmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtaAdmissionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CtaAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
