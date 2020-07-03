import React, { Component } from 'react';
import Nav from '../../components/Nav';
import {getUser} from '../../utils/auth';
import './JobsDetailPage.scss';

class JobsDetailPage extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    user: getUser()
  }

  render() {
    return (
      <div className="big-container" id="jobs-detail-page">
        <Nav/>
        <h1>JOB DETAIL PAGE</h1>
        <div className="jobs-container">
          <div className="jobs-card">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="jobs-content">
              <div className="job-title">
                <h3 className="job-tagline">Pool cleaning</h3>
                <div className="hl"></div>
                <p className="job-price"><strong>Job price:</strong><pre> € </pre>17<span>,-</span><pre> </pre>an hour.</p>
              </div>
              <p className="job-description">I am a very busy sales man and I am willing to pay good for a loyal cleaner. Hook me up!</p>
              <div className="job-footer">
                <span className="job-owner">Posted by: Elko</span>
                <span className="job-applications">Running applications: 25</span>
              </div>
              <button id="job-details-button" className="title-blue heartbeat">Apply</button>
            </div>
          </div>
          <div className="job-map">
            <h3>Location</h3>
            <div id="map">

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

export default JobsDetailPage
