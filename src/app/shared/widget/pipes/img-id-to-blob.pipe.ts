import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileService } from '@services/common/file.service';
import { firstValueFrom, map } from 'rxjs';

@Pipe({
  name: 'imgIdToBlob',
  standalone: true,
})
export class ImgIdToBlobPipe implements PipeTransform {

  constructor(
    private fileSvc: FileService,
    private sanitizedSvc: DomSanitizer,
  ) { }

  transform(id: string): Promise<SafeResourceUrl | undefined> {
    if (id) {
      return firstValueFrom(
        this.fileSvc.downloadFile(id).pipe(
          map(x => this.sanitizedSvc.bypassSecurityTrustResourceUrl(URL.createObjectURL(x.body ?? new Blob()))),
        ),
      );
    } else {
      return new Promise((resolve) => resolve(undefined));
    }
  }

}
