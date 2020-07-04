import React, { Component } from 'react'
import {getUser} from '../../utils/auth';
import {allCleanersData} from '../../utils/user';
import Nav from '../../components/Nav';
import { Link , Redirect } from 'react-router-dom';
import './CleanersFeed.scss';

class CleanersFeed extends Component {
  constructor(props) {
    super(props)
    
  }

  state = {
    user: getUser(),
    allUserData: [],
    error: null  
  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    // left here, test if data comes in correctly
    allCleanersData()
    .then((response)=>{
      this.setState({
        allUserData: response.data.users,
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  render() {
    if(!this.state.user){
      return(
        <Redirect to="/" />
      )
    } else{
      return (
        <div className="big-container" id="cleaners-feed">
          <Nav/>
          <h1>CLEANERS</h1>
          <div className="cleaners-list">
  
            <div className="cleaner">
              <div className="cleaner-image-box">
                <img src="" alt=""/>
              </div>
              <div className="cleaner-details">
                <h4>cleanR Name</h4>
                <div className="rating">
                  <p>Rating:</p>
                </div>
                <p></p>
                <p>cleaners first message in the chat. Hi, I am very motivated to do the job.</p>
                <div className="jobs-done">
                  <p>Jobs finished:</p>
                  <p></p>
                </div>
              </div>
            </div>
  
            <div className="cleaner">
              <div className="cleaner-image-box">
                <img src="" alt=""/>
              </div>
              <div className="cleaner-details">
                <h4>cleanR Name</h4>
                <p>Cleaners first message in the chat. Hi, I am very motivated to do the job.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CleanersFeed
