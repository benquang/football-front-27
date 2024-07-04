import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberInputOnly]',
  standalone: true,
})
export class NumberInputOnlyDirective implements OnInit {

  constructor(
    private elSvc: ElementRef,
    private formControl: NgControl,
    private rendererSvc: Renderer2,
  ) { }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.format(e);
  }

  ngOnInit() {
    this.format(this.elSvc.nativeElement.value); // format any initial values
  }

  format(val: string) {
    const result = val.replace(/[^0-9]*/g, '');
    this.rendererSvc.setProperty(this.elSvc.nativeElement, 'value', result);
    this.formControl.control?.setValue(result);
  }

}
