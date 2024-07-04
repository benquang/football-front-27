import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalStructurePageComponent } from './organizational-structure-page.component';

describe('OrganizationalStructurePageComponent', () => {
  let component: OrganizationalStructurePageComponent;
  let fixture: ComponentFixture<OrganizationalStructurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationalStructurePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationalStructurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
