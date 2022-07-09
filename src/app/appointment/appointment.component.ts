import { Component, OnInit, OnDestroy } from '@angular/core';

import { FacadeService } from '../services/facade.service';
import { AppointmentDetail } from '../models/AppointmentDetail.model';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.sass']
})
export class AppointmentComponent implements OnInit, OnDestroy {
  appointment!: AppointmentDetail;
  subscriptions$: any[] = [];

  checkin(): void {}

  displayAppointment(): void {
    const subscription$ = this.facadeService.appointment$.subscribe({
      next: (appointment: AppointmentDetail) => this.appointment = appointment,
      error: (err: Error) => console.error(err)
    });
    this.subscriptions$.push(subscription$);
  }

  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.displayAppointment();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }

}
