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
        <div className="jobs-column">
          <div className="jobs-row">
            <div className="profile-image-box">
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1593453874/avatar-icon-vector_zhcqk3.jpg" alt=""/>
            </div>
            <div className="profile-details-box">
              <h3>Name</h3>
              <div className="avg-rating"></div>
              <h4>Rating: 5 star</h4>
              <p>Bio: I am a passionate cleaner, and I love automation. I will bring my robot cleaner too. To double the productivity.</p>
              <span>25 jobs done.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobsFeed
