import React, { Component } from 'react';
import './../Form.scss';
import {signup} from "../../utils/auth";
import { Link, Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.pushUserToDatabase = this.pushUserToDatabase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    user: {},
    error: null
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
      this.setState = (state,callback)=>{
        return;
      };
    }

  pushUserToDatabase(event){
    debugger
    event.preventDefault();
    signup(this.state.user)
    .then((response)=> {
      this.setState({
          error: null
      }, ()=> {
        this.props.history.push("/welcome") 
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.response && error.response.data
      })
    })
  }

  handleChange(event){  
    let newUserObject = {...this.state.user};
    newUserObject[event.target.name] = event.target.value;
    this.setState({
      user: newUserObject
    })
  }

  render() {
    return (
      <div className="modal">
        <div id="signup" className="signup big-container">
          <div className="exit-box">
            <p className="exit-btn"><Link to = "/">X</Link></p>
          </div>
          <h1>SIGNUP</h1>
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
              }} type="submit" className="title-blue heartbeat">Sign up</button>
              <p>{this.state.error}</p>
            </form>
        </div>
      </div>
    )
  }
}

export default Signup
