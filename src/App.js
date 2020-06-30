import React, { Component } from 'react';
import axios from 'axios';
import LandingNav from './components/LandingNav'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route } from 'react-router-dom';
import './App.scss'

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
        <LandingNav/>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
      </div>
    )
  }
}

export default App
