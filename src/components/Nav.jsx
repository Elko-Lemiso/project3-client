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
                    <Link id="nav-users" to ="/"><li><img src={users} alt=""/><span>cleaners</span></li></Link>
                    <Link id="nav-jobs" to ="/jobsfeed"><li><img src={list} alt=""/><span>jobs</span></li></Link>
                    <Link id="add-jobs" className="rotate-center" to ="/postjob">
                      <div>
                          <img src={plus} alt=""/>
                      </div>
                    </Link>
                    <Link id="nav-chat" to="/chat"><li><img src={messages} alt=""/><span>chat</span></li></Link>
                    <Link id="nav-profile" to="/profile"><li><img src={profile} alt=""/><span>profile</span></li></Link>
                </ul>
            </nav>
        );
    }
}

export default Nav