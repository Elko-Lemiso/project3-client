import React, { Component } from 'react';
import {getUser} from '../../utils/auth'
import Nav from '../../components/Nav'
import {Redirect, Link } from 'react-router-dom';
import './Profile.scss'
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
        return (
          <>
          { !this.state.user ?
            <Redirect to="/" />:
              <div>
                <Nav/>
                <div className = "container">
                  <div className="top-section">
                      <div className ="user-details">
                          <div className ="profile-picture-box">
                              <img src = {this.state.user.sessionData.profilePicture.path}alt=""/>
                          </div>
                          <div className ="user-credentials">
                              <p className ="username">{this.state.user.sessionData.firstname} {this.state.user.sessionData.lastname}</p>
                              <span className ="capitalize">{this.state.user.sessionData.userType}</span>
                          </div>
                      </div>
                      <div className ="profile-actions">
                          <button className ="edit-profile-btn blue">Edit</button>
                          <button className ="logout-btn red"><Link style={{ textDecoration: 'none', color : 'white' ,fontSize: '0.8rem'  }}  to = "/logout">Log out</Link></button>
                      </div>
                  </div>

                  <div className ="bottom-section">
                      <div className ="user-details">
                          <div className ="user-credentials">
                              <p className ="username">STATS</p>
                              <p className ="capitalize">You have made 0</p>
                              <p className ="capitalize">You have completed 0 jobs</p>
                          </div>
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
