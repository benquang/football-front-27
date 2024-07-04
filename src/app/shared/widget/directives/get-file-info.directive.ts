import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFileInfo } from '@models/common/file.model';
import { FileService } from '@services/common/file.service';

@Directive({
  selector: '[appGetFileInfo]',
  standalone: true,
})
export class GetFileInfoDirective implements OnInit {

  @Input() idFile!: string;
  @Output() infoFile: EventEmitter<IFileInfo> = new EventEmitter<IFileInfo>();

  constructor(private fileSvc: FileService) { }

  ngOnInit(): void {
    this.fileSvc.getFileInfo(this.idFile).subscribe({
      next: res =>
        this.infoFile.emit(res),
      error: () => this.infoFile.emit(undefined),
    });
  }

}
