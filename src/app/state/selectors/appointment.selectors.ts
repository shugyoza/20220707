import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppointmentDetail } from 'src/app/models/AppointmentDetail.model';

export const _selectAppointments = createFeatureSelector<readonly AppointmentDetail[]>('appointments')

export const selectAppointments = createSelector(
    _selectAppointments,
    (appointments) => {
        return appointments;
    }
)
