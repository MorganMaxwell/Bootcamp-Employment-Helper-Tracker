import React from 'react';
import {Card, Col, Row, CardTitle} from 'react-bootstrap';
import PieChart from '../PieChart';

export default function Stats(){
    return(
        <div>
            <h1>Stats</h1>
            <Card className="card-stats">
                <Card.Body>
                <Row>
                    <PieChart></PieChart>    
                </Row>
                </Card.Body>
            </Card>
        </div>
    )
}