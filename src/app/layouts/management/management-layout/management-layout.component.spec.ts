import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManagementLayoutComponent } from './management-layout.component';

describe('ManagementLayoutComponent', () => {
  let component: ManagementLayoutComponent;
  let fixture: ComponentFixture<ManagementLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
