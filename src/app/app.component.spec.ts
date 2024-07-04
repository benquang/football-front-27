import { ApplicationRef } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OnlineStatusService } from 'ngx-online-status';
import { ToastrModule } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ServiceWorkerModule.register(''),
        ToastrModule.forRoot(),
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        OnlineStatusService,
        // { provide: SwUpdate, useFactory: () => new MockSwUpdate(false) },
        { provide: ApplicationRef, userClass: MockApplicationRef },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render goTop icon', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.go-top-icon')).toBeDefined();
  });
});

class MockApplicationRef {
  isStable = new Subject<boolean>();
}
