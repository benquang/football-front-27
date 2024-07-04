import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocVienPageComponent } from './hoc-vien-page.component';

describe('HocVienPageComponent', () => {
  let component: HocVienPageComponent;
  let fixture: ComponentFixture<HocVienPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocVienPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HocVienPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
