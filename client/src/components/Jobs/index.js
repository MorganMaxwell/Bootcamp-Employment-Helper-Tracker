import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

export default function Jobs(props) {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" className='job-accordion'>
                <span className="job-click">{props.level}</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>{props.position}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};