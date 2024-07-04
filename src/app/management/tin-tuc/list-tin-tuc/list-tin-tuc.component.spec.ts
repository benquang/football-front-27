import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTinTucComponent } from './list-tin-tuc.component';

describe('ListTinTucComponent', () => {
  let component: ListTinTucComponent;
  let fixture: ComponentFixture<ListTinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTinTucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
