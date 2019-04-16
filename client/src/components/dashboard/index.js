import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Feed from "../Feed";
import MyJobs from "../MyJobs";
// import axios from 'axios';

const data = [
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
];

class Dashboard extends Component {
  // use state to hold like 30 posts, and do some fancy scrolling stuff to load more?
  // componentDidMount() {
  //   axios.get();
  // };

  render() {
    return (
      <div>
        <NavHead></NavHead>
        <Container>
          <Row>
            <Col sm="3"><Stats></Stats></Col>
            <Col sm="6">
              {data.map(post => {
                return (<Feed
                  title={post.title}
                  body={post.body}
                  date={post.date}
                ></Feed>);
              })}
            </Col>
            <Col sm="3"><MyJobs></MyJobs></Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Dashboard;