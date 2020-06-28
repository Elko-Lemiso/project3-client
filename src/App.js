import React, { Component } from 'react';
import axios from 'axios';
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage'

import './App.scss'

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
        <LandingPage/>
      </div>
    )
  }
}

export default App
