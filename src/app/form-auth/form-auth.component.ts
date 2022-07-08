import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, ControlContainer } from '@angular/forms';

export class Patient {
  dateOfBirth: string;
  zipCode: string;

  constructor(dateOfBirth: string, zipCode: string) {
    this.dateOfBirth = dateOfBirth;
    this.zipCode = zipCode
  }
}

export class AppointmentDetails {
  address: string;
  appointmentDateTime: Date;
  appointmentType: string;
  city: string;
  clinicId: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
  zipCode: string

  constructor(
    address: string,
    appointmentDateTime: Date = new Date(),
    appointmentType: string,
    city: string,
    clinicId: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    state: string,
    zipCode: string
  ) {
    this.address = address;
    this.appointmentDateTime = appointmentDateTime;
    this.appointmentType = appointmentType;
    this.city = city;
    this.clinicId = clinicId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.state = state;
    this.zipCode = zipCode
  }
}

export function patternValidator(filter: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = filter.test(control.value);
    // if input is ok, must return null, else return the problem as an object
    const result = isValid ? null : { patternInvalid: { value: control.value }};
    return result;
  }
}

export function dateValidator(cb: Function): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const parsed = cb(control.value);
    // if input is ok, must return null, else return the problem as an object
    const result = parsed ? null : { dateInvalid: { value: control.value }};
    return result;
  }
}


@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.sass']
})
export class FormAuthComponent implements OnInit {

  formAuth = this.fb.group({
    dob: [
      '',
      [ Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      dateValidator(Date.parse) ],
    ],
    zip: [
      '',
      [ Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      patternValidator(/^\d{5}$/) ]
    ]
  });

  onSubmit(): void {
    console.log('onSubmit()', this.formAuth.value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
