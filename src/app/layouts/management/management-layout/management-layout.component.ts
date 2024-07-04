import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take, timer } from 'rxjs';

@Component({
  selector: 'app-management-layout',
  templateUrl: './management-layout.component.html',
  styleUrls: ['./management-layout.component.scss'],
})
export class ManagementLayoutComponent implements OnInit, OnDestroy {

  checkSliderSub!: Subscription;
  sliderWidth = 200;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    const scWidth = window.innerWidth;
    if (scWidth >= 1500) {
      this.sliderWidth = 240;
    } else if (scWidth >= 1300) {
      this.sliderWidth = 225;
    } else if (scWidth >= 1200) {
      this.sliderWidth = 210;
    } else {
      this.sliderWidth = 200;
    }
  }

  ngOnInit(): void {
    // Change trigger icon
    /*
    $(() => {
      if ($('nz-sider')[0] && $('.ant-layout-sider-zero-width-trigger')[0]) {
        if (!$('nz-sider').attr('class').includes('ant-layout-sider-collapsed')) {
          $('.ant-layout-sider-zero-width-trigger')[0].innerHTML = '<i class="fa-solid fa-chevron-circle-left text-1xl"></i>';
        } else {
          $('.ant-layout-sider-zero-width-trigger')[0].innerHTML = '<i class="fa-solid fa-chevron-circle-right text-1xl"></i>';
        }

        $('.ant-layout-sider-zero-width-trigger').on('click', () => {
          if (!$('nz-sider').attr('class').includes('ant-layout-sider-collapsed')) {
            $('.ant-layout-sider-zero-width-trigger')[0].innerHTML = '<i class="fa-solid fa-chevron-circle-left text-1xl"></i>';
          } else {
            $('.ant-layout-sider-zero-width-trigger')[0].innerHTML = '<i class="fa-solid fa-chevron-circle-right text-1xl"></i>';
          }
        });
      }
    });
    */
    // Call firstime
    window.dispatchEvent(new Event('resize'));
    // Then do check
    this.checkSliderSub = timer(0, 1000).pipe(take(5)).subscribe(() => window.dispatchEvent(new Event('resize')));

  }

  ngOnDestroy(): void {
    this.checkSliderSub.unsubscribe();
  }

}

