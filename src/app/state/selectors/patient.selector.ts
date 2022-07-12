import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Patient } from 'src/app/models/Patient.model';
import { Checkin } from 'src/app/models/CheckIn.model';

export const _selectPatients = createFeatureSelector<readonly Patient[]>('patients')

export const selectPatients = createSelector(
    _selectPatients,
    (patients) => {
        return patients;
    }
)
