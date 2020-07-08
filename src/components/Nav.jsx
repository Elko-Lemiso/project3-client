import React, { Component } from 'react';
import plus from '../images/plus.svg'
import cleanHouse from '../images/cleanHouse.svg'
import messages from '../images/messages.svg'
import profile from '../images/profile.svg'
import list from '../images/list.svg'
import users from '../images/users.svg'
import {getUser} from '../utils/auth'
import './nav.scss'
import { Link } from 'react-router-dom';


class Nav extends Component {
    constructor(props){
        super(props)
        this.user = getUser()
        this.buttonRef = React.createRef();
        this.state = {
            user : this.user
        }
    }

    
    render() {
        return (
            <nav id="main-nav">
                <Link to="/"><h2>cleanR</h2></Link>
                <ul>
                    <Link id="nav-users" to ="/cleaners"><li><img src={users} alt=""/><span>cleaners</span></li></Link>
                    {
                        (this.state.user.userType==="cleaner")? 
                        <Link id="nav-jobs" to ="/jobsfeed"><li><img src={list} alt=""/><span>jobs</span></li></Link>
                        :
                        <Link id="nav-jobs" to ="/myjobsfeed"><li><img src={list} alt=""/><span>My jobs</span></li></Link>
                    }   
                    {
                    (this.state.user.userType==="client")?                     
                    <Link ref = {this.buttonRef} id="add-jobs" to ="/postjob">
                      <div>
                          <img src={plus} alt=""/>
                      </div>
                    </Link>
                    :
                    <Link ref = {this.buttonRef} id="add-jobs" to ="/cleanerjobsfeed">
                      <div id="cleanHouse">
                          <img src={cleanHouse} alt=""/>
                      </div>
                    </Link>
                    }
                    <Link id="nav-chat" to="/chatsfeed"><li><img src={messages} alt=""/><span>chat</span></li></Link>
                    <Link id="nav-profile" to="/profile"><li><img src={profile} alt=""/><span>profile</span></li></Link>
                </ul>
            </nav>
        );
    }
}

export default Nav