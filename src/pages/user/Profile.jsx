import React, { Component } from 'react';
import {getUser} from '../../utils/auth';
import Nav from '../../components/Nav';
import logout from '../../images/logout.svg'
import edit from '../../images/pencil.svg'
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
                  <div className="action">
                  <Link to="/editprofile"><img src={edit} alt=""/></Link>
                  <Link to="/logout"><img src={logout} alt=""/></Link>
                  </div>
                <div className="personal-details">
                  <h4 className="username uppercase-font"> {this.state.userData.firstname} {this.state.userData.lastname}</h4>
                  <p className="usertype">{this.state.userData.userType}</p>
                  <div className="details-columns">
                    <div className="designation">
                      <p>E-mail address</p>
                      <p>Mobile number</p>
                      <p>Chamber of Commerce number</p>
                    </div>
                    <div className="details">
                      <p>{this.state.userData.email}</p>
                      <p>{this.state.userData.telNr}</p>
                      <p>{this.state.userData.chamberOfCommerceNr}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <div className="user-content">
                  <p className="profile-sub-title uppercase-font">User bio</p>
                  <p className="content-lines">{this.state.userData.bio}</p>
                </div>
                <div className="perf-address">
                  <div className="perf">
                    <div className="jobs">
                      <p className="big-numbers uppercase-font">115</p>
                      <p className="content-lines">#jobs</p>
                    </div>
                    <div className="earn">
                      <p className="big-numbers uppercase-font">2215</p>
                      <p className="content-lines">euro</p>
                    </div>
                  </div>
                  <div className="address">
                  <p className="profile-sub-title uppercase-font">Address details</p>
                    <p className="content-lines">{this.state.userData.address.street} {this.state.userData.address.houseNr} {this.state.userData.address.houseNrAddition}</p>
                    <p className="content-lines">{this.state.userData.address.city}, {this.state.userData.address.zipCode}</p>
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
