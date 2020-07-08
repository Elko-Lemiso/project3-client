import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';
import './JobsFeed.scss';

class JobsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs : []
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASE_URL}jobs/findjobs`)
    .then(response => {
        this.setState({jobs: response.data})
    })
  }

  render() {
    return (
      <div className="big-container" id="jobs-feed">
        <Nav/>
        <h1>JOBS</h1>
        <div className="jobs-container">
        {
          this.state.jobs.map((oneJob, index) =>{
            return(
              <>
                <div className="jobs-card  shadow-drop-2-bottom">
                  <div className="profile-image-box">
                    <img src={oneJob.images[0].path} alt=""/>
                  </div>

                  <div className="job-title">
                    <h3 className="job-tagline">{oneJob.title}</h3>
                    <div className="hl"></div>
                    <p className="job-price"><strong>Job price:</strong><pre> € </pre>{oneJob.rate}<span>,-</span><pre> </pre>an hour.</p>
                  </div>

                    <p className="job-description">{oneJob.description}</p>

                  <div className="job-footer">
                    <span className="job-owner">Posted by: Elko</span>
                    <span className="job-applications">Running applications: {oneJob.applicants.length}</span>
                  </div>

                  <Link to={`jobsdetailpage/${oneJob._id}`}><button className="title-blue heartbeat">View job</button></Link>
                </div>

            </>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default JobsFeed
