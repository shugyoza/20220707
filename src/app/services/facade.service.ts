import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './../state/app.state';
import { AppointmentDetail } from '../models/AppointmentDetail.model';
import { Patient } from '../models/Patient.model';
import { Checkin } from '../models/CheckIn.model';

import { retrievePatients,
  retrievePatient,
  addPatient,
  deletePatient,
  resetPatients } from './../state/actions/patient.actions';
import { retrieveAppointments,
  retrievePatientAppointments,
  addAppointment,
  deleteAppointment,
  resetAppointments } from '../state/actions/appointment.actions';
import { AppointmentService } from './appointment.service';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  appointments$!: Observable<AppointmentDetail[]>;
  patients$!: Observable<Patient[]>;

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private store: Store<AppState>
    ) {
    this.appointments$ = this.store.select('appointments');
    this.patients$ = this.store.select('patients');
  }

  getAppointments(): Subscription {
    this.appointments$ = this.appointmentService.appointments$;
    return this.appointments$.subscribe({
      next: (appointments: AppointmentDetail[]) => {
        this.store.dispatch( retrieveAppointments( {appointments} ) );
      },
      error: (err: Error) => console.error(err)
    });
  };

  getPatients(): Subscription {
    this.patients$ = this.patientService.patients$;
    return this.patients$.subscribe({
      next: (patients: Patient[]) => {
        this.store.dispatch( retrievePatients( {patients} ) );
      },
      error: (err: Error) => console.error(err)
    });
  };

  getPatientAppointment(email: string): void {
    this.store.dispatch( retrievePatientAppointments({email}));
    this.appointments$ = this.store.select('appointments');
  };

  getPatient(checkin: Checkin): void {
    this.store.dispatch( retrievePatient(checkin));
    this.patients$ = this.store.select('patients');
  };

  addPatient(patient: Patient): void {
    this.store.dispatch(addPatient(patient));
  }

  deletePatient(patientId: string): void {
    this.store.dispatch( deletePatient( {patientId} ) );
  }

  resetPatient(): void {
    this.store.dispatch(resetPatients());
  }

  addAppointment(appointment: AppointmentDetail): void {
    this.store.dispatch(addAppointment( appointment ));
  }

  deleteAppointment(appointmentDateTime: Date): void {
    this.store.dispatch( deleteAppointment( {appointmentDateTime} ) );
  }

  resetAppointment(): void {
    this.store.dispatch(resetAppointments());
  }
}

/*

  customer$ = this.store.select(customers.selectCustomer('47'));

*/


/*
  findPatient(input: Checkin): Observable<Patient> | null {
    const found = this.patients.find((patient) => patient.dateOfBirth === input.dateOfBirth && patient.zipCode === input.zipCode);
    if (found) {
      this.patient$.next(found);
      return this.patient$;
    }
    return null;
  }


    getAppointmentDetail(dateTime: Date): Subject<AppointmentDetail> | null {
    const found = this.appointments.find((appointment) => appointment.appointmentDateTime === dateTime);
    if (found) {
      this.appointment$.next(found);
      return this.appointment$;
    }
    return null;
  }

*/
