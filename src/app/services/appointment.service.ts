import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AppointmentDetail } from '../models/AppointmentDetail.model';
import { appointments } from '../shared/mock';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments$: Observable<AppointmentDetail[]> = of(appointments);

  /* // if using the real http client
  getAppointments(): Observable<AppointmentDetail[]> {
    return this.http
      .get<{ items: AppointmentDetail[] }>(
      '...this is the api url and path endpoints string...'
      )
      .pipe(map((appointments) => appointments.items | []))
  }
  */
}
