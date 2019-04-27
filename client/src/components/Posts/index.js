import React from 'react';
import './style.css';
import { Row, Card } from 'react-bootstrap';

export default function Posts(props) {
    let date = new Date(props.date);
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear().toString();

    return (
        <div className="outer-div">
            <Row>
                <Card className="text-center text-muted" bg="dark" variant="dark" id={props.title}>
                    <Card.Header>
                        <h4>
                            {props.title}
                        </h4>
                    </Card.Header>
                    <Card.Body className="text-left">
                        <Card.Text>{props.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-muted text-right">
                            {`${dd}/${mm + 1}/${yyyy}`}
                        </div>
                    </Card.Footer>
                </Card>
            </Row>
        </div>
    );
};