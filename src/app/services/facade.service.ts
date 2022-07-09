import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

import { Patient } from '../models/Patient.model';
import { Checkin } from '../models/CheckIn.model';
import { AppointmentDetail } from '../models/AppointmentDetail.model';

import { patients, appointments } from '../shared/mock';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  patients: Patient[] = patients;
  appointments: AppointmentDetail[] = appointments;
  patient$: Subject<Patient> = new ReplaySubject();
  appointment$: Subject<AppointmentDetail> = new ReplaySubject();

  findPatient(input: Checkin): Subject<Patient> | null {
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

  constructor() { }
}
