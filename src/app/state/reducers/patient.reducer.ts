import { createReducer, on } from '@ngrx/store';
import { retrievePatients, retrievePatient, addPatient, deletePatient, resetPatients } from '../actions/patient.actions';
import { Patient } from 'src/app/models/Patient.model';

export const initialState: readonly Patient[] = [];

// function to handle retrieval of the appointments list from the state and consequently, update the state
export const patientReducer = createReducer(
    initialState,
    on(retrievePatients, (state, {patients}) => patients),
    on(retrievePatient, (state, checkin) => state.filter((doc) => doc.dateOfBirth === checkin.dateOfBirth && doc.zipCode === checkin.zipCode)),
    on(addPatient, (state, patient) => [...state, patient]),
    on(deletePatient, (state, {patientId}) => state.filter((doc: Patient) => doc.patientId != patientId)),
    on(resetPatients, (state) => initialState )
)

/*
import { Patient } from 'src/app/models/Patient.model';
import * as PatientActions from '../actions/patient.actions';

export interface PatientState {
    patients: Patient[];
;}

export const patientInitialState: Patient[] = []

export function patientReducer(
    state: Patient[] = patientInitialState,
    action: PatientActions.Actions): patientState {
    switch(action.type) {
        case PatientActions.ADD_PATIENT:
            return [...state, action.payload];
        case PatientActions.DELETE_PATIENT:
            return state.splice(action.payload, 1);
        default:
            return state;
    }
}
*/
