import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Usage: controlName: ['', [ urlValidator(params) ]]
export const urlValidator = (restrictedDomain?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    // Match URL
    if (!control.value) {
      return null;
    } else {
      if (restrictedDomain) {
        const domainSeg = restrictedDomain.split('.').join('\\.');
        const valid = new RegExp(`^http[s]?://(([a-zA-Z0-9]+\\.{1})|)+${domainSeg}((/.*$)|$)`)
          .test(control.value);
        return valid ? null : { invalidUrl: { valid: false, value: control.value } };
      } else {
        const valid = /^http[s]?:\/\/.+$/.test(control.value);
        return valid ? null : { invalidUrl: { valid: false, value: control.value } };
      }
    }
  };
