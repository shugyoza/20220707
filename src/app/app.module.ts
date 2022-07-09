import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FacadeService } from 'src/app/services/facade.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAuthComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ FacadeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
