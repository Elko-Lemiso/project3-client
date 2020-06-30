import React, { Component } from 'react';
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import profile from '../images/profile.svg'
import list from '../images/list.svg'
import users from '../images/users.svg'
import { Link } from 'react-router-dom';

class LandingNav extends Component {
    render() {
        return (
            <nav>
                <h2>cleanR</h2>
                <ul>
                   <Link to='/signup'><li>Sign Up</li></Link>  
                    <li>Log In</li>
                </ul>
            </nav>
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
