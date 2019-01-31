import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import {Home, Navi } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navi />
          <Route exact path="/hammonds/home" render={() => (<Home />)} />
          <Route path="/*" render={() => (<Redirect to="/hammonds/home" />)} />
      </div>
    );
  }
}

export default App;
