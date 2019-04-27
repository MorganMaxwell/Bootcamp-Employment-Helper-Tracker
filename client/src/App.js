import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dash from './pages/Dash';
import Login from './pages/Login';
import { ProtectedRoute } from "./protected.route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"/>
            <Route path="/login" exact component={Login}/>
            <ProtectedRoute path="/dashboard" exact component={Dash}/>
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
