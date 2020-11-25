import React from 'react'
import { Jumbotron,InputGroup,Button,FormControl,Row,Col,Container } from 'react-bootstrap'

const SubscribeEmail = () => {
    return (
        <Container className="bg-warning">
            <Jumbotron className="bg-warning mt-4" >
            <Row>
                <Col>
                    <p className="lead">Schrijf je in voor de nieuwsbrief</p>
                </Col>
                <Col>
                    <InputGroup className="">
                        <FormControl
                            placeholder="Geef je email adres in"
                            aria-label="Geef je email adres in"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary btn-dark text-white">Inschrijven</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Jumbotron>
        </Container>
    )
}

export default SubscribeEmail;