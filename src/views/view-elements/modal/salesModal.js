import React, { useState, useEffect } from "react";
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
  // const [didMount, setDidMount] = useState(false);
  const toggle = () => setModal(!modal);
  // useEffect(() => {
  //   let isCancelled = false;
  //   const runAsync = async () => {
  //     try {
  //       if (!isCancelled) {
  //         // do the job
  //       }
  //     } catch (e) {
  //       if (!isCancelled) {
  //         throw e;
  //       }
  //     }
  //   };
  //   runAsync();
  //   return () => {
  //     isCancelled = true;
  //   };
  // }, []);


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
          <Formik
            initialValues={{ itemQuantity: "" }}
            validationSchema={Yup.object({
              itemQuantity: Yup.number()
                .min(1, "Minimum of 1 required")
                .required("A Quantity is Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const itemData = {
                  id: itemId,
                  itemQuantity: values.itemQuantity,
                };
                props.modalTask(itemData);
                toggle();
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="8">
                    <FormGroup>
                      <Input
                        min={1}
                        type="number"
                        placeholder="Quantity e.g 2"
                        id="itemQuantity"
                        className={
                          touched.itemQuantity && errors.itemQuantity
                            ? "errorInput"
                            : null
                        }
                        name="itemQuantity"
                        value={values.itemQuantity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.itemQuantity && errors.itemQuantity ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.itemQuantity}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <Button type="submit" disabled={isSubmitting} color="light">
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
export default SalesModal;
