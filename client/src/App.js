import React, { Component } from 'react';
import './App.css';
import {Router, Switch} from 'react-router-dom';
import Dash from './pages/Dash';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dash></Dash>
        {/* <Router>
          <Switch exact route="/"></Switch>
          <Switch exact route="/login"></Switch>
          <Switch exact route="/dashboard"></Switch>
        </Router> */}
      </div>
    );
  };
};

export default App;
