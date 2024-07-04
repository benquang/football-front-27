import { CommonModule } from '@angular/common';
import { HttpEventType, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ViewFileComponent } from '@component-shared/view-file/view-file.component';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { IFileInfo, IListFilesPatch } from '@models/common/file.model';
import { FileService } from '@services/common/file.service';
import { GetFileInfoDirective } from '@widget/directives/get-file-info.directive';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription, take, timer } from 'rxjs';

export const pluginsModules = [
  CommonModule,
  NzPopconfirmModule,
  GetFileInfoDirective,
  ViewFileComponent,
];
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  standalone: true,
  imports: pluginsModules,
})
export class UploadFileComponent implements OnInit {

  @Input() acceptFilesExtension = '';
  @Input() subFolderOnServer = '';
  @Input() isUploadMultiFile = false;
  @Input() isDisableUpload = false; // but still show view BTN

  @Input() isDisableView = false;
  @Input() isDownloadable = false;
  @Input() deleteNoConfirm = false;

  @Input() listFilesPatch: IListFilesPatch[] = [];
  @Output() isUploading = new EventEmitter<boolean>();
  @Output() returnedListId = new EventEmitter<IListFilesPatch[]>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).SHARED.UPLOAD_FILE;
  //////////////////////////////

  //////////////////////////////
  viewModalRef!: NzModalRef;
  uploadRef!: Subscription;

  isStartUpload = false;
  uploadingProgress = 0;
  listFiles: IListFilesPatch[] = [];
  selectedFileIdForView = '';
  defaultFolder = 'chua-phan-loai';

  constructor(
    private alert: ToastrService,
    private spinner: NgxSpinnerService,
    private fileSvc: FileService,
    private nzModalSvc: NzModalService,
  ) { }

  ngOnInit(): void {
    const trackingFilePatch = timer(1000, 1000)
      .pipe(take(60)).subscribe(() => { // Try 60 times
        this.listFiles = this.listFilesPatch;
        if (this.listFiles.length > 0) {
          trackingFilePatch.unsubscribe();
        }
      });

    if (!this.acceptFilesExtension) {
      this.acceptFilesExtension = '.jpg,.jpeg,.png,.pdf,.ppt,.pptx,.doc,.docx,.zip,.rar';
    }
  }

  uploadFile(files: FileList) {
    this.uploadingProgress = 0;
    this.isStartUpload = true;
    this.isUploading.emit(true);
    if (this.isUploadMultiFile) {
      const allFileSize = Array.from(files).reduce((total, cur) => total += cur.size, 0);
      this.uploadRef = this.fileSvc.uploadMultiFile(files, this.subFolderOnServer ?? this.defaultFolder)
        .subscribe({
          next: (resArr) => {
            this.listFiles = [...new Map([this.listFiles, resArr?.length ? resArr
              ?.filter(x => x.type === HttpEventType.Response)
              ?.map(x => ({
                id: (x as HttpResponse<IFileInfo>).body?.id ?? '',
                filename: (x as HttpResponse<IFileInfo>).body?.tenFile,
              })) : []].flat().map(item => [item?.id, item])).values(),
            ];
            if (resArr?.some(x => !x || (x.type === HttpEventType.ResponseHeader && !x.ok))) { // Got an error
              this.returnedListId.emit(this.listFiles);
              this.isStartUpload = false;
              this.isUploading.emit(false);
            } else {
              resArr?.filter(x => x.type === HttpEventType.UploadProgress)
                .map(x => this.uploadingProgress = Math.round(100 * (x as HttpProgressEvent).loaded / allFileSize));
            }
          },
          complete: () => {
            this.isStartUpload = false;
            this.isUploading.emit(false);
          },
        });
    } else {
      this.uploadRef = this.fileSvc.uploadFile(files[0], this.subFolderOnServer ?? this.defaultFolder)
        .subscribe({
          next: (res) => {
            if (res.type === HttpEventType.Response) {
              this.listFiles = [{ id: res.body?.id ?? '', filename: res.body?.tenFile }];
              this.returnedListId.emit(this.listFiles);
              this.isStartUpload = false;
              this.isUploading.emit(false);
              this.uploadRef.unsubscribe();
            } else if (res.type === HttpEventType.UploadProgress) {
              if (res.total) {
                this.uploadingProgress = Math.round(100 * res.loaded / res.total);
              } else {
                this.uploadingProgress = Math.round(100 * res.loaded / files[0].size);
              }
            }
          },
          error: () => {
            this.isStartUpload = false;
            this.isUploading.emit(false);
            this.uploadRef.unsubscribe();
          },
        });
    }
  }

  onRemove(index: number): void {
    this.listFiles.splice(index, 1);
    this.returnedListId.emit(this.listFiles);
  }

  setFileName(file: IFileInfo, refVar: IListFilesPatch): void {
    refVar.filename = file?.tenFile ?? this.langData.LOI;
  }

  openModalViewFile(template: TemplateRef<unknown>, fileId: string | undefined): void {
    if (!fileId) {
      return;
    }
    this.selectedFileIdForView = fileId;
    this.viewModalRef = this.nzModalSvc.create({
      nzStyle: { top: '20px', width: '100%', maxWidth: '80vw' },
      nzTitle: undefined,
      nzMaskClosable: false,
      nzContent: template,
      nzOnOk: () => this.viewModalRef.close(),
      nzCancelText: null,
    });
  }

  hideModalViewFile(): void {
    this.viewModalRef.close();
  }

  onTerminateUploading(): void {
    this.uploadRef.unsubscribe();
    this.isStartUpload = false;
    this.isUploading.emit(false);
  }

  downloadFile(fileId: string | undefined): void {
    if (!fileId) {
      return;
    }
    this.spinner.show();
    this.fileSvc.downloadFile(fileId)
      .subscribe({
        next: res => {
          this.fileSvc.getFileInfo(fileId)
            .subscribe({
              next: fileInfo => {
                if (res.body) {
                  this.fileSvc.blobToDownloadFile(res.body, fileInfo.tenFile);
                } else {
                  this.alert.error(this.langData.CO_LOI_XAY_RA);
                }
              },
            });
        },
      });
  }

}
