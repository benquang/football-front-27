import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberSeparator]',
  providers: [DecimalPipe],
  standalone: true,
})
export class NumberSeparatorDirective implements OnInit {
  currencyChars = new RegExp('[.,]', 'g'); // we're going to remove commas and dots

  constructor(
    private elSvc: ElementRef,
    private formControl: NgControl,
    private rendererSvc: Renderer2,
    private decimalPipeSvc: DecimalPipe,
  ) { }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.format(e);
  }

  ngOnInit() {
    this.format(this.elSvc.nativeElement.value); // format any initial values
  }

  format(val: string) {
    // 1. test for non-number characters and replace/remove them
    const numberFormat = parseInt(String(val).replace(this.currencyChars, ''), 10);
    // console.log(numberFormat); // raw number

    // 2. format the number (add dot)
    const n = this.decimalPipeSvc.transform(numberFormat, '1.0', 'vi-VN');

    // 3. replace the input value with formatted numbers
    this.rendererSvc.setProperty(this.elSvc.nativeElement, 'value', n);
    this.formControl.control?.setValue(n);
  }

}
