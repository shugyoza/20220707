import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function patternValidator(filter: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = filter.test(control.value);
      // if input is ok, must return null, else return the problem as an object
      const result = isValid ? null : { patternInvalid: { value: control.value }};
      return result;
    }
  }

  export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const parsed = Date.parse(control.value);
      // if input is ok, must return null, else return the problem as an object
      // Date must be in a date format that can be parsed, and it must not be in the future
      const result = parsed && parsed < Date.now() ? null : { dateInvalid: { value: control.value }};
      return result;
    }
  }
