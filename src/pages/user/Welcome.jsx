import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getUser} from '../../utils/auth'
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
      debugger
        return (
            <div className="white big-container welcome-container slide-in-right">
                <div className="content">
                    <h1>Welcome</h1>
                    {
                        (this.state.user.sessionData.userType === "cleaner")?
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
                    <button className="title-blue"><Link to  = "/profile">Explore platform</Link></button>
                    <button className="title-blue heartbeat"><Link to = "/editProfile">Complete profile</Link></button>
                </div>
            </div>
        );
    }
}

export default Welcome;
