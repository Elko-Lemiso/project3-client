import React, { Component } from 'react';
import {getUser} from '../utils/auth'
import Nav from '../components/Nav'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            user : getUser()
        }
    }
    protect(){
        getUser() === null ? this.setState({loggedIn : false}): this.setState({loggedIn : true})
    }
    componentDidMount(){
        this.protect()
        this.state.loggedIn !== true && this.props.history.push("/") 
      }

    render() {
        return (
            <div>
                <Nav/>
                <div className="top-section">
                    <div className ="user-details">
                        <div className ="profile-picture-box">
                            <img src = {this.state.user.sessionData.profilePicture.path}alt=""/>
                        </div>
                        <div className ="user-credentials capitalize">
                            <p className ="username capitalize">{this.state.user.sessionData.firstname} {this.state.user.sessionData.lastname}</p>
                            <p className ="capitalize">{this.state.user.sessionData.userType}</p>
                            <p className ="capitalize">{this.state.user.sessionData.email}</p>
                        </div>
                    </div>
                    <div className ="profile-actions">
                        <a href="/editprofile"><button className ="edit-profile-btn">Edit Profile</button></a>
                        <a href="/logout"><button className ="logout-btn">Log out</button></a>
                    </div>
                </div>

                <div className ="bottom-section">
                    <div className ="user-details">
                        <div className ="user-credentials capitalize">
                            <p className ="username capitalize">STATS</p>
                            <p className ="capitalize">You have spent {this.state.user.sessionData.email}</p>
                            <p className ="capitalize">{this.state.user.sessionData.email}</p>
                        </div>
                    </div>
                    <div className ="profile-actions">
                        <a href="/editprofile"><button className ="edit-profile-btn">Edit Profile</button></a>
                        <a href="/logout"><button className ="logout-btn">Log out</button></a>
                    </div>
                </div>
            </div>
            );
    }
}

export default Profile;
