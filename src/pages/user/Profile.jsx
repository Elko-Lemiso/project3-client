import React, { Component } from 'react';
import {getUser} from '../../utils/auth'
import Nav from '../../components/Nav'
import {Redirect } from 'react-router-dom';
import './Profile.scss'
import profilePicture from '../../images/profile.svg'
class Profile extends Component {
    constructor(props){
      super(props)
      this.user = getUser()
      this.state={
          user: this.user
      }
    }
    componentDidMount(){
      debugger
      userData(this.state.user.sessionData.id)
      .then((response)=>{
        this.setState({
          userData: response.data.user
        })
      })
      .catch((error)=>{
        this.setState({
          error: error.response.data.message
        })
      })
    }

    render() {
        return (
          <>
          { !this.state.user ?
            <Redirect to="/auth/login" />:
              <div>
                <Nav/>
                <div className="top-section">
                    <div className ="user-details">
                        <div className ="profile-picture-box">
                            <img src = {profilePicture}alt=""/>
                        </div>
                        <div className ="user-credentials">
                            <p className ="username">{this.state.user.sessionData.firstname} {this.state.user.sessionData.lastname}</p>
                            <span className ="capitalize">{this.state.user.sessionData.userType}</span>
                        </div>
                    </div>
                    <div className ="profile-actions">
                        <a href="/editprofile"><button className ="edit-profile-btn blue">Edit Profile</button></a>
                        <a href="/logout"><button className ="logout-btn red">Log out</button></a>
                    </div>
                </div>

                <div className ="bottom-section">
                    <div className ="user-details">
                        <div className ="user-credentials">
                            <p className ="username">STATS</p>
                            <p className ="capitalize">You have spent {this.state.user.sessionData.email}</p>
                            <p className ="capitalize">{this.state.user.sessionData.email}</p>
                        </div>
                    </div>
                </div>
              </div>
            }
          </>
        );
    }
}

export default Profile;
