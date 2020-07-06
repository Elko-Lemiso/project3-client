import React, { Component } from 'react';
import Nav from '../../components/Nav';
import {getUser} from '../../utils/auth';
import {postMessage, getMessages} from '../../utils/chats'
import './Chat.scss';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    user: getUser(),
    postMessage: {
      message: '',
      from: '',
      to: '',
      userType: '',
      jobId: ''
    },
    messages:[
      
    ]

  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    getMessages()
  }

  sendMessage(){
    console.log(this.state.message)
    postMessage(this.state.postMessage)
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
    return (
      <div id="chat" className="big-container">
        <Nav/>
        <div className="chat-container">
          <div className="profile-details">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="personal-details">
              <h4>Pietje puk</h4>
            </div>
          </div>

          <div className="conversation">

            <div className="to">
              <div className="message-line">
                <h5>Johny</h5>
                <p>Hi, I would like to clean your house!</p>
                <span>Sent: Date</span>
              </div>
            </div>

            <div className="from">
              <div className="message-line">
                <h5>Pietje puk</h5>
                <p>You look like a good cleaner!</p>
                <span>Sent: Date</span>
              </div>
            </div>
              
          </div>

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

export default Chat
