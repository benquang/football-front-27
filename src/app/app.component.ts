import { ApplicationRef, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { ToastrService } from 'ngx-toastr';
import { concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).APP;
  //////////////////////////////

  onlineStt: OnlineStatusType = this.onlineSttSvc.getStatus();

  constructor(
    private onlineSttSvc: OnlineStatusService,
    private appRef: ApplicationRef,
    private updates: SwUpdate,
    private alert: ToastrService,
  ) {
    // Setting language
    if (localStorage.getItem('language') === 'null') {
      localStorage.setItem('language', 'vi');
      this.langData = langDataVi.APP;
    }
    // Checking connection status
    this.onlineSttSvc.status.subscribe((status: OnlineStatusType) => {
      this.onlineStt = status;
    });
    // Checking web updates
    this.updates.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(
            `%c${this.langData.DANG_TAI_PHIEN_BAN_MOI}: ${evt.version.hash}`,
            'background: #007bff; color: #fff; padding: 5px 10px;',
          );
          break;
        case 'VERSION_READY':
          console.log(
            `%c${this.langData.PHIEN_BAN_HIEN_TAI}: ${evt.currentVersion.hash}`,
            'background: #2e3192; color: #fff; padding: 5px 10px;',
          );
          console.log(
            `%c${this.langData.PHIEN_BAN_MOI_SAN_SANG}: ${evt.latestVersion.hash}`,
            'background: #28a745; color: #fff; padding: 5px 10px;',
          );
          this.alert.warning(this.langData.CO_PHIEN_BAN_MOI);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.error(`${this.langData.PHIEN_BAN_CAP_NHAT_LOI} ${evt.version.hash}: ${evt.error}`);
          this.alert.warning(this.langData.KHONG_THE_CAP_NHAT_PHIEN_BAN_MOI);
          break;
        case 'NO_NEW_VERSION_DETECTED':
          console.log(this.langData.CHUA_CO_CAP_NHAT);
          break;
      }
    });

    const isAppStableObs = this.appRef.isStable.pipe(first(isStable => isStable));
    const checkTimeObs = interval(3600000); // 1h = 3600000 ms
    const trackingObs = concat(isAppStableObs, checkTimeObs);

    trackingObs.subscribe(() => {
      console.log(
        `%c${this.langData.DANG_KIEM_TRA_CAP_NHAT}`,
        'color: #007bff',
      );
      this.updates.checkForUpdate();
    });
  }

  goTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
