import React, {Component} from 'react';
import MeetingList from '../components/MeetingList';
import {NavLink} from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';

class Meetings extends Component {
    static isPrivate = true;

    render() {
        return (
            <div>
                <section>
                    <div className="header">
                        <h1>Meeting List</h1>
                        <NavLink to='/meetings/create?isCreate=true'>
                            <Button className="confirm" label='Create Meeting' accent flat primary/>
                        </NavLink>
                    </div>
                    <MeetingList></MeetingList>
                </section>
            </div>
        );
    }
}

export default Meetings;