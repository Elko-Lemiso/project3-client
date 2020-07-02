import React, { Component } from 'react';
import {getUser} from '../../utils/auth';
import Nav from '../../components/Nav';
import {Redirect , Link} from 'react-router-dom';
import './Profile.scss';
import {userData} from '../../utils/user';

class Profile extends Component {
    constructor(props){
      super(props)
      this.user = getUser()
      this.state={
          user: this.user,
          profilePicture : null,
          error : null
      }
    }
    componentDidMount(){
      debugger
      userData(this.state.user.sessionData.id)
      .then((response)=>{
        this.setState({
          user: response.data.user,
          profilePicture : response.data.user.profilePicture.path,
          error : null
        })
      })
      .catch((error)=>{   
        this.setState({
          error: error.response
        })
      })
      console.log("Jigaboo",this.state);
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
                            <img src = {this.state.profilePicture}alt=""/>
                        </div>
                        <div className ="user-credentials">
                            <p className ="username">{this.state.user.firstname} {this.state.user.lastname}</p>
                            <span className ="capitalize">{this.state.user.userType}</span>
                        </div>
                    </div>
                    <div className ="profile-actions">
                        <Link to="/editprofile"><button className ="edit-profile-btn blue">Edit Profile</button></Link>
                        <Link to="/logout"><button className ="logout-btn red">Log out</button></Link>
                    </div>
                </div>

                <div className ="bottom-section">
                    <div className ="user-details">
                        <div className ="user-credentials">
                            <p className ="username">STATS</p>
                            <p className ="capitalize">You have spent 0</p>
                            <p className ="capitalize">{this.state.user.email}</p>
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
