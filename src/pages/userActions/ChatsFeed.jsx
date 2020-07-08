import React, { Component } from 'react'
import {getUser} from '../../utils/auth';
import {getMyConversations} from '../../utils/conversations';
import Nav from '../../components/Nav';
import { Link , Redirect } from 'react-router-dom';
import './ChatsFeed.scss';

class ChatsFeed extends Component {
  state = {
    user: getUser(),
    myConversations: []
  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    getMyConversations(this.state.user.id)
      .then((conversations)=>{
        this.setState({
          myConversations: conversations.data.response
        })
        console.log("Success! These are the conversations:",conversations.data.response);
      })
      .catch((error)=>{
        console.log(error, 'Error occured with getting the conversations');
      })
  }

  render() {
    debugger
    if(!this.state.user){
      return(
        <Redirect to="/" />
      )
    } else if(this.state.myConversations.length === 0){
      return(
        <div className="big-container" id="chats-feed">
          <Nav/>
          <h1>CHATS</h1>
          <div className="chats-list">
            <span className="no-conversation">No conversations yet.. go and get your first job!</span>
          </div>
        </div>
      )
    } else{
      return (
        <div className="big-container" id="chats-feed">
          <Nav/>
          <h1>CHATS</h1>
          <div className="shadow-drop-2-bottom chats-list">
            {
              this.state.myConversations.map((conversation, index)=>( 
                <Link key={`${index}-${conversation._id}`} to={`/chat/${conversation._id}`}>
                  <div className="chat">
                    <div className="chat-image-box">
                      { this.state.user.userType === conversation.participants[0].userType ?
                        <img src={conversation.participants[1].profilePicture.path} alt=""/> :
                        <img src={conversation.participants[0].profilePicture.path} alt=""/>
                      }
                    </div>
                    <div className="chat-details">
                      {
                        this.state.user.userType === conversation.participants[0].userType ?
                        <h4 className="capitalize">{conversation.participants[1].firstname} {conversation.participants[1].lastname}</h4>
                        :
                        <h4 className="capitalize">{conversation.participants[0].firstname} {conversation.participants[0].lastname}</h4>
                      }
                      <table>
                        <thead>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="key-lines ">Job title:</td>
                            <td className="content-lines">{conversation.jobId.title}</td>
                          </tr>
                          <tr>
                            <td className="key-lines ">First message:</td>
                            <td className="content-lines">{conversation.messages[0].message}</td>
                          </tr>
                          <tr>
                            <td className="key-lines ">Date:</td>
                            <td className="content-lines">{conversation.messages[0].created_at}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                      </table>
                    </div>    
                  </div>
                </Link>  
              ))
            } 
          </div>
        </div>
      )
    }
  }
}

export default ChatsFeed
