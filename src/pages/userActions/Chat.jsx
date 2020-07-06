import React, { Component } from 'react';
import Nav from '../../components/Nav';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className = 'container'>
        <div className = 'row text-left'>
          <div class="col-5 overflow">
            <CountriesList/>
          </div>
          <div className = "col-7">
            <Route exact path="/chat/:id" component = {CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;