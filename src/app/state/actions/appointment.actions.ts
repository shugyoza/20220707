import { createAction, props } from '@ngrx/store';
import { AppointmentDetail } from 'src/app/models/AppointmentDetail.model';

export enum AppointmentActionTypes {
    RETRIEVE_APPOINTMENTS = '[APPOINTMENT] Retrieve Appointments Success',
    RETRIEVE_PATIENT_APPOINTMENTS = '[APPOINTMENT] Retrieve Patient Appointments Success',
    ADD_APPOINTMENT = '[APPOINTMENT] Add Appointment',
    DELETE_APPOINTMENT = '[APPOINTMENT] Delete Appointment',
    RESET_APPOINTMENT = '[APPOINTMENT] Reset Appointments'
};

export const retrieveAppointments = createAction(
    AppointmentActionTypes.RETRIEVE_APPOINTMENTS,
    props<{ appointments: AppointmentDetail[] }>()
);

export const retrievePatientAppointments = createAction(
    AppointmentActionTypes.RETRIEVE_PATIENT_APPOINTMENTS,
    props<{ email: string }>()
);

export const addAppointment = createAction(
    AppointmentActionTypes.ADD_APPOINTMENT,
    props< AppointmentDetail >()
);

export const deleteAppointment = createAction(
    AppointmentActionTypes.DELETE_APPOINTMENT,
    props<{ appointmentDateTime: Date }>()
);

export const resetAppointments = createAction(
    AppointmentActionTypes.RESET_APPOINTMENT
);


/*
import { Action } from '@ngrx/store';
import { AppointmentDetail } from 'src/app/models/AppointmentDetail.model';

export const ADD_APPOINTMENT = '[APPOINTMENT] Add Appointment';
export const DELETE_APPOINTMENT = '[APPOINTMENT] Delete Appointment';
export const RESET_APPOINTMENT = '[APPOINTMENT] Reset Appointment';

export class AddAppointment implements Action {
    readonly type = ADD_APPOINTMENT;
    constructor(public payload: AppointmentDetail) {
    }
}

export class DeleteAppointment implements Action {
    readonly type = DELETE_APPOINTMENT;
    constructor(public payload: number) {
    }
}

export class ResetAppointment implements Action {
    readonly type = RESET_APPOINTMENT;
}

export type Actions = AddAppointment | DeleteAppointment | ResetAppointment;
*/
