import { Directive, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '([formControlName], [formControl])[appDisabledControl]',
  standalone: true,
})
/*
Use: [appDisabledControl]="boolean"
Remember: disabledControl will striped out from FormGroup.value,
If you want to get them, use FormGroup.getRawValue()
*/
export class DisableFormControlDirective implements OnInit {

  @Input() appDisabledControl = false;

  constructor(private formControl: NgControl) { }

  ngOnInit(): void {
    if (this.appDisabledControl) {
      this.formControl.control?.disable();
    } else {
      this.formControl.control?.enable();
    }
  }

}
