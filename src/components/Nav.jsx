import React, { Component } from 'react';
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import profile from '../images/profile.svg'
import list from '../images/list.svg'
import users from '../images/users.svg'
import './nav.scss'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav id="main-nav">
                <h2>cleanR</h2>
                <ul>
                    <li><img src={users} alt=""/><span>users</span></li>
                    <li><img src={list} alt=""/><span>list</span></li>
                    <Link id = "" className ="rotate-center" to ="/addjob">
                    <div>
                        <img src={plus} alt=""/>
                    </div>
                    </Link>
                    <li><img src={messages} alt=""/><span>messages</span></li>
                    <li><img src={profile} alt=""/><span>profile</span></li>
                </ul>
            </nav>
        );
    }
}

export default Nav