import React, { Component } from 'react';
import {getUser} from '../utils/auth'
import Nav from '../components/Nav'
import {Redirect } from 'react-router-dom';

class Profile extends Component {
    constructor(props){
      super(props)
      this.user = getUser()
      this.state={
          user: this.user
      }
    }
    componentDidMount=()=>{
      let user = getUser()
      console.log(this.state)
      user === null ? this.props.history.push("/") : this.setState({user : user})
    }

    render() {
      debugger
        return (
          <>
          { !this.state.user ?
            <Redirect to="/" />:
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
            }
          </>
        );
    }
}

export default Profile;
