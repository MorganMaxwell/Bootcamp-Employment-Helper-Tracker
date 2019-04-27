import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import axios from 'axios';
import auth from '../auth';
import {Redirect} from "react-router"

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  loginUser = () => {
    auth.login(()=>{
      console.log(auth.isAuthenticated());
      this.setState({redirectToReferrer: true});
  })
}

  render() {

    if(this.state.redirectToReferrer){
      return <Redirect to='/dashboard'/>
    }

    return (
      <Container>
        <Row>
          <Col>
            <h2>Login Here</h2>
            
              <div>
                <label>Email address</label>
                <input
                  type="email"  
                  id="email-input"
                  placeholder="Email"
                  name="user"
                  onChange={this.props.handleInput}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  id="password-input"
                  placeholder="Password"
                  name="password"
                  onChange={this.props.handleInput}
                />
              </div>
              <button type="submit" className="btn btn-dark" id="loginbtn" onClick={()=>this.loginUser()}>
                Login
              </button>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
