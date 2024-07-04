import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNckhComponent } from './list-nckh.component';

describe('ListNckhComponent', () => {
  let component: ListNckhComponent;
  let fixture: ComponentFixture<ListNckhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNckhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNckhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
