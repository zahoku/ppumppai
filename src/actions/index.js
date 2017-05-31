import * as types from './ActionTypes';
import { createHashHistory } from 'history'

export function login (result) {
    console.log(result);
    let history = createHashHistory();
    history.push('/');
    return {
        result: result,
        type: types.LOGIN
    }
}
export function logout() {
    return {
        type: types.LOGOUT
    }
}
export function createMeeting() {
    return {
        type: types.CREATE_MEETING
    }
}
export function updateMeeting () {
    return {
        type: types.UPDATE_MEETING
    }
}
export function deleteMeeting() {
    return {
        type: types.DELETE_MEETING
    }
}
export function addFriend() {
    return {
        type: types.ADD_FRIEND
    }
}
export function deleteFriend() {
    return {
        type: types.DELETE_FRIEND
    }
}