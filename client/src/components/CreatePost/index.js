import React, { Component } from "react";
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";
import "./style.css";

class CreatePost extends Component {

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
                        New Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={this.props.state.category}
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item id="General" onClick={this.props.categorypick}>General</Dropdown.Item>
                            <Dropdown.Item id="Interview" onClick={this.props.categorypick}>Interview</Dropdown.Item>
                            <Dropdown.Item id="Advice" onClick={this.props.categorypick}>Advice</Dropdown.Item>
                        </DropdownButton>
                        <FormControl onChange={this.props.title} placeholder="Title/Subject" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>{this.props.state.bodyChars} Characters Left</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" placeholder="Post(limit 140 Char)" onChange={this.props.charcount}/>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    };
};

export default CreatePost;