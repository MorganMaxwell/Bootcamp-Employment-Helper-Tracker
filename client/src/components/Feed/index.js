import React, { Component } from "react";
import CreatePost from "../CreatePost";
import { Button } from "react-bootstrap";

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            modalShow: false,
            category: "Category",
            title: "",
            body: "",
            bodyChars: 140
        };
    };

    categoryPick = event => {
        this.setState({ category: event.target.id});
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

    render() {
        let modalClose = () => {
            if (true) {
                this.setState({ modalShow: false });
            }
            else {
                // change everything not filled in red?
            };
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
                    state={this.state}
                    categorypick={this.categoryPick}
                    charcount={this.charCount}
                    title={this.title}
                />
                {this.props.children}
            </div>
        );
    }
};

export default Feed;

