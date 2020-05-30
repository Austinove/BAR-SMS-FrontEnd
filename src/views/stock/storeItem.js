import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import SalesModal from "../view-elements/modal/salesModal";
import { Link } from "react-router-dom";

const StoreItem = (props) => {
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
                <div className="icon icon-shape bg-default">
                  <Link to="/stock/logos">
                    <span
                      style={{ cursor: "pointer" }}
                      className="text-primary"
                    >
                      Logs <i className="mdi mdi-image-filter-vintage" />
                    </span>
                  </Link>
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-muted text-sm">
              <strong className="text-success mr-2">20</strong>
              <i className="fa fa-minus" />
              <span className="text-nowrap"> Crates</span>
            </p>
            <p className="mt-3 mb-0 text-muted text-sm">
              <strong className="text-success mr-2">10</strong>
              <i className="fa fa-minus" />
              <span className="text-nowrap"> Bottles</span>
            </p>
            <div className="mt-3 justify-content-md-center">
              <div className="float-left">
                <SalesModal
                  buttonLabel="Add to Store"
                  className="modal-dialog-centered"
                  btnSpan_className="text-nowrap text-success"
                  btn_icon="fa fa-plus-circle"
                  modelTitle="Add Items to Store"
                  subLabel="Add to Store"
                />
              </div>
              <div className="float-right">
                <UncontrolledDropdown>
                  <DropdownToggle caret color="light" className="btn-sm">
                    <span className="text-nowrap text-primary">
                      Counter Actions
                    </span>
                  </DropdownToggle>
                  <DropdownMenu right className="user-dd dropDown-menu-custom">
                    <div className="drop-items">
                      <SalesModal
                        buttonLabel="Add Item to Counter"
                        className="modal-dialog-centered"
                        btnSpan_className="text-nowrap text-primary"
                        btn_icon="fa fa-plus-circle"
                        modelTitle="Add Items to Counter"
                        subLabel="Add Item"
                      />
                    </div>
                    <div className="drop-items">
                      <SalesModal
                        buttonLabel="Remove from Counter"
                        className="modal-dialog-centered"
                        btnSpan_className="text-nowrap text-warning"
                        btn_icon="fa fa-arrow-circle-left"
                        modelTitle="Remove Items to Counter"
                        subLabel="Remove Item"
                      />
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StoreItem;
