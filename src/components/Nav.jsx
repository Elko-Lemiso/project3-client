import React, { Component } from 'react';
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import profile from '../images/profile.svg'
import list from '../images/list.svg'
import users from '../images/users.svg'
class Nav extends Component {
    render() {
        return (
            <nav>
                <h2>cleanR</h2>
                <ul>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
            </nav>
        );
    }
}

export default Nav

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
