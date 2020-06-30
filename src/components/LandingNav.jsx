import React, { Component } from 'react';
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import profile from '../images/profile.svg'
import list from '../images/list.svg'
import users from '../images/users.svg'
import Signup from '../pages/Signup'
import { Link } from 'react-router-dom';

class LandingNav extends Component {
  constructor(props){
    super(props);
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
  }

  state = {
    toggleForm: false
  }

  toggleSignUpModal(event){
    event.preventDefault();
    this.setState({
      toggleForm: !this.state.toggleForm
    })
  }

  render() {
      return (
        <>
          <nav>
              <h2>cleanR</h2>
              <ul>
                <div onClick={this.toggleSignUpModal}><li>Sign Up</li></div>
                <Link to='/'><li>Login</li></Link>
              </ul>
          </nav>
          { this.state.toggleForm === true?
            <Signup toggleForm={this.toggleSignUpModal}/> :
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
