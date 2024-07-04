import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { FileService } from '@services/common/file.service';

@Directive({
  selector: '[appGetImageView]',
  standalone: true,
})
export class GetImageViewDirective implements AfterViewInit {

  // Use in <img> tag: <img appGetImageView [idFile]="...">

  @Input() idFile!: string;

  constructor(
    private elSvc: ElementRef,
    private fileSvc: FileService,
  ) { }

  ngAfterViewInit(): void {
    this.fileSvc.viewFile(this.idFile).subscribe({
      next: async res => {
        if (res.body) {
          const blobFile = new Blob([res.body], { type: 'image/*' });
          this.elSvc.nativeElement.src = await this.fileSvc.blobToB64(blobFile, 'data:image/jpeg;base64,');
        }
      },
      error: () => this.elSvc.nativeElement.src = '',
    });
  }

}
