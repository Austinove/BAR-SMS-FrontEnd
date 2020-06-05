import React from "react";
import {
    Button,
    Input,
    Form,
    Row,
    Col,
    FormGroup,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const ModalInputs = (props) => {
    const { itemId, btn_icon, subLabel, toggle } = props
    return (
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
                    console.log(itemData)
                    // props.modalTask(itemData);
                    // toggle();
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
                                    <i className={btn_icon} />{" "}{subLabel}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
        </Formik>
    )
}
export default ModalInputs;
