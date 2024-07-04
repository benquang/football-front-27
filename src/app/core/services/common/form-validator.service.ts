/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  validateAllFormFieldWithFormArrays(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormArray) {
        for (const control1 of control.controls) {
          if (control1 instanceof FormControl) {
            control1.markAsTouched({
              onlySelf: true,
            });
          }
          if (control1 instanceof FormGroup) {
            this.validateAllFormFields(control1);
          }
        }
      }
      if (control instanceof FormControl) {
        control.markAsTouched({
          onlySelf: true,
        });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(form: FormGroup, field: string, errorCode?: string): boolean {
    try {
      const formField = form.get(field);
      if (formField) {
        if (!errorCode) {
          return !!formField.errors && formField.touched;
        } else {
          return (formField.hasError(errorCode) && formField.touched);
        }
      } else {
        return false;
      }
    } catch {
      console.log(`Field "${field}" validator error!`);
      return false;
    }
  }

  // Commonly for check password matched
  isFormValid(form: FormGroup, errorCode: string): boolean {
    try {
      return (form.hasError(errorCode) && form.touched);
    } catch {
      console.log('Form validator error!');
      return false;
    }
  }

  displayFieldCss(form: FormGroup, field: string): { 'has-error': boolean; } {
    return {
      'has-error': this.isFieldValid(form, field),
    };
  }

  displayFieldCssZorro(form: FormGroup, field: string): '' | 'error' | 'warning' {
    return this.isFieldValid(form, field) ? 'error' : '';
  }
}
