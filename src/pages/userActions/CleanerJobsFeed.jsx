import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';
import './JobsFeed.scss';
import { getUser } from '../../utils/auth';

class CleanerJobsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
        userId : getUser().id,
        jobs : []
    }
  }
  componentDidMount() {
    return axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASE_URL}jobs/findCleanerJobs/${this.state.userId}`,
      })
    .then(response => {
        console.log(response);
        this.setState({jobs: response.data.jobsTaken})
    })
}

  render() {
    return (
      <div className="big-container" id="jobs-feed">
        <Nav/>
        <h1>JOBS</h1>
        <div className="jobs-container">
        { this.state.jobs.length === 0?
          <div className="jobs-card">
            <span className="no-conversation">No jobs yet.. go and get your first job!</span>
          </div>
          :
          this.state.jobs.map((oneJob, index) =>{
            return(
                <div key={`${index} - ${oneJob.title}`} className="jobs-card shadow-drop-2-bottom">
                  <div className="profile-image-box">
                    <img src={oneJob.images[0].path} alt=""/>
                  </div>

                  <div className="job-title">
                    <h3 className="job-tagline">{oneJob.title}</h3>
                    <div className="city">
                      <p className="bold">City:</p>
                      <p className="job-city">{oneJob.address.city}</p>
                    </div>
                    <div className="hl"></div>
                    <div className="job-price">
                      <p className="bold">Job price:</p>
                      <p> € </p>
                      <p>{oneJob.rate}</p>
                      <span>,-</span>
                      <p>an hour.</p>
                    </div>
                  </div>

                    <p className="job-description">{oneJob.description}</p>

                  <div className="job-footer">
                    {/* <span className="job-owner">Posted by: {oneJob.creator.firstname} {oneJob.creator.lastname}</span>
                    <span className="job-applications">Running applications: {oneJob.applicants.length}</span> */}
                  </div>

                  <button className="title-blue heartbeat"><Link to={`jobsdetailpage/${oneJob._id}`}>View job</Link></button>
                </div>
            
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default CleanerJobsFeed
