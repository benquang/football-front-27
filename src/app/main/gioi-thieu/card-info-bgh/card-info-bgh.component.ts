import { Component, Input } from '@angular/core';
import { ICardInfoBgh } from '@models/gioi-thieu/card-info-bgh.model';

@Component({
  selector: 'app-card-info-bgh',
  templateUrl: './card-info-bgh.component.html',
  styleUrls: ['./card-info-bgh.component.scss'],
})

export class CardInfoBghComponent {
  @Input() bghInfo!: ICardInfoBgh;
  isContentVisible = false;
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
}
