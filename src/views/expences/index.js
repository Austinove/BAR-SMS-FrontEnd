import React from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
    Card,
    CardBody,
    Label
} from 'reactstrap'
import { Formik } from "formik";
import * as Yup from "yup";
import ExpencesDetails from './expences'

const Expences = () => {
    const expenceData = [
        {
            desc: "This was spent on food",
            amount: 5000
        },
        {
            desc: "Taken home by a family member called Austin",
            amount: 10000
        }
    ]
    return (
        <Container>
            <Card>
                <CardBody>
                    <Formik
                        initialValues={{
                            desc: "",
                            amount: ""
                        }}
                        validationSchema={Yup.object({
                            desc: Yup.string()
                                .max(50, "Maximum of only 50 characters")
                                .required("Expences Description is required"),
                            amount: Yup.number()
                                .required("Amount Spent is Required")
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {(formik) => (
                            <Form onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col md="5">
                                        <FormGroup>
                                            <Label>Expense Description</Label>
                                            <Input
                                                className={
                                                    formik.touched.desc && formik.errors.desc
                                                        ? "form-control-alternative errorInput"
                                                        : "form-control-alternative"
                                                }
                                                rows="2"
                                                id="desc"
                                                type="textarea"
                                                {...formik.getFieldProps("desc")}
                                            />
                                            {formik.touched.desc && formik.errors.desc ? (
                                                <div className="text-danger mt-1 sm-font">
                                                    {formik.errors.desc}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>Amount</Label>
                                            <Input
                                                className={
                                                    formik.touched.amount && formik.errors.amount
                                                        ? "form-control-alternative errorInput"
                                                        : "form-control-alternative"
                                                }
                                                placeholder="3000"
                                                type="number"
                                                id="amount"
                                                {...formik.getFieldProps("amount")}
                                                autoComplete="off"
                                            />
                                            {formik.touched.amount && formik.errors.amount ? (
                                                <div className="text-danger mt-1 sm-font">
                                                    {formik.errors.amount}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                    <Col md="2" className="d-flex align-items-center">
                                        <Button type="submit" color="light" className="btn-sm"><i className="fa fa-plus" /> Add Expenses</Button>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
            <ExpencesDetails expenceData={expenceData} />
        </Container>
    )
}

export default Expences
