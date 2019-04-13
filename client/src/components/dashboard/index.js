import React, { Component } from 'react';
import {Container, Col, Row} from 'bootstrap';
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
                    <Col size="md-3"><Stats></Stats></Col>
                    <Col size="md-6"><Feed></Feed></Col>
                    <Col size="md-3"><MyJobs></MyJobs></Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Dashboard;