import React, { Component } from 'react'
import {getUser} from '../../utils/auth';
import Nav from '../../components/Nav';
import { Link , Redirect } from 'react-router-dom';
import './ChatsFeed.scss';

class ChatsFeed extends Component {
  constructor(props) {
    super(props)
    
  }

  state = {
    user: getUser(),
    myChats: []
  }

  componentDidMount(){
    // !this.state.user? this.props.history.push("/"):
    // // left here, test if data comes in correctly
    // allCleanersData()
  }

  render() {
    if(!this.state.user){
      return(
        <Redirect to="/" />
      )
    } else{
      return (
        <div className="big-container" id="chats-feed">
          <Nav/>
          <h1>CHATS</h1>
          <div className="chats-list">
            {/* {
              this.state.myChats.map((chat, index)=>( */}
                <Link /*key={`${index}-${chat._id}`}*/ to={`/`}>
                  <div className="chat">
                    <div className="chat-image-box">
                      <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
                    </div>
                    <div className="chat-details">
                      <h4 className="capitalize">Pietje puk</h4>
                      <table>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="key-lines ">Job title:</td>
                            <td className="content-lines">Car wash</td>
                          </tr>
                          <tr>
                            <td className="key-lines ">Last message:</td>
                            <td className="content-lines">Thank you for accepting my application!</td>
                          </tr>
                          <tr>
                            <td className="key-lines ">Receipt date:</td>
                            <td className="content-lines">Mon 6 jul 15:57h</td>
                          </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                      </table>
                    </div>    
                  </div>
                </Link>  
              {/* ))
            } */}
          </div>
        </div>
      )
    }
  }
}

export default ChatsFeed
