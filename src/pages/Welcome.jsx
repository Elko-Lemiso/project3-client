import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getUser} from '../utils/auth'
import './Welcome.scss'
class Welcome extends Component {
    constructor(props){
        super(props)
        this.user = getUser()
        this.state = {
            user : this.user
        }
    }
    

    componentDidMount=()=>{
        let user = getUser()
        console.log(this.state)
        user === null ? this.props.history.push("/login") : this.setState({user : user})
      }

    render() {
        return (
            <div className="white big-container slide-in-right">
                <div className="content">
                    <h1>Welcome</h1>
                    {
                        (this.state.user.sessionData.userType === "cleaner")?
                        <div className = "welcome">
                            <p>You are a few steps away from getting your first job as a cleanR.</p>
                            <p>From experience we know that you will have better luck finding a job with a good profile.</p>
                        </div>
                         : 
                         <div className = "welcome">
                             <p>You are a few steps away from getting your first cleanR.</p>
                            <p>From experience you can find one quicker if you complete your profile.</p>
                         </div>
                    }
                </div>
                <div className="buttons">
                    <button><Link to  = "/profile">Skip for now</Link></button>
                    <button><Link to = "/editProfile">Complete profile</Link></button>
                </div>
            </div>
        );
    }
}

export default Welcome;
