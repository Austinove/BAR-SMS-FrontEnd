import React from 'react';
import ReactDatetime from "react-datetime";
import SaleDetails from "./salesDetails.js";
import Payout from "./payout";
import { 
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    FormGroup,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input
 } from "reactstrap"

const Sales = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Sales Made per Day</CardTitle>
                        <CardSubtitle>23/04/2020</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            {/* <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input> */}
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                        </InputGroupText> 
                                    </InputGroupAddon>
                                    <Input 
                                        type="date"
                                    />
                                </InputGroup>
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <SaleDetails />
                <Payout />
            </CardBody>
        </Card >
    )
}

export default Sales;
