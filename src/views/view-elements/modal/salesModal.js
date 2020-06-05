import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalInputs from "./modalInputs";
import CounterForms from "./counterForms";

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
        > {" "}
          {btnSpan(btnSpan_className, btn_icon, buttonLabel)}
        </Button>
      ) : (
          <Button
            color="light"
            size="sm"
            onClick={toggle}
            className="float-left"
            type="button"
          > {" "}
            {btnSpan(btnSpan_className, btn_icon, buttonLabel)}
          </Button>
        )}
      <Modal isOpen={modal} fade={false} className={className}>
        <ModalHeader toggle={toggle}>{modelTitle}</ModalHeader>

        {subLabel === "Action to Counter" ?
         (
         <CounterForms
              btn_icon={btn_icon}
              subLabel={subLabel}
              itemId={itemId}
              toggle={toggle}
         />
         ) 
        : (
        <ModalBody>
          <ModalInputs
            btn_icon={btn_icon}
            subLabel={subLabel}
            itemId={itemId}
            toggle={toggle}
          />
        </ModalBody>
        )}

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
