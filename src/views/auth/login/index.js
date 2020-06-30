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
    return (
      <Container className="fluid login-container" style={{ height: "100vh" }}>
        <Row
          className="justify-content-md-center login-row"
          style={{ height: "100%" }}
        >
          <Col md="5" className="my-auto">
            <Card color="light">
              <CardBody>
                <div className="text-center text-muted mb-4">
                  <h2> Login</h2>
                </div>
                <Formik
                  initialValues={{ loginName: "", loginPassword: "" }}
                  validationSchema={Yup.object({
                    loginName: Yup.string().required("Enter your user name"),
                    loginPassword: Yup.string().required("Enter your password"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      props.loginUserRequest(values);
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
                    <Form role="form" onSubmit={handleSubmit}>
                      <FormGroup>
                        <Label>User Name</Label>
                        <Input
                          className={
                            touched.loginName && errors.loginName
                              ? "form-control-alternative errorInput"
                              : "form-control-alternative"
                          }
                          required
                          value={values.loginName}
                          name="loginName"
                          id="loginName"
                          placeholder="Your Name"
                          bsSize="lg"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          // autoComplete="off"
                        />
                        {touched.loginName && errors.loginName ? (
                          <div className="text-danger mt-1 sm-font">
                            {errors.loginName}
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input
                          className={
                            touched.loginPassword && errors.loginPassword
                              ? "form-control-alternative errorInput"
                              : "form-control-alternative"
                          }
                          name="loginPassword"
                          id="loginPassword"
                          placeholder="***************"
                          bsSize="lg"
                          type="password"
                          value={values.loginPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.loginPassword && errors.loginPassword ? (
                          <div className="text-danger mt-1 sm-font">
                            {errors.loginPassword}
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          block
                          disabled={isSubmitting}
                        >
                          Login
                        </Button>
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
