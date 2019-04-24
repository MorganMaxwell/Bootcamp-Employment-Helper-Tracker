import React, { Component } from "react";
import CreatePost from "../CreatePost";
import { Button } from "react-bootstrap";

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            modalShow: false,
        };
    };

    render() {
        let modalClose = () => {
            this.setState({ modalShow: false });
        };

        return (
            <div>
                <Button
                    variant="primary"
                    onClick={() => this.setState({ modalShow: true })}
                >
                    New Post
                </Button>
                <CreatePost
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
                {this.props.children}
            </div>
        );
    }
};

export default Feed;

