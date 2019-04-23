import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

class CreateJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {level: '', position: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add A New Potential Job
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group controlId="exampleForm.levelSelect">
                <Form.Label>Level</Form.Label>
                <Form.Control as="select">
                <option>Internship</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
                <option>Team Lead/Manager</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.positionSelect">
                <Form.Label>Position</Form.Label>
                <Form.Control as="select">
                <option>Front End</option>
                <option>Back End</option>
                <option>Full-Stack</option>
                <option>DevOps</option>
                <option>QA/Testing</option>
                </Form.Control>
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

 export default CreateJob;