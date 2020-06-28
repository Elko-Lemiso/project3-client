import React, { Component } from 'react'
import './Signup.scss'

class Signup extends Component {
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
      <div className="signup big-container">
        <form className="form-styling">
            <label>Firstname</label>
            <input type="text" name="firstname" onChange={ ()=>{ this.handleChang(); this.placeholderStyling(); } }/>
            <label>Lastname</label>
            <input type="text" name="lastname" onChange={this.handleChange} />
            <label>Email address</label>
            <input type="text" name="email" onChange={this.handleChange}/>
            <label>User type</label>
            <input type="text" name="userType" onChange={this.handleChange}/>
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange}/>
            <button onClick={this.postSignUp} type="submit" className="green heartbeat">Sign up</button>
            <p>{this.state.error}</p>
          </form>
      </div>
    )
  }
}

export default Signup
