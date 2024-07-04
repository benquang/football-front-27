import { HttpClient, HttpEvent, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UrlConstant } from '@constants/url.constant';
import { IFileInfo, IListFilesPatch } from '@models/common/file.model';
import { Observable, combineLatest, of } from 'rxjs';
import { catchError, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileService {

  private apiUrl = UrlConstant.API.FILE;

  constructor(
    private http: HttpClient,
  ) { }

  uploadFile(file: File, subFolder: string): Observable<HttpEvent<IFileInfo>> {
    const fd = new FormData();
    fd.append('file', file, file.name);
    const params = new HttpParams()
      .set('name', file.name)
      .set('subFolder', subFolder);

    return this.http
      .post<IFileInfo>(this.apiUrl, fd, { params, observe: 'events', reportProgress: true })
      .pipe(throttleTime(500, undefined, { leading: false, trailing: true }));
  }

  uploadMultiFile(files: FileList, subFolder: string): Observable<HttpEvent<IFileInfo>[] | null> {
    if (files.length) {
      const buildUploadingQueue: Observable<HttpEvent<IFileInfo>>[] = [];
      Array.from(files).forEach(file => {
        const fd = new FormData();
        fd.append('file', file, file.name);
        const params = new HttpParams()
          .set('name', file.name)
          .set('subFolder', subFolder);
        buildUploadingQueue.push(
          this.http
            .post<IFileInfo>(this.apiUrl, fd, { params, observe: 'events', reportProgress: true }),
        );
      });
      return combineLatest(buildUploadingQueue)
        .pipe(
          throttleTime(500, undefined, { leading: true, trailing: true }),
          catchError(() => of(null)),
        );
    } else {
      return of(null);
    }
  }

  getFileInfo(idFile: string): Observable<IFileInfo> {
    return this.http
      .get<IFileInfo>(this.apiUrl + `/${idFile}`);
  }

  viewFile(idFile: string): Observable<HttpResponse<Blob>> {
    return this.http
      .get(this.apiUrl + `/view/${idFile}`, { observe: 'response', responseType: 'blob' });
  }

  downloadFile(idFile: string): Observable<HttpResponse<Blob>> {
    return this.http
      .get(this.apiUrl + `/download/${idFile}`, { observe: 'response', responseType: 'blob' });
  }

  // Utils core ///////////////////////////////////////////////////////////////////
  extractFileFromListId(listFileId: string[]): IListFilesPatch[] {
    if (listFileId.length) {
      return listFileId.filter(x => x !== '' && x !== null)
        .map(idFile => ({ id: idFile }));
    } else {
      return [];
    }
  }

  setListIdFileToForm(listFiles: IListFilesPatch[], formControlName: string, form: FormGroup): void {
    form.get(formControlName)?.setValue(listFiles.length ? listFiles.map(x => x.id) : null);
  }

  setIdFileToForm(listFiles: IListFilesPatch[], formControlName: string, form: FormGroup): void {
    form.get(formControlName)?.setValue(listFiles.length ? listFiles[0].id : null);
  }

  // Utils

  b64toBlob(
    b64DataRaw: string,
    contentTypeInput?: string,
    sliceSizeInput?: number): Blob { // contentTypeInput=image/png ; sliceSize=512 data:image/png;base64,
    const contentType = contentTypeInput ?? 'image/jpeg';
    const sliceSize = sliceSizeInput ?? 512;
    const byteCharacters = window.atob(b64DataRaw.replace(/^data:.+;base64,/, ''));
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  blobToFile(theBlob: Blob, fileName: string): File {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const b: any = theBlob;

    // A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    // Cast to a File() type
    return (theBlob as File);
  }

  blobToDownloadFile(data: Blob, fileName: string) {
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  blobToB64(blob: Blob, prefix?: string): Promise<string> { // 'data:image/jpeg;base64,'
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const tmpBase64 = String(reader.result);
        resolve((prefix ?? '') + tmpBase64.substring(tmpBase64.indexOf(',') + 1));
      };
      reader.readAsDataURL(blob);
    });
  }

  getListFileToListB64(listIdFile: string[], prefix?: string): Promise<{ [key: string]: string; }[]> {
    // How to use: You will got list of object [{...},...],
    // then you need merge it all: Object.assign({}, ...<result of this Fn>)
    // Use in HTML template: [attr.src]="storedVar[idFile]"
    return Promise.all(
      listIdFile.map(idFile => new Promise((resolve) => {
        this.viewFile(idFile).subscribe({
          next: res => {
            this.blobToB64(res.body ?? new Blob(), prefix).then(b64 => resolve({ [idFile]: b64 }));
          },
        });
      }) as Promise<{ [key: string]: string; }>),
    );
  }

  // Hey, remember you had a directive for loading image from template
  // at @widget/directives/get-image-view.directive.ts

}
