import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// NgRx State Management imports start here:
import { StoreModule } from '@ngrx/store';
import { appointmentReducer } from './state/reducers/appointment.reducer';
import { patientReducer } from './state/reducers/patient.reducer';
// NgRx State Management imports end here

import { AppRoutingModule } from './app-routing.module';
import { FacadeService } from 'src/app/services/facade.service';
import { AppComponent } from './app.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentService } from './services/appointment.service';
import { PatientService } from './services/patient.service';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAuthComponent,
    AppointmentComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot( { appointments: appointmentReducer, patients: patientReducer } ),
  ],
  providers: [ FacadeService, AppointmentService, PatientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
