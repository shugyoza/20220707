import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FacadeService } from '../services/facade-service.service';
import { patternValidator, dateValidator } from '../shared/functions';

import { Patient } from 'src/app/models/Patient.model';
@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.sass']
})
export class FormAuthComponent implements OnInit {

  inputForm = this.fb.group({
    dateOfBirth: [
      '',
      [ Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      dateValidator() ],
    ],
    zipCode: [
      '',
      [ Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      patternValidator(/^\d{5}$/) ]
    ]
  });

  onSubmit(): void {
    this.facadeService.findPatient(this.inputForm.value);
    const subscription = this.facadeService.patient$.subscribe({
      next: (patient: Patient) => this.router.navigate(['appointment']),
      error: (err: Error) => console.error(err)
    })
  }

  constructor(
    private fb: FormBuilder,
    private facadeService: FacadeService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
