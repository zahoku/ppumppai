import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HomeIcon from 'react-icons/lib/md/home';
import MeetingsIcon from 'react-icons/lib/md/people-outline';

const Header = () => {
    let headerIconSize = '1.4em';
    return (
        <header>
            <h1>PPumPPai</h1>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active"><HomeIcon size={headerIconSize} />Home</NavLink></li>
                    {/*<li><NavLink to="/friends" activeClassName="active">친구</NavLink></li>*/}
                    <li><NavLink to="/meetings" activeClassName="active"><MeetingsIcon size={headerIconSize} />Meetings</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;