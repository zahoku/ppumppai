import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import Button from 'react-toolbox/lib/button/Button';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';
import ListCheckbox from 'react-toolbox/lib/list/ListCheckbox';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';

import * as actions from '../actions'
import * as CONST from '../constants';


const propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    friends: PropTypes.array,
    place: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.object,
    discription: PropTypes.string
};

// const defaultPropTypes = {
//     id: UUID.v4(),
//     title: '',
//     friends: [],
//     place: '',
//     date: '',
//     time: '',
//     discription: ''
// }

class MeetingForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            friends: this.props.friends,
            place: this.props.place,
            date: this.props.date,
            time: this.props.time,
            discription: this.props.discription,
            searchFriendList: []
        }
        this.handleCreate = this.handleCreate.bind(this);
    }
    handleChange (name, value) {
        console.log(name);
        this.setState({...this.state, [name]: value})
    }
    handleSearchFriends () {
        CONST.GOOGLE_SEARCH_FRIENDS;
    }
    handleCancle () {

    }
    handleCreate () {

    }
    render() {
        return (
            <section>
                <div className="header">
                    <h1>MeetingDetail</h1>
                </div>
                <div className="writeFromType1">
                    <Input label="Name" type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />
                    <Input label="Discription" type="text" name="discription" multiline={true} value={this.state.discription} onChange={this.handleChange.bind(this, 'discription')} />
                    <Input label="Place" type="text" name="place" value={this.state.place} onChange={this.handleChange.bind(this, 'place')} />
                    <DatePicker
                        label='Meeting Date'
                        sundayFirstDayOfWeek
                        onChange={this.handleChange.bind(this, 'date')}
                        value={this.state.date} />
                    <TimePicker
                        label='Meeting time'
                        onChange={this.handleChange.bind(this, 'time')}
                        value={(this.state.time)}
                    />
                    <Autocomplete
                        direction="down"
                        selectedPosition="above"
                        label="Search Friends"
                        onChange={this.handleSearchFriends}
                        source={['a', 'b']}
                        value={this.state.searchFriendList}
                    />
                    <List    />
                    <div className="confirmArea">
                        <Button onClick={this.handleCancle} label='Cancel' accent flat />
                        <Button onClick={this.handleCreate} className="confirm" label='Create' accent flat primary />
                    </div>
                </div>
            </section>
        );
    }
}

MeetingForm.propTypes = propTypes;
// MeetingForm.defaultPropTypes = defaultPropTypes;

const mapStateToProps = (state) => {
    return {
        id: state.meeting.id,
        title: state.meeting.title,
        friends: state.meeting.friends,
        place: state.meeting.place,
        date: state.meeting.date,
        time: state.meeting.time,
        discription: state.meeting.discription,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreate: () => { dispatch(actions.createMeeting()) },
        handleUpdate: () => { dispatch(actions.updateMeeting()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingForm);