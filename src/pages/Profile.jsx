import React, { Component } from 'react';
import {getUser} from '../utils/auth'
import Nav from '../components/Nav'

class Profile extends Component {
    constructor(props){
        super(props)
        this.user = getUser()
        this.state={
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
            <div>
                <Nav/>
                <div className="top-section">
                    <div className ="user-details">
                        <div className ="profile-picture-box">
                            <img src="" alt=""/>
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

                </div>
            </div>
            );
    }
}

export default Profile;
