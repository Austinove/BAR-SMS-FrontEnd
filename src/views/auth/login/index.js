import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import {
    Form,
    FormGroup,
    Row,
    Input,
    Label,
    Button,
    Col,
    Card,
    CardBody,
    Container
} from 'reactstrap';
import { loginUserRequest } from "../../../actions/authActions";

const Login = (props) => {
    let isDisabled = false;
    return (
        <Container className="fluid login-container" style={{ height: "100vh" }}>
            <Row className="justify-content-md-center login-row" style={{ height: "100%" }}>
                <Col md="5" className="my-auto">
                    <Card color="light">
                        <CardBody>
                            <div className="text-center text-muted mb-4">
                                <h2> Login</h2>
                            </div>
                            <Formik
                                initialValues={{ loginName: "", loginPassword: "" }}
                                validationSchema={Yup.object({
                                    loginName: Yup.string()
                                    .required("Enter your user name"),
                                    loginPassword: Yup.string()
                                    .required("Enter your password")
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    
                                    setTimeout(() => {
                                        // setSubmitting(true);
                                        console.log(JSON.stringify(values, null, 2));
                                        props.loginUserRequest(values);
                                        // setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {(formik) => (
                                    <Form role="form" onSubmit={formik.handleSubmit}>
                                        <FormGroup>
                                            <Label>User Name</Label>
                                            <Input
                                                className={
                                                    formik.touched.loginName && formik.errors.loginName
                                                        ? "form-control-alternative errorInput"
                                                        : "form-control-alternative"
                                                }
                                                id="loginName"
                                                placeholder="Your Name"
                                                bsSize="lg"
                                                {...formik.getFieldProps("loginName")}
                                            // autoComplete="off"
                                            />
                                            {formik.touched.loginName && formik.errors.loginName ? (
                                                <div className="text-danger mt-1 sm-font">
                                                    {formik.errors.loginName}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Password</Label>
                                            <Input
                                                className={
                                                    formik.touched.loginPassword && formik.errors.loginPassword
                                                        ? "form-control-alternative errorInput"
                                                        : "form-control-alternative"
                                                }
                                                id="loginPassword"
                                                placeholder="***************"
                                                bsSize="lg"
                                                type="password"
                                                {...formik.getFieldProps("loginPassword")}
                                            />
                                            {formik.touched.loginPassword && formik.errors.loginPassword ? (
                                                <div className="text-danger mt-1 sm-font">
                                                    {formik.errors.loginPassword}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup>
                                            <Button
                                                className="my-4"
                                                color="primary"
                                                type="submit"
                                                block
                                                disabled={isDisabled}
                                            >Login</Button>
                                        </FormGroup>
                                    </Form>
                                )}
                            </Formik>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = ({ auth }) => {
    const { loginError } = auth;
    return { loginError };
}
export default connect(mapStateToProps, { loginUserRequest })(Login)
