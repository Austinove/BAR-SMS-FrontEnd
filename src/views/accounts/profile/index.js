import React from 'react';
import { Card, CardBody, Row, Col, Container } from 'reactstrap';
import img2 from 'assets/images/users/2.jpg';

const Profile = () => {
    return (
        <div >
            <Container>
                <Row>
                    <Col md="8" sm="12" className="ml-auto mr-auto">
                <Card>
                    <CardBody>
                        <Row>
                            <Col md="6" sm="12" className="border-right">
                                <div className="mb-2">
                                    <img src={img2} alt="user" className="rounded-circle" height="200" width="200" />
                                </div>
                            </Col>
                            <Col md="5" sm="12">
                                <div className="mb-2 mt-4">
                                    <span>
                                        <strong>Name: </strong> Bryan Austin
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span>
                                        <strong>Place of Residence: </strong> Bryan Austin
                                    </span>
                                </div>
                                <div className="mb-2 mt-5 ml-4">
                                    <span>
                                        <strong>Contacts</strong>
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span>
                                        <strong>Email: </strong> Bryan@austin.com
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span>
                                        <strong>Contact: </strong> 0706444444
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
