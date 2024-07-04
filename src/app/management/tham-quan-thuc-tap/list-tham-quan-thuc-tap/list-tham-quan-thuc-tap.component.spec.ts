import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThamQuanThucTapComponent } from './list-tham-quan-thuc-tap.component';

describe('ListThamQuanThucTapComponent', () => {
  let component: ListThamQuanThucTapComponent;
  let fixture: ComponentFixture<ListThamQuanThucTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThamQuanThucTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThamQuanThucTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
