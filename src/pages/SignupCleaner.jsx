import React, { Component } from 'react'
import './SignupCleaner.scss'

class SignupCleaner extends Component {
  state = {
    formAdjusted: false
  }

  componentDidMount(){

  }

  handleChange(){

  }

  placeholderStyling(){
    this.setState({
      formAdjusted: true
    })
  }

  render() {
    return (
      <div id="signup" className="signup big-container">
        <h1>SIGNUP</h1>
        <form className="form-styling">
            <div className="row">
              <div className="column column-50">
                <label>Firstname</label>
                <input type="text" name="firstname" onChange={ ()=>{ this.handleChang(); this.placeholderStyling(); } }/>
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
            <label>User type</label>
            <input type="text" name="userType" onChange={this.handleChange}/>
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
            <button onClick={this.postSignUp} type="submit" className="green heartbeat">Sign up</button>
            <p>{this.state.error}</p>
          </form>
      </div>
    )
  }
}

export default SignupCleaner
