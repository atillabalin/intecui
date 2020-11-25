import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { MdDateRange } from 'react-icons/md'
const NewsWidget = () => {
    const divStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)'
    };
    return (
        <Card style={{ width: 'auto' }}>
            <Card.Header className="text-white bg-dark">Nieuws</Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>
                    <Card.Img variant="top" className="float-left w-25 mr-2" src="https://picsum.photos/200" />
                    Vestibulum at eros Vestibulum at eros
                    <p className="text-justify"><MdDateRange/> 01/01/2020</p>
            </ListGroup.Item>
            <ListGroup.Item>
                    <Card.Img variant="top" className="float-left w-25 mr-2" src="https://picsum.photos/200" />
                    Vestibulum at eros Vestibulum at eros
                    <p className="text-justify"><MdDateRange/> 01/01/2020</p>
            </ListGroup.Item>
            <ListGroup.Item>
                    <Card.Img variant="top" className="float-left w-25 mr-2" src="https://picsum.photos/200" />
                    Vestibulum at eros Vestibulum at eros
                    <p className="text-justify"><MdDateRange/> 01/01/2020</p>
            </ListGroup.Item>
            <ListGroup.Item>
                    <Card.Img variant="top" className="float-left w-25 mr-2" src="https://picsum.photos/200" />
                    Vestibulum at eros Vestibulum at eros
                    <p className="text-justify"><MdDateRange/> 01/01/2020</p>
            </ListGroup.Item>
            </ListGroup>
            
        </Card>
    )
}

export default NewsWidget;