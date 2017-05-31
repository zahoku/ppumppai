import * as types from '../actions/ActionTypes';

const initialState = {
    list: []
}

export default function meetings (state = initialState, action) {
    switch (action.type) {
        case types.CREATE_MEETING:
            return {
                ...state
            };
        case types.DELETE_MEETING:
            return {
                ...state
            };
        default:
            return state;
    }
}