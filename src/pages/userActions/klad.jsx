import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Maps from '../../components/Maps';
import {getUser} from '../../utils/auth';
import {findJob} from '../../utils/job';
import {jobApplication} from '../../utils/jobApplication';
import axios from 'axios';
import './JobsDetailPage.scss';

class JobsDetailPage extends Component {
  constructor(props) {
    super(props)
    this.sendApplication = this.sendApplication.bind(this);
    this.toggleApplicationForm = this.toggleApplicationForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  state = {
    user: getUser(),
    jobData: {
      images: [{}],
      address: null
    },
    toggleApplicationForm: false,
    messages: '',
    error: null,
    applicationError: null,
  }

  
  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    findJob(this.props.match.params.id)
    .then((response)=>{
      debugger
      this.setState({
        jobData: response.data,
      })
      this.state.jobData.applicants.includes(this.state.user.id) ? this.setState({applied : true}) : this.setState({applied : false})
    })
    .catch((error)=>{
      this.setState({
        error: error.message
      })
    })
  }

  toggleApplicationForm(){
    this.setState({
      toggleApplicationForm: !this.state.toggleApplicationForm
    })
  }

  sendApplication(){
   this.application();
   
   
  }

  handleChange(event){
    let newMessage = {...this.state.message};
    newMessage = event.target.value;
    this.setState({
      message: newMessage
    })
  }

  application(){
    let jobId = this.state.jobData._id
    let userId = this.state.user.id
    let application = {
      job : jobId,
      user: userId
    }
    jobApplication(application)
    .then(response => {
      this.setState({
        applied: true
      })
    })
    .catch((error)=>{
      this.setState({
        applicationError: error.message
      })
    })
  }

  assignCleaner(status, id){

    let jobId = this.state.jobData._id;
    let userId = this.state.user.id;
    let application = {
      job : jobId,
      user: id,
      status: status
    };
    return axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}jobs/applicationResponse`,
      data : application
    })
    .then(response => {
        console.log(response)
    })
  }

  render() {
    if(this.state.jobData.address === null){
      return(
      <h1>Loading..</h1>
      )
    }
    else{
      return (
        <div className="big-container" id="jobs-detail-page">
          <Nav/>
          <h1>JOB DETAIL PAGE</h1>
          <div className="jobs-container">
            <div className="jobs-card">
              <div className="profile-image-box">
                <img src={`${this.state.jobData.images[0].path}`} alt=""/>
              </div>
              <div className="jobs-content">
                <div className="job-title">
                  <h3 className="job-tagline">{this.state.jobData.title}</h3>
                  <div className="hl"></div>
                  <div className="job-price">
                    <p><strong>Job price:</strong></p>
                    <p>€ {this.state.jobData.rate}</p>
                    <span>,-</span>
                    <p>an hour.</p>
                  </div>
                </div>
                <p className="job-description">{this.state.jobData.description}</p>
                <div className="job-footer">
                  <span className="job-owner">Posted by {this.state.jobData.creator.firstname}</span>
                  <span className="job-applications">Running applications: {this.state.jobData.applicants.length}</span>
                </div>
                <button id="job-details-button" className="title-blue heartbeat" onClick = {this.toggleApplicationForm()}>Apply</button>
                {
                  this.state.toggleApplicationForm === true?
                    <form>
                      <textarea type="text" name="message" onChange={this.handleChange}/>
                      <button onClick={(event)=>{
                          event.preventDefault();
                          this.sendApplication(event);
                        }} type="submit" className="title-blue">Send</button>
                    </form>
                  :
                    <></>
                }
                
              </div>
            </div>
            <div className="job-map">
              <h3>Location</h3>
              <div className="maps-box">
                <Maps 
                  lat={this.state.jobData.address.lat} 
                  lng={this.state.jobData.address.long} 
                  street={this.state.jobData.address.street} 
                  city={this.state.jobData.address.city}
                  houseNr={this.state.jobData.address.houseNr}
                />
              </div>
            </div>
            {
              this.state.user.userType === "client"? 

              <div className="job-applicants">
              <h3>Applicants</h3>
              <div className="applicants-list">
              {
                  this.state.jobData.applicants.map((applicant, index) =>{
                  return(
                <div className="applicant">
                  <div className="applicant-image-box">
                    <img src={applicant.profilePicture.path} alt=""/>
                  </div>
                  <div className="applicant-details">
                    <h4>{applicant.firstname}</h4>
                    <p>Applicants first message in the chat. Hi, I am very motivated to do the job.</p>
                  </div>
                  <div className="applicant-approval">
                    <p>Approve?</p>
                    <button onClick={(event)=>{this.assignCleaner(true, applicant._id)}}>Yes</button>
                    <button onClick={(event)=>{this.assignCleaner(false, applicant._id)}}>No</button>
                  </div>
                </div>
                )
                  })
                }
              </div>
            </div>
            :
            <></>
            }
            
          </div>
        </div>
      )
    }
  }
}

export default JobsDetailPage
