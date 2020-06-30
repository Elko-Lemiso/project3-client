import React, { Component } from 'react';
import axios from 'axios';
import LandingNav from './components/LandingNav';
import LandingPage from './pages/LandingPage';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Welcome from './pages/Welcome'
import Profile from './pages/Profile'
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
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/welcome' component = {Welcome}/>
        <Route exact path='/profile' component = {Profile}/>
      </div>
    )
  }
}

export default App
