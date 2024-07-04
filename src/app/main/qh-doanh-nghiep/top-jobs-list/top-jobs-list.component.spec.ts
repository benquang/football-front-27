import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopJobsListComponent } from './top-jobs-list.component';

describe('TopJobsListComponent', () => {
  let component: TopJobsListComponent;
  let fixture: ComponentFixture<TopJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopJobsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
