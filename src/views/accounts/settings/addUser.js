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
              userType: "",
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
              userType: Yup.string().required("User Type is Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                props.registerUserRequest(values);
                setSubmitting(false);
              }, 4000);
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
                  <Col md="6">
                    <FormGroup>
                      <Label>User Name *</Label>
                      <Input
                        className={
                          touched.userName && errors.userName
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="userName"
                        placeholder="User Name"
                        name="userName"
                        type="text"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // autoComplete="off"
                      />
                      {touched.userName && errors.userName ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.userName}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Place of Residence *</Label>
                      <Input
                        className={
                          touched.residence && errors.residence
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="residence"
                        placeholder="Where User Lives"
                        name="residence"
                        type="text"
                        value={values.residence}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // autoComplete="off"
                      />
                      {touched.residence && errors.residence ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.residence}
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
                          touched.email && errors.email
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="email"
                        type="email"
                        placeholder="user@email.com"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // autoComplete="off"
                      />
                      {touched.email && errors.email ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.email}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Phone Number *</Label>
                      <Input
                        className={
                          touched.number && errors.number
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="number"
                        placeholder="07.........."
                        name="number"
                        type="text"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // autoComplete="off"
                      />
                      {touched.number && errors.number ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.number}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>User Type *</Label>
                      <Input
                        className={
                          touched.userType && errors.userType
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        id="userType"
                        type="select"
                        name="userType"
                        value={values.userType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select Type</option>
                        <option value="worker">Employee</option>
                        <option value="admin">Admin</option>
                      </Input>
                      {touched.userType && errors.userType ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.userType}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      color="info"
                      size="md"
                    >
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
