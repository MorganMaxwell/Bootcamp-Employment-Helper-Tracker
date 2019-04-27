import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dash from './pages/Dash';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"/>
            <Route path="/login" exact component={Login}/>
            <Route path="/dashboard" exact component={Dash}/>
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
