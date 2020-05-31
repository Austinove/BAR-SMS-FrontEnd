import React from "react";
import { Card, CardBody, Row, CardTitle, Col, Progress } from "reactstrap";
import SalesModal from "../view-elements/modal/salesModal";

const Item = (props) => {
  const { item } = props;
  return (
    <Col className="mb-2" xs="12" lg="4" md="4">
      <div style={{ width: "18rem" }}>
        <Card className="card-stats mb-4 mb-lg-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle className="text-uppercase text-muted mb-0">
                  {item.name}
                </CardTitle>
                <span className="h2 font-weight-bold mb-0">
                  {item.quantity}
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="fas fa-chart-bar" />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-muted text-sm">
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-percentage">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" />
                      60%
                    </span>
                    <span className="text-nowrap">Items sold from counter</span>
                  </div>
                </div>
                <Progress max="100" value="60" color="warning" />
              </div>
            </p>
            <div className="mt-3 justify-content-md-center">
              <SalesModal
                buttonLabel="Click to Sale"
                className="modal-dialog-centered"
                btnSpan_className="text-nowrap text-success"
                btn_icon="fa fa-shopping-bag mr-2"
                modelTitle="Make Sale from Counter"
                subLabel="Submit Sale"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default Item;
