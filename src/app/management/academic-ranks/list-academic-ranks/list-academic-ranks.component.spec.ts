import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcademicRanksComponent } from './list-academic-ranks.component';

describe('ListAcademicRanksComponent', () => {
  let component: ListAcademicRanksComponent;
  let fixture: ComponentFixture<ListAcademicRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAcademicRanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcademicRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
