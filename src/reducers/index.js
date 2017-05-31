import { combineReducers } from 'redux';

import profile from './profile';
import meetings from './meetings';
import meeting from './meeting';
import friends from './friends';

const reducers = combineReducers({
    profile, meetings, meeting, friends
});

export default reducers;