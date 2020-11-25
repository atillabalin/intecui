import React from 'react'
import { Card } from 'react-bootstrap';

const CardComponent = () => {

    return (
        <Card
            bg={'dark'}
            key={1}
            text={"white"}
            style={{ 
                width: '18rem',
                backgroundImage: 'url(http://intecbrussel.be/media/1114/03.jfif?crop=0.088656614385482432,0.040783984711832005,0.38141862235583851,0.0037055163252467569&cropmode=percentage&width=753&height=470&rnd=132465548020000000)'
         }}
            className="mb-2 mt-2 mr-2 CardComponent"
        >
            <Card.Header className="bg-warning text-dark">Header</Card.Header>
            <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
      </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;