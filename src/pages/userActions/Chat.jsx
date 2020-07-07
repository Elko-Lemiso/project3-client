import React, { Component } from 'react';
import Nav from '../../components/Nav';
import {getUser} from '../../utils/auth';
import {getMyConversationMessages, postMessage} from '../../utils/conversations';
import './Chat.scss';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    user: getUser(),
    message: null,
    myConversation: null

  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    getMyConversationMessages(this.props.match.params.id)
    .then((conversation)=>{
      this.setState({
        myConversation: conversation.data.response
      })
      console.log("Success! These are the conversations:",conversation.data.response);
    })
    .catch((error)=>{
      console.log(error, 'Error occured with getting the conversations');
    })
}

  sendMessage(){
    debugger

    const messageData = {
      message: this.state.message,
      from: this.state.user.id,
      jobId: this.state.myConversation.jobId._id,
      converstationId: this.state.myConversation._id,
      userType: this.state.user.userType
    }

    postMessage(messageData)
    .then((response)=>{
      this.setState({
        messages: [...this.state.messages, response]
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    });
  }

  handleChange(event){
    let newMessage = {...this.state.message};
    newMessage = event.target.value;
    this.setState({
      message: newMessage
    })
  }

  render() {
    if(this.state.myConversation === null){
      return (
      <h1>Loading..</h1>
      )
    } else{
      return (
        <div id="chat" className="big-container">
          <Nav/>
          <div className="chat-container">
            
            { this.state.user.userType === this.state.myConversation.participants[0].userType ? 
              <div className="profile-details">
                <div className="profile-image-box">
                  <img src={this.state.myConversation.participants[1].profilePicture.path} alt=""/>
                </div>
                <div className="personal-details">
                  <h4>{this.state.myConversation.participants[1].firstname} {this.state.myConversation.participants[1].lastname}</h4>
                </div>
                <p>Topic: {this.state.myConversation.jobId.title}</p>
              </div> :
              <div className="profile-details">
                <div className="profile-image-box">
                  <img src={this.state.myConversation.participants[0].profilePicture.path} alt=""/>
                </div>
                <div className="personal-details">
                  <h4>{this.state.myConversation.participants[0].firstname} {this.state.myConversation.participants[0].lastname}</h4>
                </div>
                <p>Topic: {this.state.myConversation.jobId.title}</p>
              </div>
            }
            {
              this.state.myConversation.messages.map((message, index)=>(
                <div key={`${message.userType}-${index}`}  className="conversation">
                  <div className={message.userType}>
                    <div className="message-line">{
                      this.state.user.userType === message.userType ?
                      <h5>You:</h5> :
                      <h5>{this.state.myConversation.participants[1].firstname} {this.state.myConversation.participants[1].lastname}:</h5>
                    }
                      <p>{message.message}</p>
                      <span>{message.created_at}</span>
                      <span className="capitalize">{message.userType}</span>
                    </div>
                  </div>
                </div>
              ))
            }              
            
  
            <div className="text-input">
              <form>
                <textarea type="text" name="message" onChange={this.handleChange}/>
                <button onClick={(event)=>{
                    event.preventDefault();
                    this.sendMessage(event);
                  }} type="submit" className="title-blue">Send</button>
              </form>
            </div>
  
          </div>
        </div>
      )
    }
  }
}

export default Chat
