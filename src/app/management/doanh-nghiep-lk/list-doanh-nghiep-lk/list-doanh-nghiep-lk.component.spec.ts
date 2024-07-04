import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoanhNghiepLkComponent } from './list-doanh-nghiep-lk.component';

describe('ListDoanhNghiepLkComponent', () => {
  let component: ListDoanhNghiepLkComponent;
  let fixture: ComponentFixture<ListDoanhNghiepLkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoanhNghiepLkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDoanhNghiepLkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
