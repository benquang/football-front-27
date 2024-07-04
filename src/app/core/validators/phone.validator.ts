import { AbstractControl, ValidationErrors } from '@angular/forms';

export const phoneNumberValidator = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  } else {
    // Match 10 digit
    const valid = /^[0-9]{10}$/.test(control.value);
    return valid ? null : { invalidPhoneNumber: { valid: false, value: control.value } };
  }
};
