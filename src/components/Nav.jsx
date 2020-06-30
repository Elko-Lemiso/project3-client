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
<<<<<<< HEAD
            <nav id = 'main-nav'>
=======
            <nav id="main-nav">
>>>>>>> 733b9c32b93b254682add42820fa2d7da61bf51f
                <h2>cleanR</h2>
                <ul>
                    <li><img src={users} alt=""/></li>
                    <li><img src={list} alt=""/></li>
                    <div>
                        <img src={plus} alt=""/>
                    </div>
                    <li><img src={messages} alt=""/></li>
                    <li><img src={profile} alt=""/></li>
                </ul>
            </nav>
        );
    }
}

export default Nav