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
    debugger
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
            debugger
            return(
              <>
                <div className="jobs-card">
                  <div className="profile-image-box">
                    <img src={"https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg"} alt=""/>
                  </div>

                  <div className="job-title">
                    <h3 className="job-tagline">{oneJob.title}</h3>
                    <div className="hl"></div>
                    <p className="job-price"><strong>Job price:</strong><pre> € </pre>{oneJob.rate}<span>,-</span><pre> </pre>an hour.</p>
                  </div>

                    <p className="job-description">{oneJob.description}</p>

                  <div className="job-footer">
                    <span className="job-owner">Posted by: Elko</span>
                    <span className="job-applications">Running applications: 25</span>
                  </div>

                  <button className="title-blue heartbeat"><Link to={`jobsdetailpage/${oneJob._id}`}>View job</Link></button>
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
