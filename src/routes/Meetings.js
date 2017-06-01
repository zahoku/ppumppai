import React, {Component} from 'react';
import MeetingList from '../components/MeetingList';
import { Route, NavLink } from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';

import * as CONST from '../constants'
// import MeetingDetail from '../components/MeetingDetail';

// const Meeting = ({match, location}) => {
//     console.log(location);
//     let isCreate = new URLSearchParams(location.search).get('isCreate') === CONST.BOOLEAN.TRUE;
//     return (
//         <MeetingDetail isCreate={isCreate} />
//     );
// };

class Meetings extends Component {
    static isPrivate = true;

    render() {
        let isDetail = location.pathname.split('/').length > 2;
        console.log(history);
        let handleCreateMeeting = () => {
            history.push('/meetings/create?isCreate=true');
        }
        return (
            <div>
                {/*{ isDetail && <Route path="/meetings/:id" component={Meeting} /> }
                { !isDetail && */}
                    <section>
                    <div className="header">
                    <h1>Meeting List</h1>
                    <NavLink to='/meetings/create?isCreate=true'>Create Meeting</NavLink>
                    </div>
                    <MeetingList></MeetingList>
                    </section>
                {/*}*/}
            </div>
        );
    }
}

export default Meetings;