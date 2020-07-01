import React, { Component } from 'react'
import {getUser} from '../../utils/auth'
import {userData} from '../../utils/user'
import './../Form.scss';

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
  }

  state = {
    user: getUser(),
    userData: {},
    error: null
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

  updateProfile(event){
    var formData = new FormData(this.formRef.current);
  }

  handleChange(event){  
    let newUserObject = {...this.state.userData};
    newUserObject[event.target.name] = event.target.value;
    this.setState({
      userData: newUserObject
    })
  }

  render() {
    debugger
    return (
      <div className="big-container">
        <div id="edit-profile" className="edit-profile">
          <h1>EDIT PROFILE</h1>
          <form className="form-styling" ref={this.formRef}>
            <div className="row">
              <div className="column column-50">
                <label>Firstname</label>
                <input type="text" name="firstname" onChange={this.handleChange}/>
              </div>
              <div className="column column-50">
                <label>Lastname</label>
                <input type="text" name="lastname" onChange={this.handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="column column-60">
                <label>Street</label>
                <input type="text" name="street" onChange={this.handleChange}/>
              </div>
              <div className="column column-20">
                <label>Nr. </label>
                <input type="number" name="houseNr" onChange={this.handleChange}/>
              </div>
              <div className="column column-20">
                <label>Add.</label>
                <input type="text" name="houseNrAddition" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="column column-60">
                <label>City</label>
                <input type="text" name="city" onChange={this.handleChange}/>
              </div>
              <div className="column column-40">
                <label>Zip code</label>
                <input type="text" name="zipCode" onChange={this.handleChange}/>
              </div>
            </div>
            <label>Phone number</label>
            <input type="number" name="telNr" onChange={this.handleChange}/>
            <div className="row">
              <div className="column column-50 radio">
                <label htmlFor="tourist">Client</label>
                <input className="boolean" type="radio" name="userType" value="client" onChange={this.handleChange}/>
              </div>
              <div className="column column-50 radio">
                <label htmlFor="artist">Cleaner</label>
                <input className="boolean" type="radio" name="userType" value="cleaner" onChange={this.handleChange}/>
              </div>
            </div>
            <label>Your Bio: Shortly tell something about yourself</label>
            <input className="bio" type="text" name="bio" onChange={this.handleChange}/>
            <label>Chamber of Commerce number</label>
            <input type="number" name="chamberOfCommerceNr" onChange={this.handleChange}/>
            <div className="row">
              <div className="column column-60">
                <label>Email address</label>
                <input type="text" name="email" onChange={this.handleChange}/>
              </div>
              <div className="column column-40">
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>
              </div>
            </div>
            <input type="number" hidden name="lat" onChange={this.handleChange}/>
            <input type="number" hidden name="long" onChange={this.handleChange}/>
            <label className="profile-picture-label">Upload your profile picture</label>
            <input type="file" className="profile-picture-input" name="profilePicture" onChange={this.handleChange}/> 
            <button onClick={(event)=>{
              event.preventDefault();
              this.updateProfile(event);
            }} type="submit" className="title-blue heartbeat">Submit changes</button>
            <p>{this.state.error}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default EditProfile
