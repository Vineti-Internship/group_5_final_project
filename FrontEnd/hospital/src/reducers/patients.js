import * as actionTypes from '../constants/actionTypes';

export const patients = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PATIENT: {
            const newPatient = {}
            newPatient[action.payload.patientId] = {...action.payload};
            return Object.assign(state, newPatient);
        }
        case actionTypes.DELETE_PATIENT: {
            const newState = {...state};
            delete newState[action.payload.patientId];
            return newState;
        }
        default:
            return state;
    }
}