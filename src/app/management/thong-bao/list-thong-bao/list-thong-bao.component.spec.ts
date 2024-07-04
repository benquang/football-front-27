import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThongBaoComponent } from './list-thong-bao.component';

describe('ListThongBaoComponent', () => {
  let component: ListThongBaoComponent;
  let fixture: ComponentFixture<ListThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThongBaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
