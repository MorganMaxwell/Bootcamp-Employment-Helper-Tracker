import React from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import CreateJob from '../CreateJob';
import Jobs from '../Jobs';
import './style.css';
import axios from 'axios';

export default class JobFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      jobs: []
    };
  };
  getJobs = () => {
    axios.get('/api/job/')
      .then(res => {
        this.setState({ jobs: res.data })
      });
  };
  componentDidMount = () => {
    this.getJobs();
  }

  render() {
    let modalClose = job => {
      this.props.createJob(job);
      this.setState({ modalShow: false });
    };    

    return (
      <div>
        <h1>My Jobs</h1>
        <Card>
          <Accordion defaultActiveKey="0">
          <Card.Header>
            <Button
              onClick={() => this.setState({ modalShow: true })}
            >
              Add new job
            </Button>
          </Card.Header>
          <Card.Body>
            {this.state.jobs.map(job => {
              return (
                <Jobs
                  key={job._id}
                  level={job.level}
                  position={job.position}
                ></Jobs>
              )
            })}
          </Card.Body>
          <CreateJob
            show={this.state.modalShow}
            onHide={modalClose}
          />
          </Accordion>
        </Card>
      </div>
    );
  };
};