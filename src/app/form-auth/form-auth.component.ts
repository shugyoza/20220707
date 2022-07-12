import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FacadeService } from '../services/facade.service';
import { patternValidator, dateValidator } from '../shared/functions';

import { AppointmentDetail } from 'src/app/models/AppointmentDetail.model';
import { Patient } from 'src/app/models/Patient.model';
import { Checkin } from 'src/app/models/CheckIn.model';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.sass']
})
export class FormAuthComponent implements OnInit, OnDestroy {
  subscriptions$: any[] = [];
  patient!: Patient;
  appointment!: AppointmentDetail;

  inputForm = this.fb.group({
    dateOfBirth: [
      '',
      [ Validators.required,
        dateValidator() ],
// we no longer need min max length validation since we have changed the input type="text" to type="date"
//      Validators.minLength(10),
//      Validators.maxLength(10),
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
    const input: Checkin = this.inputForm.value;
    console.log(input)
    this.facadeService.getPatient(input);
    this.facadeService.patients$.subscribe({
      next: (patients: Patient[]) => {
        this.facadeService.getPatientAppointment(patients[0].email);
        this.router.navigate(['appointment'])
      },
      error: (err: Error) => console.error(err)
    })
  }

  init(): void {
    this.subscriptions$.push(this.facadeService.getPatients());
    this.subscriptions$.push(this.facadeService.getAppointments());
  }

  constructor(
    private fb: FormBuilder,
    private facadeService: FacadeService,
    private router: Router) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }

}


/* We no longer need this code since we change our state management from service with observable into ngrx
  onSubmit(): void {
    const input: Checkin = this.inputForm.value;
    const observer = {
      next: (patients: Patient[]) => {
        patients.find((patient) => {
          if (patient.dateOfBirth === input.dateOfBirth && patient.zipCode === input.zipCode) {
            this.patient = patient;
            if (this.patient.appointments.length) {
              const nextAppointmentDate = this.patient.appointments[0];
              this.getAppointmentDetail(nextAppointmentDate);
              this.router.navigate(['appointment'])
            }
          }
        })
      },
      error: (err: Error) => console.error(err),
      complete: () => console.log('findPatient() completed')
    };
    const subscription$ = this.facadeService.patients$.subscribe(observer);
    this.subscriptions$.push(subscription$);
  }

  getAppointmentDetail(appointmentDateTime: Date): void {
    const observer = {
      next: (appointments: AppointmentDetail[]) => {
        appointments.find((appointment: AppointmentDetail) => appointment.appointmentDateTime === appointmentDateTime)
      },
      error: (err: Error) => console.error(err),
      complete: () => console.log('getAppointmentDetail() completed')
    }
    const subscription$ = this.facadeService.appointments$.subscribe(observer);
    this.subscriptions$.push(subscription$);
  }
*/
