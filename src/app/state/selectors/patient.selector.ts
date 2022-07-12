import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Patient } from 'src/app/models/Patient.model';

export const _selectPatients = createFeatureSelector<readonly Patient[]>('patients')

export const selectPatients = createSelector(
    _selectPatients,
    (patients) => {
        return patients;
    }
)
