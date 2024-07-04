import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuuSinhVienComponent } from './list-cuu-sinh-vien.component';

describe('ListTinTucComponent', () => {
  let component: ListCuuSinhVienComponent;
  let fixture: ComponentFixture<ListCuuSinhVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCuuSinhVienComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListCuuSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
