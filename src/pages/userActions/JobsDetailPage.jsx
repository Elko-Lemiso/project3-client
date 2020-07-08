import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Maps from '../../components/Maps';
import {getUser} from '../../utils/auth';
import {findJob} from '../../utils/job';
import './JobsDetailPage.scss';
import JobApplication from '../userActions/JobApplication'
import { Link, Route } from 'react-router-dom';
import {assignTheCleaner} from '../../utils/jobApplication';
import {jobComplete} from '../../utils/job';

class JobsDetailPage extends Component {
  state = {
    applied: null,
    user: getUser(),
    jobData: {
      images: [{}],
      address: null,
      cleanerId: null,
    },
    error: null
  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    findJob(this.props.match.params.id)
    .then((response)=>{
      this.setState({
        jobData: response.data,
      })
      debugger
      this.state.jobData.applicants.includes(this.state.user.id) ? this.setState({applied : true}) : this.setState({applied : false})
    })
    .catch((error)=>{
      this.setState({
        error: error.message
      })
    })
  }
  jobFinished(event){
    jobComplete(this.state.jobData._id)
    .then((job)=>{
      this.props.history.push(`/myjobsfeed`);
    })
  }
 
  assignCleaner(status, id){
    let jobId = this.state.jobData._id
    let application = {
      job: jobId,
      user: id,
      status: status
    }
    assignTheCleaner(application)
    .then(response=>{
      this.props.history.push(`/chatsfeed`);
    })
    .catch((error)=>{
      console.log('Error occured with assigning the Cleaner', error);
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
            <div className="jobs-card  shadow-drop-2-bottom">
              <div className="profile-image-box">
                <img src={this.state.jobData.images[0].path} alt=""/>
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
                  {
                      this.state.jobData.status==="inProgress"?<h4>In Progress</h4> : <h4>{this.state.jobData.status}</h4>
                  }
                  {
                    this.state.user.userType === "client" && this.state.jobData.cleanerId !== null && this.state.jobData.cleanerId.profilePicture !== undefined ? 
                    <div className="current-cleaner">
                      <img src={this.state.jobData.cleanerId.profilePicture.path} alt=""/>
                      <h5>{this.state.jobData.cleanerId.firstname} is working on this.</h5>
                    </div> 
                    : 
                    <span className="job-applications">Running applications: {this.state.jobData.applicants.length}</span>
                  }
                </div>
                {
                  (this.state.user.userType === "cleaner") && (this.state.jobData.cleanerId === null) && (this.state.applied === false)&&
                  <Link to="/application"><button id="job-details-button" className="title-blue heartbeat">Apply</button></Link>
                } 
                {
                  (this.state.jobData.creator._id === this.state.user.id) && (this.state.jobData.cleanerId!== null)?
                  <button id="job-finished-button" onClick={(event)=>{this.jobFinished(event)}} className="title-blue heartbeat">Complete</button>:<></>
                }
              </div>
            </div>
            {
              this.state.user.userType === "client" && (this.state.jobData.cleanerId===null) &&
                  <div className="job-applicants shadow-drop-2-bottom">
                    <h3>Applicants</h3>
                    <div className="applicants-list">
                  {
                    this.state.jobData.applicants.length>0?
                      this.state.jobData.applicants.map((applicant, index) =>{
                      return(
                        <div key={`${index} - ${applicant.firstname}`}className="applicant">

                          <div className="applicant-image-box">
                            <img  key={index}  src={applicant.profilePicture.path} alt=""/>
                          </div>
                          <div className="applicant-details">
                            <h4  key={index} >{applicant.firstname}</h4>
                            <p>Applicants first message in the chat. Hi, I am very motivated to do the job.</p>
                          </div>
                          <div className="applicant-approval">
                            <p>Approve?</p>
                            <button onClick={(event)=>{this.assignCleaner(true, applicant._id)}}>Yes</button>
                            <button onClick={(event)=>{this.assignCleaner(false, applicant._id)}}>No</button>
                          </div>
                        </div>
                    )})
                      :
                      <h6>You have no applicants yet</h6>
                    }
                  </div>
                </div>
            }
            <div className="job-map  shadow-drop-2-bottom">
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
          </div>
          <Route 
          path="/application" 
          render={(props) =><JobApplication {...props} stateJobDetailPage={this.state} /> }
          />
        </div>
      )
    }
  }
}

export default JobsDetailPage
