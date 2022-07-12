import { createReducer, on } from '@ngrx/store';
import { retrieveAppointments, retrievePatientAppointments, addAppointment, deleteAppointment, resetAppointments } from '../actions/appointment.actions';
import { AppointmentDetail } from 'src/app/models/AppointmentDetail.model';

export const initialState: readonly AppointmentDetail[] = [];

// function to handle retrieval of the appointments list from the state and consequently, update the state
export const appointmentReducer = createReducer(
    initialState,
    on(retrieveAppointments, (state, {appointments}) => appointments),
    on(retrievePatientAppointments, (state, {email}) => state.filter((doc) => doc.email === email)),
    on(addAppointment, (state, appointment) => [...state, appointment]),
    on(deleteAppointment, (state, {appointmentDateTime}) => state.filter((doc) => doc.appointmentDateTime != appointmentDateTime)),
    on(resetAppointments, (state) => initialState )
)

/*
import { AppointmentDetail } from 'src/app/models/AppointmentDetail.model';
import * as AppointmentActions from '../actions/appointment.actions';

export interface AppointmentsState {
    appointments: AppointmentDetail[]
}

export const appointmentInitialState: AppointmentDetail[] = []

export function appointmentReducer(
    state: AppointmentDetail[] = appointmentInitialState,
    action: AppointmentActions.Actions): AppointmentsState {
    switch(action.type) {
        case AppointmentActions.ADD_APPOINTMENT:
            return [...state, action.payload];
        case AppointmentActions.DELETE_APPOINTMENT:
            return state.splice(action.payload, 1);
        default:
            return state;
    }
} */
