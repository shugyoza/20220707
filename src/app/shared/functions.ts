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
    console.log(parsed, result)
    return result;
  }
}

export function convertToUnixTime(
  month: number,
  week: number,
  day: number,
  hour: number,
  minute: number,
  second: number): number {
    let result: number = 0;
    if (second && second > 0) result += second;
    if (minute && minute > 0) result += minute * 60; // 60 seconds
    if (hour && hour > 0) result += hour * 60 * 60; // 60 minutes * 60 seconds
    if (day && day > 0) result += day * 24 * 60 * 60 // 24 hours
    if (week && week > 0) result += week * 7 * 24 * 60 * 60 // 7 days
    if (month && month > 0) result += month * 30 * 24 * 60 * 60 // 30 days
  return result;
}
