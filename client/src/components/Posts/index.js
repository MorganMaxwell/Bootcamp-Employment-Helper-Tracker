import React from 'react';
import './style.css';
import { Row, Card, Button} from 'react-bootstrap';

export default function Posts(props) {
    return (
        <div className="outer-div">
            <Row>
                <Card className="text-center text-muted" bg="dark" variant="dark" id={props.title}>
                    <Card.Header>{props.data}</Card.Header>
                    <Card.Body className="text-left">
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.body}</Card.Text>
                        <Button variant="primary">Like</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{props.date}</Card.Footer>
                </Card>
            </Row>
        </div>
    );
};