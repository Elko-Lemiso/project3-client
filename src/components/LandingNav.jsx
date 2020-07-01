import React, { Component } from 'react';
import plus from '../images/plus.svg';
import messages from '../images/messages.svg';
import profile from '../images/profile.svg';
import list from '../images/list.svg';
import users from '../images/users.svg';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import { Link, Route } from 'react-router-dom';
import '../pages/LandingPage.scss'
class LandingNav extends Component {
  constructor(props){
    super(props);
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  state = {
    toggleSignUpForm: false,
    toggleLoginForm: false
  }

  toggleSignUpModal(event){
    event.preventDefault();
    this.setState({
      toggleSignUpForm: !this.state.toggleSignUpForm
    })
  }

  toggleLoginModal(event){
    event.preventDefault();
    this.setState({
      toggleLoginForm: !this.state.toggleLoginForm
    })
  }

  render() {
      return (
        <>
          <nav id="landing-nav">
              <h2>cleanR</h2>
              <ul>
                {/* <div onClick={this.toggleSignUpModal}><li>Sign Up</li></div>
                <div onClick={this.toggleLoginModal}><li>Login</li></div> */}
                <li><Link to="/auth/login" >Login </Link></li>
                <li><Link to="/auth/signup" >Sign Up </Link></li>
              </ul>
          </nav>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          { this.state.toggleSignUpForm === true?
            <Signup {...this.props} toggleForm={this.toggleSignUpModal}/> :
            <></>
          }
          {
            this.state.toggleLoginForm === true?
            <Login {...this.props} toggleForm={this.toggleLoginModal}/> :
            <></>
          }
          
        </>
      );
  }
}

export default LandingNav

// class Nav extends Component {
//     render() {
//         return (
//             <nav>
//                 <h2>cleanR</h2>
//                 <ul>
//                     <li><img src={users} alt=""/></li>
//                     <li><img src={list} alt=""/></li>
//                     <div>
//                         <img src={plus} alt=""/>
//                     </div>
//                     <li><img src={messages} alt=""/></li>
//                     <li><img src={profile} alt=""/></li>
//                 </ul>
//             </nav>
//         );
//     }
// }

// export default Nav
