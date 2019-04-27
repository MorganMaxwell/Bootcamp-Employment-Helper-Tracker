import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import CreateJob from '../CreateJob';
import './style.css';

export default class MyJobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalShow: false };
  };

  render() {
    let modalClose = job => {
      this.props.createJob(job);
      this.setState({ modalShow: false });
    };

    return (
      <div>
        <h1>My Jobs</h1>
        <Card>
          <Card.Header>
            <Button
              onClick={() => this.setState({ modalShow: true })}
            >
              Add new job
      </Button>
          </Card.Header>
          <Accordion
            defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className='job-accordion'>
                <span className="job-click">Job 1!</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className='job-accordion'>
                <span className="job-click">Job 2!</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" className='job-accordion'>
                <span className="job-click">Job 3!</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>

        <CreateJob
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    );
  };
};