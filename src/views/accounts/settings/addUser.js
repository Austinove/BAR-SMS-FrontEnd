import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerUserRequest } from "../../../actions/authActions";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Container,
  Button,
  Label,
} from "reactstrap";


const AddUser = (props) => {
  return (
    <Container>
      <Row>
        <Col md="10" className="ml-auto mr-auto">
          <Formik
            initialValues={{
              userName: "",
              residence: "",
              email: "",
              number: "",
              userType:""
            }}
            validationSchema={Yup.object({
              userName: Yup.string()
                .max(20, "Atmost 20 Characters Needed")
                .required("User Name is Required"),
              residence: Yup.string().required(
                "Place of Residence is Required"
              ),
              email: Yup.string().email("Invalid Email Address"),
              number: Yup.string()
                .min(10, "Invalid Number")
                .max(10, "Only 10 Numbers Needed")
                .required("Phone Number is Required"),
              userType: Yup.string()
                .required("User Type is Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                props.registerUserRequest(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>User Name *</Label>
                      <Input
                        className={
                          formik.touched.userName && formik.errors.userName
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="userName"
                        placeholder="User Name"
                        {...formik.getFieldProps("userName")}
                        // autoComplete="off"
                      />
                      {formik.touched.userName && formik.errors.userName ? (
                        <div className="text-danger mt-1 sm-font">
                          {formik.errors.userName}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Place of Residence *</Label>
                      <Input
                        className={
                          formik.touched.residence && formik.errors.residence
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="residence"
                        placeholder="Where User Lives"
                        {...formik.getFieldProps("residence")}
                        // autoComplete="off"
                      />
                      {formik.touched.residence && formik.errors.residence ? (
                        <div className="text-danger mt-1 sm-font">
                          {formik.errors.residence}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>
                        Email (<span className="font-italic">optional </span>)
                      </Label>
                      <Input
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="email"
                        type="email"
                        placeholder="user@email.com"
                        {...formik.getFieldProps("email")}
                        // autoComplete="off"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger mt-1 sm-font">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Phone Number *</Label>
                      <Input
                        className={
                          formik.touched.number && formik.errors.number
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="number"
                        placeholder="07.........."
                        {...formik.getFieldProps("number")}
                        // autoComplete="off"
                      />
                      {formik.touched.number && formik.errors.number ? (
                        <div className="text-danger mt-1 sm-font">
                          {formik.errors.number}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>User Type *</Label>
                      <Input
                        className={
                          formik.touched.userType &&
                          formik.errors.userType
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="userType"
                        type="select"
                        {...formik.getFieldProps("userType")}
                      >
                        <option value="">Select Type</option>
                        <option value="worker">Employee</option>
                        <option value="admin">Admin</option>
                      </Input>
                      {formik.touched.userType &&
                      formik.errors.userType ? (
                        <div className="text-danger mt-1 sm-font">
                          {formik.errors.userType}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Button type="submit" color="info" size="md">
                      <i className="fa fa-plus-circle"></i> Add User
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {};
}
export default connect(mapStateToProps, {registerUserRequest})(AddUser);
