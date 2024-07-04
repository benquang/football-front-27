import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICardImage } from '@models/common/card-image.model';

const plugins = [
  CommonModule,
  RouterModule,
];

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  standalone: true,
  imports: plugins,
})
export class CardImageComponent {
  @Input() data!: ICardImage;
}
