import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import {Router, Switch} from 'react-router-dom';
import Dash from './pages/Dash';
=======
import MyNavBar from "./components/MyNavBar";
>>>>>>> e6749c5f0f2d63d25713b6c18558809a07ab7eae

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      <Dash></Dash>
        {/* <Router>
          <Switch exact route="/"></Switch>
          <Switch exact route="/login"></Switch>
          <Switch exact route="/dashboard"></Switch>
        </Router> */}
      </div>
=======
      <MyNavBar/>
>>>>>>> e6749c5f0f2d63d25713b6c18558809a07ab7eae
    );
  };
};

export default App;
