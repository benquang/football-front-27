import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAndBusinessComponent } from './event-and-business.component';

describe('EventAndBusinessComponent', () => {
  let component: EventAndBusinessComponent;
  let fixture: ComponentFixture<EventAndBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAndBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAndBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
