import React, { Component } from 'react';
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import profile from '../images/profile.svg'
import list from '../images/list.svg'
import users from '../images/users.svg'
import './nav.scss'
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props){
        super(props)
        this.buttonRef = React.createRef();
        
    }


    handleClick(){
        const plus = this.buttonRef.current
        plus.classList.toggle('rotate-center')
    }
    render() {
        return (
            <nav id="main-nav">
                <h2>cleanR</h2>
                <ul>
                    <Link id="nav-users" to ="/cleaners"><li><img src={users} alt=""/><span>cleaners</span></li></Link>
                    <Link id="nav-jobs" to ="/jobsfeed"><li><img src={list} alt=""/><span>jobs</span></li></Link>
                    <Link ref = {this.buttonRef} id="add-jobs" onClick={() =>{this.handleClick()}} to ="/postjob">
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