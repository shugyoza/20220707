import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Patient } from '../models/Patient.model';
import { patients } from '../shared/mock';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients$: Observable<Patient[]> = of(patients);

}
