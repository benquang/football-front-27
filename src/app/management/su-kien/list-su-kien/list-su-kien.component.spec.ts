import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuKienComponent } from './list-su-kien.component';

describe('ListSuKienComponent', () => {
  let component: ListSuKienComponent;
  let fixture: ComponentFixture<ListSuKienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSuKienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
