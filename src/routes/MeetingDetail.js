import React, {Component} from 'react';
import MeetingList from '../components/MeetingList';
import { Route } from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';

import * as CONST from '../constants'
import MeetingForm from '../components/MeetingForm';

class MeetingDetail extends Component {
    render() {
        // console.log(location);
        let isCreate = new URLSearchParams(location.search).get('isCreate') === CONST.BOOLEAN.TRUE;
        return (
            <MeetingDetail isCreate={isCreate}/>
        );
    }
};

export default MeetingDetail;