import React, { Component } from 'react'
import './JobsFeed.scss'

class JobsFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div className="big-container jobs-feed">
        <h1>JOBS FEED</h1>
        <div className="jobs-container">
          <div className="jobs-card">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="job-title">
              <h3 className="job-tagline">Pool cleaning</h3>
              <div className="hl"></div>
              <p className="job-price"><strong>Job price:</strong><pre> € </pre>17<span>,-</span><pre> </pre>an hour.</p>
            </div>
            <p className="job-description">Bio: I am a passionate cleaner, and I love automation. I will bring my robot cleaner too. To double the productivity.</p>
            <div className="job-footer">
              <span className="job-owner">Posted by: Elko</span>
              <span className="job-applications">Running applications: 25</span>
            </div>
            <button className="title-blue heartbeat">View job</button>
          </div>

          <div className="jobs-card">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="job-title">
              <h3 className="job-tagline">Pool cleaning</h3>
              <div className="hl"></div>
              <p className="job-price"><strong>Job price:</strong><pre> € </pre>17<span>,-</span><pre> </pre>an hour.</p>
            </div>
            <p className="job-description">Bio: I am a passionate cleaner, and I love automation. I will bring my robot cleaner too. To double the productivity.</p>
            <div className="job-footer">
              <span className="job-owner">Posted by: Elko</span>
              <span className="job-applications">Running applications: 25</span>
            </div>
            <button className="title-blue heartbeat">View job</button>
          </div>

          <div className="jobs-card">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="job-title">
              <h3 className="job-tagline">Pool cleaning</h3>
              <div className="hl"></div>
              <p className="job-price"><strong>Job price:</strong><pre> € </pre>17<span>,-</span><pre> </pre>an hour.</p>
            </div>
            <p className="job-description">Bio: I am a passionate cleaner, and I love automation. I will bring my robot cleaner too. To double the productivity.</p>
            <div className="job-footer">
              <span className="job-owner">Posted by: Elko</span>
              <span className="job-applications">Running applications: 25</span>
            </div>
            <button className="title-blue heartbeat">View job</button>
          </div>

          <div className="jobs-card">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="job-title">
              <h3 className="job-tagline">Pool cleaning</h3>
              <div className="hl"></div>
              <p className="job-price"><strong>Job price:</strong><pre> € </pre>17<span>,-</span><pre> </pre>an hour.</p>
            </div>
            <p className="job-description">Bio: I am a passionate cleaner, and I love automation. I will bring my robot cleaner too. To double the productivity.</p>
            <div className="job-footer">
              <span className="job-owner">Posted by: Elko</span>
              <span className="job-applications">Running applications: 25</span>
            </div>
            <button className="title-blue heartbeat">View job</button>
          </div>
        </div>

        
      </div>
    )
  }
}

export default JobsFeed
