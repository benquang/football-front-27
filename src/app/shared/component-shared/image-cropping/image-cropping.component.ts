import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ImageCroppedEvent, ImageCropperModule } from 'ngx-image-cropper';
import { ToastrService } from 'ngx-toastr';

const plugins = [
  CommonModule,
  NzButtonModule,
  NzGridModule,
  ImageCropperModule,
];

@Component({
  selector: 'app-image-cropping',
  standalone: true,
  imports: plugins,
  templateUrl: './image-cropping.component.html',
  styleUrls: ['./image-cropping.component.scss'],
})
export class ImageCroppingComponent implements OnInit {

  @Input() aspectRatio = 1;
  @Input() bgColor = 'white';
  @Output() outpuFile = new EventEmitter<Blob | null>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).SHARED.CROP_IMAGE;
  //////////////////////////////

  imageChangedEvent: unknown;
  croppedImage: ImageCroppedEvent | null = null;
  errLowQualityPicInput = false;
  errMaxQualityPicInput = false;
  isSelectedFile = false;
  aspectRatioNumber = 1;
  rotateCanvas = 0;

  constructor(
    private alert: ToastrService,
  ) { }

  ngOnInit(): void {
    this.aspectRatioNumber = this.aspectRatio ?? 1;
  }

  fileChangeEvent(event: unknown): void {
    this.imageChangedEvent = event;
    this.isSelectedFile = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event;
  }

  loadImageFailed() {
    this.alert.error(this.langData.CO_LOI_KHI_TAI_LEN);
  }

  rotateLeft() {
    this.rotateCanvas = (this.rotateCanvas + 3) % 4;
  }

  rotateRight() {
    this.rotateCanvas = (this.rotateCanvas + 5) % 4;
  }

  onSubmit() {
    if (this.croppedImage?.blob) {
      this.outpuFile.emit(this.croppedImage.blob);
    } else {
      this.alert.error(this.langData.CO_LOI_XAY_RA);
    }
  }

  onCancel() {
    this.outpuFile.emit(null);
  }

}
