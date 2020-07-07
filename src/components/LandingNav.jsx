import React, { Component } from 'react';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import { Link, Route } from 'react-router-dom';
import '../pages/LandingPage.scss'

class LandingNav extends Component {
  render() {
      return (
        <>
          <nav id="landing-nav">
              <h2>cleanR</h2>
              <ul>
                <Link className ="link" to="/auth/signup" ><li>Sign Up</li></Link>
                <Link className ="link" to="/auth/login" ><li>Login</li></Link>
              </ul>
          </nav>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          
        </>
      );
  }
}

export default LandingNav
