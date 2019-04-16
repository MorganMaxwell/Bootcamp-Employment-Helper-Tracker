import React from 'react';
// import './style.css';
import {Card, Button, CardDeck, CardColumns} from 'react-bootstrap';

export default function Feed(){
    return(
        <div>
            <CardDeck>
                <Card className="text-center">
                <Card.Header>A Feed Post</Card.Header>
                <Card.Body>
                    <Card.Title>Title or Category</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                <Card className="text-center">
                <Card.Header>A Feed Post</Card.Header>
                <Card.Body>
                    <Card.Title>Title or Category</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}