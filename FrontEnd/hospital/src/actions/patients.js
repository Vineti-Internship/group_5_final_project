import * as actionTypes from '../constants/actionTypes';

export const addPatient = patient => {
    const action = { type: actionTypes.ADD_PATIENT };
    const appointments = patient.appointments.map(appointment => appointment.appointment_id);
    const newPatient = { ...patient, appointments };
    action.payload = newPatient;
    return action;
}

export const deletePatient = patientId => (
    { type: actionTypes.DELETE_PATIENT, payload: { patientId } }
)

export const updatePatient = (patientId, newPatient) => (
    { type: actionTypes.UPDATE_PATIENT, payload: { patientId, newPatient } }
)