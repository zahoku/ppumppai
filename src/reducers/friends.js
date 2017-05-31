import * as types from '../actions/ActionTypes';
import { browserHistory } from 'react-router';

const initialState = {
    list: []
}

export default function friends (state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND:
            browserHistory.push('/');
            console.log(state);
            return {
                ...state
            };
        case types.DELETE_FRIEND:
            return {
                ...state
            };
        default:
            return state;
    }
}