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
          userData: {
            address: {},
          },
          user: this.user,
          profilePicture : null,
          error : null,
      }
    }
    componentDidMount(){
      userData(this.state.user.id)
      .then((response)=>{
        this.setState({
          userData: response.data.user,
          profilePicture: response.data.user.profilePicture.path,
          error: null
        })
      })
      .catch((error)=>{   
        this.setState({
          error: error.response
        })
      })
    }

/* <Link to="/editprofile"><button className ="edit-profile-btn blue">Edit Profile</button></Link>
              <Link to="/logout"><button className ="logout-btn red">Log out</button></Link> */

  render() {
    return (
      <>
      { !this.state.user ?
        <Redirect to="/auth/login" /> :
        <div className="big-container" id="profile-detail-page">
          
          <Nav/>
          <h1>PROFILE PAGE</h1>
          <div className="profile-container">
            <div className="profile-card">
              <div className="top-section">
                <div className="image-box">
                  <img src={this.state.profilePicture} alt=""/>
                </div>
                <div className="personal-details">
                  <h4 className="username"> {this.state.userData.firstname} {this.state.userData.lastname}</h4>
                  <div className="details-columns">
                    <div className="designation">
                      <p>E-mail address:</p>
                      <p>Mobile number:</p>
                      <p>Chamber of Commerce number:</p>
                    </div>
                    <div className="details">
                      <p>{this.state.userData.email}</p>
                      <p>{this.state.userData.telNr}</p>
                      <p>{this.state.userData.chamberOfCommerceNr}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line">
                <hr/>
              </div>
              <div className="bottom-section">
                <div className="user-content">
                  <p>{this.state.userData.userType}</p>
                  <p>{this.state.userData.bio}</p>
                </div>
                <div className="perf-address">
                  <div className="perf">
                    <div className="jobs">
                      <p className="big-numbers">115</p>
                      <p>JOBS DONE</p>
                    </div>
                    <div className="earn">
                      <p className="big-numbers">2215</p>
                      <p>EURO</p>
                    </div>
                  </div>
                  <div className="address">
                    <p>{this.state.userData.address.street} {this.state.userData.address.houseNr} {this.state.userData.address.houseNrAddition}</p>
                    <p>{this.state.userData.address.city} {this.state.userData.address.zip}</p>
                  </div>
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
