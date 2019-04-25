import React, { Component } from "react";
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";
import "./style.css";

class CreatePost extends Component {
    state = {
        newPost: "New Post",
        category: "Category",
        title: "",
        body: "",
        bodyChars: 140
    };

    categoryPick = event => {
        this.setState({ category: event.target.id });
    };

    charCount = event => {
        const characters = event.target.value;
        const charLeft = 140 - characters.length;
        this.setState({
            bodyChars: charLeft,
            body: characters
        });
    };

    title = event => {
        this.setState({ title: event.target.value });
    };

    filledOutCheck = () => {
        if (this.state.category !== "Category" && this.state.title.length !== 0 && this.state.bodyChars > 0 && this.state.body.length !== 0) {
            this.props.onHide({
                title: this.state.title,
                body: this.state.body,
                category: this.state.category
            });
            this.setState({
                newPost: "New Post",
                category: "Category",
                title: "",
                body: "",
                bodyChars: 140
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
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.state.newPost}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={this.state.category}
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item id="General" onClick={this.categoryPick}>General</Dropdown.Item>
                            <Dropdown.Item id="Interview" onClick={this.categoryPick}>Interview</Dropdown.Item>
                            <Dropdown.Item id="Advice" onClick={this.categoryPick}>Advice</Dropdown.Item>
                        </DropdownButton>
                        <FormControl onChange={this.title} placeholder="Title/Subject" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>{this.state.bodyChars} Characters Left</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" placeholder="Post(limit 140 Char)" onChange={this.charCount} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.filledOutCheck}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    };
};

export default CreatePost;