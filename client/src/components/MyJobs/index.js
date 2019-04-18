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
                <ListGroup.Item action href="#link3">
                Link 3
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={8}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                Description of Job 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ipsum non quam suscipit.
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                Description of Job 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ipsum non quam suscipit suscipit. Nullam a ante commodo, faucibus magna id, eleifend ex. Proin mollis lorem neque. Quisque malesuada turpis id eros dignissim, a mollis tortor tristique.
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                Description of Job 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ipsum non quam suscipit suscipit. Nullam a ante commodo, faucibus magna id, eleifend ex. Proin mollis lorem neque. Quisque malesuada turpis id eros dignissim, a mollis tortor tristique.
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
                </Card>
            )
        }