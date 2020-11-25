import React from 'react'
import { Container,Row,Col, Jumbotron, Card } from 'react-bootstrap'

const Logos = ()=>{
    return (
        <Container>
            <Row>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/ESF.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/EU.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/Vlaanderen.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/VDAB.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/Actiris.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/Cevora.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/Evoliris.png" />
                </Col>
                <Col sm={3}>
                <Card.Img className="partnerlogo mb-4" src="http://intecbrussel.be/assets/images/logos/vgc_logo_n.png" />
                </Col>
                
            </Row>
        </Container>
    )
}
export default Logos;