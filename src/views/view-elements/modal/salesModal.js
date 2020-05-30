import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Input,
  Form,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

const SalesModal = (props) => {
  const {
    buttonLabel,
    className,
    btnSpan_className,
    btn_icon,
    modelTitle,
    subLabel,
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const btnSpan = (btnSpan_className, btn_icon, buttonLabel) => (
    <span className={btnSpan_className}>
      <i className={btn_icon} />
      {buttonLabel}
    </span>
  );
  return (
    <div>
      {subLabel === "Submit Sale" ? (
        <Button
          color="light"
          size="sm"
          block
          onClick={toggle}
          className="float-left"
          type="button"
        >
          {btnSpan(btnSpan_className, btn_icon, buttonLabel)}
        </Button>
      ) : (
        <Button
          color="light"
          size="sm"
          onClick={toggle}
          className="float-left"
          type="button"
        >
          {btnSpan(btnSpan_className, btn_icon, buttonLabel)}
        </Button>
      )}
      <Modal isOpen={modal} fade={false} className={className}>
        <ModalHeader toggle={toggle}>{modelTitle}</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="8">
                <FormGroup>
                  <Input min={1} type="number" placeholder="Quantity e.g 2" />
                </FormGroup>
              </Col>
              <Col md="4">
                <Button type="submit" color="light">
                  <i className={btn_icon} />
                  {subLabel}
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SalesModal;
