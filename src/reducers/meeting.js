import * as types from '../actions/ActionTypes';

const initialState = {
    id: '',
    title: 'Meeting Name',
    friends: [],
    place: '',
    date: '',
    time: new Date(),
    discription: ''
}

export default function meeting (state = initialState, action) {
    switch (action.type) {
        case  types.CREATE_MEETING:
            return {
                ...state
            }
        case  types.UPDATE_MEETING:
            return {
                ...state
            }
        default:
            return state;
    }
}