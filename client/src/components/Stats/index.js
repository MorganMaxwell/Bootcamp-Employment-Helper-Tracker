import React from 'react';
import {Card, Col, Row, CardTitle} from 'react-bootstrap';
import PieChart from '../PieChart';

export default function Stats(){
    return(
        <div>
            <h1>Stats</h1>
            <PieChart></PieChart>
            {/* <Card className="card-stats">
                <Card.Body>
                <Row>
                    <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    </div>
                    </Col>
                    <Col md="8" xs="7">
                    <div className="numbers">
                        <Card.Title tag="p">3,237</Card.Title>
                        <p />
                        <p className="card-category">Awards</p>
                    </div>
                    </Col>
                    </Row>
                </Card.Body>
            </Card> */}
        </div>
    )
}