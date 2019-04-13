import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Feed from "../Feed";
import MyJobs from "../MyJobs";

class Dashboard extends Component {

  render() {
    return (
        <div>
            <NavHead></NavHead>
            <Container>
                <Row>
                    <Col lg="3"><Stats></Stats></Col>
                    <Col lg="6"><Feed></Feed></Col>
                    <Col lg="3"><MyJobs></MyJobs></Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Dashboard;