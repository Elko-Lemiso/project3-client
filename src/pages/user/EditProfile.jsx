import React, { Component } from 'react'
import {getUser} from '../../utils/auth'
import {userData} from '../../utils/user'
import './../Form.scss';

class EditProfile extends Component {
  // constructor(props) {
  //   super(props)

  // }

  state = {
    user: getUser(),
    userData: {},
    error: null
  }

  componentDidMount(){
    debugger
    userData(this.state.user.sessionData.email)
    .then((response)=>{
      this.setState({
        userData: response
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  render() {
    debugger
    console.log("render");
    return (
      <div className="edit-profile big-container">
        <h1>EDIT PROFILE</h1>
        <form className="form-styling">
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
            <button onClick={(event)=>{
              event.preventDefault();
              this.pushUserToDatabase(event);
              this.props.toggleForm(event);
            }} type="submit" className="title-blue heartbeat">Submit changes</button>
            <p>{this.state.error}</p>
          </form>
      </div>
    )
  }
}

export default EditProfile
