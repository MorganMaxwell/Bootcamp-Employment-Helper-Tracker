import React from 'react';
import './style.css';
import { Row, Card, Button} from 'react-bootstrap';

export default function Feed(props) {
    return (
        <div>
            <Row>
                <Card className="text-center">
                    <Card.Header>{props.data}</Card.Header>
                    <Card.Body>
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