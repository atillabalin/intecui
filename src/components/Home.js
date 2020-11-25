import React from 'react'
import { Button, CardGroup, Col, Card, Container, Jumbotron, Row } from 'react-bootstrap'
import CategoriesCard from './HomeBlocks/CategoriesCard'
import SliderComponent from './pages/Header/Slider'
import CardComponent from './HomeBlocks/Card'
import { FaUserGraduate, FaEuroSign } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import NewsWidget from './HomeBlocks/NewsWidget'
import EventsWidget from './HomeBlocks/EventsWidget'
import SubscribeEmail from './HomeBlocks/Subscribe'
import SocialLinks from './HomeBlocks/SocialLinks'
import Logos from './HomeBlocks/Logos'
export default function Home() {
    return (
        <div>
            <SliderComponent />
            <Container>
            <Row className="mt-4 border-top">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </Row>
            </Container>
            

            <Jumbotron className="mt-4 text-center">
                <Row className="text-center m-auto">
                    <Col sm="12">
                        <h1 className="display-4">Maak je keuze uit onze opleidingen!</h1>
                        <p className="lead">Bij INTEC BRUSSEL kan je kiezen uit meerdere opleidingen!</p>
                        <Button className="btn btn-warning">Ontdek alle opleidingen</Button>

                    </Col>
                </Row>
            </Jumbotron>

            <Container>


                <CardGroup>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </CardGroup>

            </Container>

            <Card className="text-center mt-4 mb-4">
                <Card.Header>Ervaring</Card.Header>
                <Card.Body className="text-center mr-auto">
                    <Card.Title>Batlimus</Card.Title>
                    <p className="w-50 m-auto">
                        ICT en muziek zijn altijd mijn passies geweest. Ik wist altijd dat ik als IT’er wilde werken, met de basiskennis die ik had. Het enthousiasme dat ik voelde toen ik iemand hielp om hun computerprobleem op te lossen of hun computer te repareren, motiveerde me om de stap te zetten. Ik had echter niet genoeg kennis of een diploma om mijn vaardigheden te bewijzen... Maar toen kwam INTEC BRUSSEL. Bij INTEC leerde ik niet alleen maar IT (netwerk- en systeembeheer), ik leerde ook communicatie en sociale waardigheden, waarden van groepswerk, scheiding van taken, ik leerde analyseren om problemen te vinden en op te lossen. Bij INTEC vond ik de professionele, sociale en privébegeleiding. Ze hebben me gemaakt tot wat ik nu werd, Een nieuwe INTEC-staff member.
                        </p>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Cursist PC- en Netwerktechnicus voor anderstaligen
                        <hr className="my-4" />
                    <Button variant="warning">Lees meer ervaringen</Button>
                </Card.Footer>
            </Card>

            <Container className="text-center mb-5 mt-5">
                <Row>
                    <Col sm={3} md={3}>
                        <h1><FaUserGraduate />195</h1>
                        <p className="">Cursisten in 2019</p>
                    </Col>
                    <Col sm={3} md={3}>
                        <h1><MdBusinessCenter />121</h1>
                        <p className="">Cursisten vonden een job in 2019</p>
                    </Col>
                    <Col sm={3} md={3}>
                        <h1><FaEuroSign />0,00</h1>
                        <p className="">De prijs van een opleiding</p>
                    </Col>
                    <Col sm={3} md={3}>
                        <h1><BsFillPeopleFill />150</h1>
                        <p className="">Bedrijfscontacten</p>
                    </Col>
                </Row>
                <Button variant="warning">Ontdek meer cijfers en weetjes</Button>
            </Container>
            <Container>
                <Row className="mb-5">
                    <Col sm={8} md={8}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="INTEC_BRUSSEL"
                                    theme="dark"
                                    options={{ height: 400 }}
                                  
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <NewsWidget/>
                    </Col>
                </Row>
            </Container>
            <EventsWidget/>
            <SubscribeEmail/>
            <SocialLinks/>
            <Logos/>
        </div>
    )
}
