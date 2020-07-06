import React, { Component } from 'react';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Welcome from './pages/user/Welcome';
import Logout from './pages/auth/Logout';
import Profile from './pages/user/Profile';
import EditProfile from './pages/user/EditProfile';
import PostJob from './pages/userActions/PostJob';
import JobsFeed from './pages/userActions/JobsFeed.jsx';
import MyJobsFeed from './pages/userActions/MyJobsFeed.jsx';
import JobsDetailPage from './pages/userActions/JobsDetailPage';
import CleanersFeed from './pages/userActions/CleanersFeed';
import ChatsFeed from './pages/userActions/ChatsFeed';
import Chat from './pages/userActions/Chat';
import { Route } from 'react-router-dom';
import './App.scss';


class App extends Component {
  state = {
    message: null
  }
  
  componentDidMount(){
    axios.get(`${process.env.REACT_APP_BASE_URL}`)
    .then(response => {
        console.log(response)
        this.setState({
          message: response.data.message
        })
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path={['/', '/auth/login', '/auth/signup']} component={LandingPage}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/welcome' component={Welcome}/>
        <Route exact path='/profile' component={Profile}/>
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/editprofile' component={EditProfile}/>
        <Route path='/postjob' component={PostJob}/>
        <Route path='/jobsfeed' component={JobsFeed}/>
        <Route path='/myjobsfeed' component={MyJobsFeed}/>
        <Route path='/jobsdetailpage/:id' component={JobsDetailPage}/>
        <Route exact path='/cleaners' component={CleanersFeed}/>
        <Route path='/chatsfeed' component={ChatsFeed}/>
        <Route path='/chat' component={Chat}/>
      </div>
    )
  }
}

export default App
