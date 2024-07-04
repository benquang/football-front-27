import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNhomNganhDaoTaoComponent } from './list-nhom-nganh-dao-tao.component';

describe('ListNhomNganhDaoTaoComponent', () => {
  let component: ListNhomNganhDaoTaoComponent;
  let fixture: ComponentFixture<ListNhomNganhDaoTaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNhomNganhDaoTaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNhomNganhDaoTaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
