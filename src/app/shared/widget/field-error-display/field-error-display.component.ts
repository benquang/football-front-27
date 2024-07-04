import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export const pluginsModules = [
  CommonModule,
];
@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.scss'],
  standalone: true,
  imports: pluginsModules,
})
export class FieldErrorDisplayComponent {

  @Input() errorMsg!: string;

  @Input() displayError!: boolean;

}
