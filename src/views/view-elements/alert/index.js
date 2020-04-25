import React from "react";
import { UncontrolledAlert, Alert } from "reactstrap";

const ControlledCustomAlert = (props) => {
  const { alertColor, alertDetails } = props;
  return (
    <UncontrolledAlert color={alertColor} fade={true}>
      <span className="alert-inner--icon">
        <i className="ni ni-like-2" />
      </span>
      <span className="alert-inner--text">
        <strong>Please</strong> {alertDetails}
      </span>
    </UncontrolledAlert>
  );
};

const CustomAlert = (props) => {
  const { alertColor, alertDetails } = props;
  return (
    <Alert color={alertColor}>
      <span className="alert-inner--icon">
        <i className="ni ni-like-2" />
      </span>{" "}
      <span className="alert-inner--text">
        <strong>{alertColor}! </strong> {alertDetails}
      </span>
    </Alert>
  );
};

export { ControlledCustomAlert, CustomAlert };
