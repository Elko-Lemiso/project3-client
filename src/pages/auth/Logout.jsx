import React, { Component } from 'react'
import {logout} from '../../utils/auth'
import { Link, Route, Redirect } from 'react-router-dom';

class Logout extends Component {

  componentDidMount(){
    debugger
    logout()
    .then(()=>{
      debugger
      this.props.history.push("/");
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <h3>Logging out..</h3>
      </div>
    )
  }
}

export default Logout