import React from 'react';
import {Card, Row, Col, ListGroup, Tab} from 'react-bootstrap';

export default function MyJobs(){
    return(
        <Card>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          Hello world
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          Hello World 2
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </Card>
    )
}