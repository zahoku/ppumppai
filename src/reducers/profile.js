import * as types from '../actions/ActionTypes';

const initialState = {
    name: ''
}

export default function profile (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
        console.log(action);
            return {
                ...state
            };
        case types.LOGOUT:
            return {
                ...state
            };
        default:
            return state;
    }
}