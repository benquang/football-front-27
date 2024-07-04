import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appLowerCaseInput]',
  standalone: true,
})
export class LowerCaseInputDirective implements OnInit {

  constructor(
    private elSvc: ElementRef,
    private formControl: NgControl,
    private renderSvc: Renderer2,
  ) { }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.format(e);
  }

  ngOnInit() {
    this.format(this.elSvc.nativeElement.value); // format any initial values
  }

  format(val: string) {
    const result = val.toLowerCase();
    this.renderSvc.setProperty(this.elSvc.nativeElement, 'value', result);
    this.formControl.control?.setValue(result);
  }

}
