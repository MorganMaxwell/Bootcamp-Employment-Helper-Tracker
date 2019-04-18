import React from 'react';
import {Card, Col, Row, CardTitle} from 'react-bootstrap';
import PieChart from '../PieChart';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import './style.css'


export default function Stats(){
    return(
        <div>
            <h1>Stats</h1>
            <Card className="card-stats">
                <Card.Body>
                <Row>
                    <BarChart></BarChart>
                </Row>
                </Card.Body>
            </Card>
            <Card className="card-stats">
                <Card.Body>
                <Row>
                    <LineChart></LineChart>
                </Row>
                </Card.Body>
            </Card>
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