import React, { Component } from 'react';
import './JobApplication.scss';
import { Link, Redirect } from 'react-router-dom';
import {jobApplication, jobApplicationMessage} from '../../utils/jobApplication';

class JobApplication extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  state = {
    message: '',
  }

  goBack(){
    this.props.history.goBack();
  }

  application(){
    debugger
    let jobId = this.props.stateJobDetailPage.jobData._id;
    let userId = this.props.stateJobDetailPage.user.id;
    let application = {
      job: jobId,
      user: userId
    }

    let startConversation = {
      clientId: this.props.stateJobDetailPage.jobData.creator._id,
      cleanerId: this.props.stateJobDetailPage.user.id,
      jobId: this.props.stateJobDetailPage.jobData._id,
      message: this.state.message,
      userType: this.props.stateJobDetailPage.user.userType
    }

    jobApplication(application)
    .then(response => {
      this.setState({
        applied: true
      })
    })
    .catch((error)=>{
      console.log('Error occured with job job application', error);
    })
    .then(()=>{
      jobApplicationMessage(startConversation)
      .then(response => {
        console.log(response);
        this.props.history.push("/chatsfeed");
      })
      .catch((error)=>{
        console.log('Error occured with job job application message', error);
      })
    })
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
      <div id="job-application">
        
        <div className="text-input">
          <div className="exit-box">
            <p className="exit-btn" onClick={this.goBack}>X</p>
          </div>
        <h1>Application</h1>          
          <form>
            <textarea type="text" name="message" onChange={this.handleChange}/>
            <button onClick={(event)=>{
                event.preventDefault();
                this.application();
              }} type="submit" className="title-blue">Send</button>
          </form>
        </div>
      </div>
    )
      
  }
}

export default JobApplication
