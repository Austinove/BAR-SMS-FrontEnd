import React from "react";
import {
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { CustomAlert } from "../view-elements/alert";
import CustomModal from "../view-elements/modal";
const expences =[
  {
    amount: 3200,
    desc: "Spent on Food"
  },
  {
    amount: 2000,
    desc: "Spent on Soder to Muzee"
  },
  {
    amount: 5000,
    desc: "Spent on Soap to Muzee"
  }
]

const Payout = () => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col sm="12" md="6">
          <Card>
            <CardHeader className="font-weight-bold">
              <span className="float-left">Note for Expenses.!!!</span>
            </CardHeader>
            <CardBody className="text-center">
              <CardTitle className="text-warning">Today's Expenses</CardTitle>
              <CardText className="display-7 font-weight-bold text-warning">
                3,000 sh
                </CardText>
              <CustomAlert
                alertColor="info"
                alertDetails="Amount Spend to Day, Click below for more information"
              />
              <CustomModal
                buttonLabel="For more......"
                className="modal-dialog-centered"
                expences = {expences}
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="6">
          <Card>
            <CardHeader className="font-weight-bold">
              <span className="float-left">Cation !!!</span>
            </CardHeader>
            <CardBody className="text-center">
              <CardTitle className="text-success">
                Cash Out To Boss For The Day
                </CardTitle>
              <CardText className="display-7 font-weight-bold text-success">
                35,000 sh
                </CardText>
              <CustomAlert
                alertColor="warning"
                alertDetails="Amount not paid to Boss"
              />
              <Button color="light" size="lg">
                <span className="h6 font-weight-bold text-success mr-2 mb-0">
                  Click if Paid
                  </span>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </>
  );
}

export default Payout;
