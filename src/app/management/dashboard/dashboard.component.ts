import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { FileService } from '@services/common/file.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).MNG.DASHBOARD;
  ///////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.DASHBOARD,
    listBreadcrumb: [{
      title: this.langData.DANH_MUC,
      link: UrlConstant.ROUTE.MANAGEMENT.CATEGORIES,
    }],
  });

  editor = Editor;
  cfgEditor = SystemConstant.CkEditorCfg;
  ckeData = '';

  // Upload file /////////////////////////////////////////
  setListIdFileToForm = this.fileSvc.setListIdFileToForm;
  setIdFileToForm = this.fileSvc.setIdFileToForm;
  extractFileFromListId = this.fileSvc.extractFileFromListId;
  // End Upload file //////////////////////////////////////

  exampleForm!: FormGroup;

  constructor(
    private fbd: FormBuilder,
    private fileSvc: FileService,
    // private nzModalSvc: NzModalService,
  ) { }

  // Prevent reaload page
  // @HostListener('window:beforeunload', ['$event'])
  // beforeUnloadHander(e: BeforeUnloadEvent) {
  //   const confirmationMessage = '-';
  //   e.returnValue = confirmationMessage;
  //   return confirmationMessage;
  // }
  // // Prevent change router
  // canDeactivate(): Promise<boolean> {
  //   return new Promise(resolve => {
  //     this.nzModalSvc.confirm({
  //       nzTitle: 'Are you sure to leave this page?<br>Changes you made may not be saved.',
  //       nzOnOk: () => resolve(true),
  //       nzOnCancel: () => resolve(false),
  //     });
  //   });
  // }

  ngOnInit(): void {
    this.exampleForm = this.fbd.group({
      fieldOneFile: ['1', [Validators.required]],
      fieldMultiFile: [['1', '2'], [Validators.required]],
    });
  }

  viewFormValue() {
    console.log('FORM VALUE', this.exampleForm.value);
  }

}
