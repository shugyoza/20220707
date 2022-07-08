import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

import { Patient, patients } from '../models/Patient.model';
import { Checkin } from '../models/CheckIn.model';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  patients: Patient[] = patients;
  patient$: Subject<Patient> = new ReplaySubject();

  findPatient(input: Checkin): Subject<Patient> | null {
    const found = this.patients.find((patient) => patient.dateOfBirth === input.dateOfBirth && patient.zipCode === input.zipCode);
    if (found) {
      this.patient$.next(found);
      return this.patient$;
    }
    return null;
  }

  constructor() { }
}
