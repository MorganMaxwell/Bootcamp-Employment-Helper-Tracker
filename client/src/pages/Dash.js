import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';

class Dash extends Component {

  render() {
    console.log("User on dash: " + this.props.user);
    return (
            
            <Dashboard/> 
    );
  }
}

export default Dash;