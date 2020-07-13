import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {getUser} from '../utils/auth';
import './Welcome.scss';

class Welcome extends Component {
    constructor(props){
        super(props)
        this.user = getUser()
        this.state = {
            user : this.user
        }
    }

    render() {
        return (
            <>
            { !this.state.user ?
            <Redirect to="/auth/login" />:
            <div className="white big-container welcome-container slide-in-right">
                <div className="content">
                    <h1>WELCOME</h1>
                    {
                        this.state.user.userType === "cleaner"?
                        <div className = "welcome">
                            <p>You are a few steps away from getting your first job as a cleanR.</p>
                            <p>From experience we know that you will have more success finding a good match 
                              if you fully complete your profile with for example a picture and your phone number.</p>
                        </div>
                         : 
                         <div className = "welcome">
                            <p>You are a few steps away from getting your first cleanR.</p>
                            <p>From experience we know that you will have more success finding a good match 
                              if you fully complete your profile with for example a picture and your phone number.</p>
                         </div>
                    }
                </div>
                <div className="buttons">
                <Link to  = "/profile"><button className="title-blue">Explore platform</button></Link>
                <Link to = "/editProfile"><button className="title-blue heartbeat">Complete profile</button></Link>
                </div>
            </div>
    }
            </>
        );
    }
}

export default Welcome;
