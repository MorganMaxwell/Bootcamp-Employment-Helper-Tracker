import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import axios from 'axios';

class Login extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Login Here</h2>
            <form class="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-dark" id="loginbtn">
                Login
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
