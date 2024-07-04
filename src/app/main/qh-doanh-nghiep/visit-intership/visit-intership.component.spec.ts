import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitIntershipComponent } from './visit-intership.component';

describe('VisitIntershipComponent', () => {
  let component: VisitIntershipComponent;
  let fixture: ComponentFixture<VisitIntershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitIntershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitIntershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
