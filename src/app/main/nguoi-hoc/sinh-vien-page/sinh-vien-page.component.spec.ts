import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhVienPageComponent } from './sinh-vien-page.component';

describe('SinhVienPageComponent', () => {
  let component: SinhVienPageComponent;
  let fixture: ComponentFixture<SinhVienPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinhVienPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinhVienPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
