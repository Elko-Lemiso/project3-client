import React, { Component } from 'react'
import {getUser} from '../../utils/auth'
import {userData} from '../../utils/user'
import {updateUserData} from '../../utils/user'
import {Redirect } from 'react-router-dom';
import './../Form.scss';

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.updateProfilePicture = this.updateProfilePicture.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  state = {
    user: getUser(),
    userData: {
      address: {},
      userType: 'client'
    },
    error: null
  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    userData(this.state.user.sessionData.id)
    .then((response)=>{
      this.setState({
        userData: response.data.user,
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  updateProfile(){
    debugger
    updateUserData(this.state.userData)
    .then((response)=>{
      this.props.history.push("/profile");
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  updateProfilePicture(event){
    var profilePicture = new FormData(this.formRef.current);
  }

  handleChange(event){
    debugger
    let newUserObject = {...this.state.userData};
    newUserObject[event.target.name] = event.target.value;
    this.setState({
      userData: newUserObject
    })
  }

  handleAddressChange(event){
    debugger
    let newUserObject = {...this.state.userData};
    newUserObject.address[event.target.name] = event.target.value;
    this.setState({
      userData: newUserObject
    })
  }

  render() {
    if(!this.state.user && !this.state.userData){
      return(
        <Redirect to="/" />
      )
    } else{
      return(
        <div className="big-container">
          <div id="edit-profile" className="edit-profile">
            <h1>EDIT PROFILE</h1>
            <p>We advise you to professionalize your profile and gain more trust by uploading your profile picture and updating your bio and phone number!</p>
            <form ref={this.formRef} className="form-styling">
              <label className="profile-picture-label">Upload your profile picture</label>
              <input type="file" className="profile-picture-input" name="profilePicture" onChange={this.handleChange}/> 
              <button onClick={(event)=>{
                  event.preventDefault();
                  this.updateProfilePicture(event);
                }} type="submit" className="title-blue">Upload picture</button>
            </form>

            <p>Update your other details down here.</p>
            <form className="form-styling">
              <label>Tell shortly about yourself</label>
              <textarea className="bio" type="text" value={this.state.userData.bio} name="bio" onChange={this.handleChange}/>
              
              <div className="row">
                <div className="column column-50">
                  <label>Phone number</label>
                  <input type="number" name="telNr" value={this.state.userData.telNr} onChange={this.handleChange}/>
                </div>
                <div className="column column-50">
                  <label>Commerce nr.</label>
                  <input type="number" name="chamberOfCommerceNr" value={this.state.userData.chamberOfCommerceNr} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="row">
                <div className="column column-50">
                  <label>Firstname</label>
                  <input type="text" name="firstname" value={this.state.userData.firstname} onChange={this.handleChange}/>
                </div>
                <div className="column column-50">
                  <label>Lastname</label>
                  <input type="text" name="lastname" value={this.state.userData.lastname} onChange={this.handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="column column-60">
                  <label>Street</label>
                  <input type="text" name="street" value={this.state.userData.address.street} onChange={this.handleAddressChange}/>
                </div>
                <div className="column column-20">
                  <label>Nr. </label>
                  <input type="number" name="houseNr" value={this.state.userData.address.houseNr} onChange={this.handleAddressChange}/>
                </div>
                <div className="column column-20">
                  <label>Add.</label>
                  <input type="text" name="houseNrAddition" value={this.state.userData.address.houseNrAddition} onChange={this.handleAddressChange}/>
                </div>
              </div>
              <div className="row">
                <div className="column column-60">
                  <label>City</label>
                  <input type="text" name="city" value={this.state.userData.address.city} onChange={this.handleAddressChange}/>
                </div>
                <div className="column column-40">
                  <label>Zip code</label>
                  <input type="text" name="zipCode" value={this.state.userData.address.zipCode} onChange={this.handleAddressChange}/>
                </div>
              </div>
              <div className="row">
                <div className="column column-50 radio">
                  <label htmlFor="tourist">Client</label>
                  <input className="boolean" checked={this.state.userData.userType === "client"} type="radio" name="userType" value="client" onChange={this.handleChange}/>
                </div>
                <div className="column column-50 radio">
                  <label htmlFor="artist">Cleaner</label>
                  <input className="boolean" checked={this.state.userData.userType === "cleaner"} type="radio" name="userType" value="cleaner" onChange={this.handleChange}/>
                </div>
              </div>
              {/* <div className="row">
                <div className="column column-60">
                  <label>Email address</label>
                  <input type="text" name="email" value={this.state.userData.email} onChange={this.handleChange}/>
                </div>
                <div className="column column-40">
                  <label>Password</label>
                  <input type="password" name="password" onChange={this.handleChange}/>
                </div>
              </div> */}
              <input type="number" hidden name="lat" value={this.state.userData.address.lat} onChange={this.handleAddressChange}/>
              <input type="number" hidden name="long" value={this.state.userData.address.long} onChange={this.handleAddressChange}/>
              <button onClick={(event)=>{
                event.preventDefault();
                this.updateProfile();
              }} type="submit" className="title-blue">Submit changes</button>
              <p>{this.state.error}</p>
            </form>
          </div>
      </div>
      )
    }
  }
}

export default EditProfile
