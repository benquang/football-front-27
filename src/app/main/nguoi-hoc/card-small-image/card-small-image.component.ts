import { Component, Input } from '@angular/core';
import { ICardImage } from '@models/common/card-image.model';

@Component({
  selector: 'app-card-small-image',
  templateUrl: './card-small-image.component.html',
  styleUrls: ['./card-small-image.component.scss'],
})
export class CardSmallImageComponent {
  @Input() data!: ICardImage;
}
