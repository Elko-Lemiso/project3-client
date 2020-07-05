import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Maps from '../../components/Maps';
import {getUser} from '../../utils/auth';
import {findJob} from '../../utils/job';

import './JobsDetailPage.scss';

class JobsDetailPage extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    user: getUser(),
    jobData: {
      images: [{}],
      address: null
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
    })
    .catch((error)=>{
      this.setState({
        error: error.data.message
      })
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
                  <span className="job-owner">Posted by: Elko</span>
                  <span className="job-applications">Running applications: 25</span>
                </div>
                <button id="job-details-button" className="title-blue heartbeat">Apply</button>
              </div>
            </div>
            <div className="job-map">
              <h3>Location</h3>
              <div className="maps-box">
                <Maps lat={this.state.jobData.address.lat} lng={this.state.jobData.address.long}/>
              </div>
            </div>
            <div className="job-applicants">
              <h3>Applicants</h3>
              <div className="applicants-list">
                <div className="applicant">
                  <div className="applicant-image-box">
                    <img src="" alt=""/>
                  </div>
                  <div className="applicant-details">
                    <h4>Applicant Name</h4>
                    <p>Applicants first message in the chat. Hi, I am very motivated to do the job.</p>
                  </div>
                  <div className="applicant-approval">
                    <p>Approve?</p>
                    <button>Yes</button>
                    <button>No</button>
                  </div>
                </div>
  
                <div className="applicant">
                  <div className="applicant-image-box">
                    <img src="" alt=""/>
                  </div>
                  <div className="applicant-details">
                    <h4>Applicant Name</h4>
                    <p>Applicants first message in the chat. Hi, I am very motivated to do the job.</p>
                  </div>
                  <div className="applicant-approval">
                    <p>Approve?</p>
                    <button>Yes</button>
                    <button>No</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default JobsDetailPage
