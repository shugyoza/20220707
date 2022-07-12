import { AppointmentDetail } from "../models/AppointmentDetail.model";
import { Patient } from '../models/Patient.model';

export interface AppState {
    // appointments: ReadonlyArray<AppointmentDetail> // the same thing
    readonly appointments: AppointmentDetail[];
    readonly patients: Patient[];
    patient: Patient;
    appointment: AppointmentDetail
}
