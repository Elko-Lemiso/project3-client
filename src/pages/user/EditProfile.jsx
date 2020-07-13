import React, { Component } from 'react';
import {getUser} from '../../utils/auth';
import {userData} from '../../utils/user';
import {geocode} from '../../utils/googleMaps';
import {updateUserDataRequest} from '../../utils/user';
import {updateProfilePictureRequest} from '../../utils/user';
import { Redirect } from 'react-router-dom';
import Nav from '../../components/Nav';
import './../Form.scss';

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.updateProfilePicture = this.updateProfilePicture.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updateProfilePicture = this.updateProfilePicture.bind(this);
  }

  state = {
    user: getUser(),
    userData: {
      address: {},
      userType: 'client'
    },
    profilePicture: undefined,
    buttonStatus: 'upload',
    error: null
  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    userData(this.state.user.id)
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

  getGeoCoordinates(){
    let addressLine = '';
    if(this.state.userData.address.street && this.state.userData.address.city && this.state.userData.address.houseNr){
      addressLine = `${this.state.userData.address.street} ${this.state.userData.address.houseNr} ${this.state.userData.address.city}`;
      geocode(addressLine)
      .then((response)=>{
        console.log(response);
        let newUserObject = {...this.state.userData};
        newUserObject.address['lat'] = response.data.geoLocation.lat;
        newUserObject.address['long'] = response.data.geoLocation.lng;
        this.setState({
          userData: newUserObject
        })
        console.log(this.state.userData);
      })
      .then(()=>{
        this.updateProfile();
      })
    } else if(this.state.userData.address.street && this.state.userData.address.city){
      addressLine = `${this.state.userData.address.street} ${this.state.userData.address.city}`;
      geocode(addressLine)
      .then((response)=>{
        console.log(response);
        let newUserObject = {...this.state.userData};
        newUserObject.address['lat'] = response.data.geoLocation.lat;
        newUserObject.address['long'] = response.data.geoLocation.lng;
        this.setState({
          userData: newUserObject
        })
        console.log(this.state.userData);
      })
      .then(()=>{
        this.updateProfile();
      })
    }
    else {
      console.log('No valid address to get the geo location codes.');
      this.updateProfile();
    }
  }

  updateProfile(){
    updateUserDataRequest(this.state.userData)
    .then((response)=>{
      this.props.history.push("/profile");
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  updateProfilePicture(){
    var profilePicture = new FormData(this.formRef.current);
    updateProfilePictureRequest(profilePicture, this.state.user.id)
    .then((response)=>{
      // this.props.history.push("/profile");
      console.log(response);
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  handleChange(event){
    let newUserObject = {...this.state.userData};
    newUserObject[event.target.name] = event.target.value;
    this.setState({
      userData: newUserObject
    })
  }

  handlePictureChange(event){
    let newPictureObject = {...this.state.profilePicture};
    newPictureObject[event.target.name] = event.target.value;
    this.setState({
      profilePicture: newPictureObject
    })
  }

  handleAddressChange(event){
    let newUserObject = {...this.state.userData};
    newUserObject.address[event.target.name] = event.target.value;
    this.setState({
      userData: newUserObject
    })
  }

  toggleButtonStatus(){
    this.setState({
      buttonStatus: "done"
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
          <Nav/>
          <div id="edit-profile" className="edit-profile">
            <h1>EDIT PROFILE</h1>
            <p>We advise you to professionalize your profile and gain more trust by uploading your profile picture and updating your bio and phone number!</p>
            <form ref={this.formRef} className="form-styling">
              <label className="profile-picture-label">Upload your profile picture</label>
              <input type="file" className="profile-picture-input" name="profilePicture" onChange={this.handlePictureChange}/> 
              <button onClick={(event)=>{
                  event.preventDefault();
                  this.updateProfilePicture(event);
                  this.toggleButtonStatus();

              }} type="submit" id={this.state.buttonStatus} className="title-blue capitalize">{this.state.buttonStatus}</button>
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
              <input type="number" hidden name="lat" value={this.state.userData.address.lat} onChange={this.handleAddressChange}/>
              <input type="number" hidden name="long" value={this.state.userData.address.long} onChange={this.handleAddressChange}/>
              <button onClick={(event)=>{
                event.preventDefault();
                this.getGeoCoordinates();
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
