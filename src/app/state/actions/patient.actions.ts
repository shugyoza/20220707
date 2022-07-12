import { createAction, props } from '@ngrx/store';
import { Patient } from 'src/app/models/Patient.model';
import { Checkin } from 'src/app/models/CheckIn.model';

export const enum PatientActionTypes {
    RETRIEVE_PATIENTS = '[PATIENT] Retrieve Patients Success',
    RETRIEVE_PATIENT = '[PATIENT] Retrieve A Patient Success',
    ADD_PATIENT = '[PATIENT] Add Patient',
    DELETE_PATIENT = '[PATIENT] Delete Patient',
    RESET_PATIENT = '[PATIENT] Reset Patients'
}

export const retrievePatients = createAction(
    PatientActionTypes.RETRIEVE_PATIENTS,
    props<{ patients: Patient[] }>()
);

export const retrievePatient = createAction(
    PatientActionTypes.RETRIEVE_PATIENT,
    props< Checkin >()
)

export const addPatient = createAction(
    PatientActionTypes.ADD_PATIENT,
    props< Patient >()
);

export const deletePatient = createAction(
    PatientActionTypes.DELETE_PATIENT,
    props<{ patientId: string }>()
);

export const resetPatients = createAction(
    PatientActionTypes.RESET_PATIENT
);


/*
import { Action } from '@ngrx/store';
import { Patient } from 'src/app/models/Patient.model';

export const ADD_PATIENT = '[PATIENT] Add';
export const DELETE_PATIENT = '[PATIENT] Delete';
export const RESET_PATIENT = '[PATIENT] Reset';

export class AddPatient implements Action {
    readonly type = ADD_PATIENT;
    constructor(public payload: Patient) {
    }
}

export class DeletePatient implements Action {
    readonly type = DELETE_PATIENT;
    constructor(public payload: number) {
    }
}

export class ResetPatient implements Action {
    readonly type = RESET_PATIENT;
}

export type Actions = AddPatient | DeletePatient | ResetPatient;
*/
