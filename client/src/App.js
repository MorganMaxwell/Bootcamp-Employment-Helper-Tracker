import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dash from './pages/Dash';
import Landing from './pages/Landing';
import Login from './pages/Login';
import {ProtectedRoute} from "./protected.route";

class App extends Component {
  state = {
    user: "",
    password: ""
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log("User: " + this.state.user);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" exact render={props => 
            <Login
              {...props}
              handleInput = {this.handleInput}
              loginUser = {this.loginUser}
            />
            }/>
            <ProtectedRoute 
              exact path="/dashboard" 
              component={Dash}
              user={this.state.user}
            />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
