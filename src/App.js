import React, { Component } from 'react';
import axios from 'axios';
import './App.scss'
import {Nav} from './components/LandingPage/LandingPage'
import {Body} from './components/LandingPage/LandingPage'
class App extends Component {
  constructor(props) {
    super(props)
  }
  
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
        <Nav/>
        <Body/>
      </div>
    )
  }
}

export default App
