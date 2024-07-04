import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoaiHinhDaoTaoComponent } from './list-loai-hinh-dao-tao.component';

describe('ListLoaiHinhDaoTaoComponent', () => {
  let component: ListLoaiHinhDaoTaoComponent;
  let fixture: ComponentFixture<ListLoaiHinhDaoTaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLoaiHinhDaoTaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLoaiHinhDaoTaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
