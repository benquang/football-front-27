import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPageComponent } from './side-menu-page.component';

describe('SideMenuPageComponent', () => {
  let component: SideMenuPageComponent;
  let fixture: ComponentFixture<SideMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
