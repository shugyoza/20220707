import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormAuthComponent } from './form-auth/form-auth.component';

const routes: Routes = [
  {
    path: 'checkin',
    component: FormAuthComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: '',
    redirectTo: 'checkin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
