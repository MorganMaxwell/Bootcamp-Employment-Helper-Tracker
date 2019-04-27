import React from 'react';
import { Modal, Dropdown, DropdownButton, InputGroup, Button } from 'react-bootstrap';
import './style.css';

class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: 'Level', position: 'Position' };
  };

  levelPick = event => {
    this.setState({ level: event.target.id }); 
  };

  positionPick = event => {
    this.setState({ position: event.target.id});
  };

  filledOutCheck = () => {
    if (this.state.level !== "Level" && this.state.position !== "Position") {
        this.props.onHide({
            level: this.state.level,
            position: this.state.position,
            isJob: false
        });
        this.setState({
            level: "Level",
            position: "Position"
        });
    }
    else {
        this.setState({ newPost: "Please fill out all data before Posting!"});
    };
};

  render() {
    return (
      <Modal
        {...this.props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add A New Potential Job
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <DropdownButton
              direction='up'
              variant='secondary'
              title={this.state.level}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item id="Internship" onClick={this.levelPick}>Internship</Dropdown.Item>
              <Dropdown.Item id="Junior" onClick={this.levelPick}>Junior</Dropdown.Item>
              <Dropdown.Item id="Mid" onClick={this.levelPick}>Mid</Dropdown.Item>
              <Dropdown.Item id="Senior" onClick={this.levelPick}>Senior</Dropdown.Item>
              <Dropdown.Item id="Manager" onClick={this.levelPick}>Team Lead/Manager</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <InputGroup className='mb-3'>
            <DropdownButton
              direction='down'
              variant="secondary"
              title={this.state.position}
              id="input-group-dropdown-2"
            >
              <Dropdown.Item id="Back-end" onClick={this.positionPick}>Back-end</Dropdown.Item>
              <Dropdown.Item id="Front-end" onClick={this.positionPick}>Front-end</Dropdown.Item>
              <Dropdown.Item id="DevOps" onClick={this.positionPick}>DevOps</Dropdown.Item>
              <Dropdown.Item id="QualityAssurance" onClick={this.positionPick}>Quality Assurance</Dropdown.Item>
              <Dropdown.Item id="Testing" onClick={this.positionPick}>Testing</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <Modal.Footer>
            <Button onClick={this.filledOutCheck}>Submit</Button>
            </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  };
};

export default CreateJob;