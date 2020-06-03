import React, { useState } from "react";
import { connect } from "react-redux";
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
import { Formik } from "formik";
import * as Yup from "yup";
import { saleRequest } from "../../../actions/counterActions";
import { addStoreItemRequest, CDCounterItemRequest } from "../../../actions/itemsActions"

const SalesModal = (props) => {
  const {
    buttonLabel,
    className,
    btnSpan_className,
    btn_icon,
    modelTitle,
    subLabel,
    itemId
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const btnSpan = (btnSpan_className, btn_icon, buttonLabel) => (
    <span className={btnSpan_className}>
      <i className={btn_icon} />
      {buttonLabel}
    </span>
  );
  const modalSubmition = (itemData) => {
    switch (subLabel) {
      case "Submit Sale":
        props.saleRequest(itemData);
        break;
      case "Add to Store":
        console.log(itemData, "second->add Store");
        break;
      case "Add Item":
        console.log(itemData, "third ->add Item")
        break;
      case "Remove Item":
        console.log(itemData, "fif->remove item");
        break;
    
      default:
        break;
    }
    
  }
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
          <Formik
            initialValues={{ itemQuantity: "" }}
            validationSchema={Yup.object({
              itemQuantity: Yup.number()
                .min(1, "Minimum of 1 required")
                .required("A Quantity is Required")
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const itemData={
                  id: itemId,
                  itemQuantity: values.itemQuantity
                }
                modalSubmition(itemData);
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md="8">
                    <FormGroup>
                      <Input
                        min={1}
                        type="number"
                        placeholder="Quantity e.g 2"
                        id="itemQuantity"
                        className={
                          formik.touched.itemQuantity && formik.errors.itemQuantity ? "errorInput" : null
                        }
                        {...formik.getFieldProps("itemQuantity")}
                      />
                      {formik.touched.itemQuantity && formik.errors.itemQuantity ? (
                        <div className="text-danger mt-1 sm-font">
                          {formik.errors.itemQuantity}
                        </div>
                      ) : null}
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
            )}
          </Formik>
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

const mapStateToProps = ({ counter, storeData }) => {
  const { counterItems } = counter;
  const { storeItems } = storeData;
  return {
    counterItems,
    storeItems
  };
};

export default connect(
  mapStateToProps,
  {
    saleRequest,
    addStoreItemRequest,
    CDCounterItemRequest
  }
)(SalesModal);
