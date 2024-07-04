import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTscuteComponent } from './list-tscute.component';

describe('ListTscuteComponent', () => {
  let component: ListTscuteComponent;
  let fixture: ComponentFixture<ListTscuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTscuteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTscuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
