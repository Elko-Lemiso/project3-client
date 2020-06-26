import React, { Component } from 'react';
import axios from 'axios';

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
        this.setState({
          message: response.data.message
        })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.message === null ?
          <h2>Loading..</h2> :
          <h2>{this.state.message}</h2>
        }
      </div>
    )
  }
}

export default App
