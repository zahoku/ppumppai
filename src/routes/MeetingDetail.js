import React, {Component} from 'react';

import * as CONST from '../constants'
import MeetingForm from '../components/MeetingForm';

class MeetingDetail extends Component {
    render() {
        // console.log(location);
        let isCreate = new URLSearchParams(location.search).get('isCreate') === CONST.BOOLEAN.TRUE;
        return (
            <MeetingForm isCreate={isCreate}/>
        );
    }
};

export default MeetingDetail;