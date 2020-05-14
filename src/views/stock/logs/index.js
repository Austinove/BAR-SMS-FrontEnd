import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row,
    Input,
    Form
} from "reactstrap";
import LogDetails from "./logDetails.js";

const StockLogs = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <Row>
                        <Col lg={{size: "auto"}} md="12">
                            <div className="d-flex align-items-center">
                                <div>
                                    <CardTitle>Note this please...!!</CardTitle>
                                    <CardSubtitle>These are log ations on this item in the store</CardSubtitle>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ size: "auto", offset: 6 }} md="12">
                            <div className="d-flex">
                                <Form>
                                    <CardTitle>Select Date</CardTitle>
                                    <CardSubtitle>
                                        <Input type="date" placeholder="Date" />
                                    </CardSubtitle>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <LogDetails />
                </CardBody>
            </Card>
        </div>
    )
}

export default StockLogs;
