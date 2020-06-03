import React, { useEffect } from 'react';
import ReactDatetime from "react-datetime";
import { connect } from "react-redux";
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
import { fetchSales } from "../../actions/counterActions";
import SaleDetails from "./salesDetails.js";
import Payout from "./payout";
import Loader from '../view-elements/loader';

const Sales = (props) => {
    useEffect(() => {
        props.fetchSales();
    },[props.Sales]);
    const { Sales } = props;
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
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="date" />
                                </InputGroup>
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <SaleDetails salesDetails={Sales}/>
                <Payout />
            </CardBody>
        </Card >
    )
}
const mapStateToProps = ({ counter }) => {
    const { Sales } = counter;
    return {
        Sales
    };
};

export default connect(mapStateToProps, { fetchSales })(Sales);
