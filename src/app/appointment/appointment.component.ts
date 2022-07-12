import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { AppointmentDetail } from '../models/AppointmentDetail.model';
import { Patient } from '../models/Patient.model';
import { FacadeService } from '../services/facade.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.sass']
})
export class AppointmentComponent implements OnInit, OnDestroy {
  appointments$!: Observable<AppointmentDetail>;
  appointment!: AppointmentDetail;
  subscriptions$: any[] = [];

  checkin(): void {}

  displayAppointment(): void {
    const observer = {
      next: (appointments: AppointmentDetail[]) => this.appointment = appointments[0],
      error: (err: Error) => console.error(err),
      complete: () => true
    };
    this.facadeService.appointments$.subscribe(observer)
  }

  constructor(private store: Store<AppState>, private facadeService: FacadeService) {
    this.facadeService.appointments$ = this.store.select('appointments')
    }

  ngOnInit(): void {
    this.displayAppointment();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }

}
