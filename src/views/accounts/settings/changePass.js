import React from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import { connect } from "react-redux";
import { 
    Container, 
    CardHeader,
    Col,
    FormGroup,
    Label,
    Input,
    Form,
    Row,
    Button
} from 'reactstrap';
import { editUserRequest } from "../../../actions/authActions";

const ChangePass = (props) => {
    return (
      <Container>
        <CardHeader>
          <strong>Account Name:</strong>{" "}
          <span className=" ml-4 font-italic">
            bryanovicaustenove@gmail.com
          </span>
        </CardHeader>
        <Formik
          initialValues={{ oldPassword: "", password: "", confirmPassword: "" }}
          validationSchema={Yup.object({
            oldPassword: Yup.string()
              .min(6, "Password Must be Atleast 6 Characters")
              .required("Old Password is Required"),
            password: Yup.string()
              .min(6, "Password Must be Atleast 6 Characters")
              .required("New Password is Required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords Must Match")
              .required("confirm Password is Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              props.editUserRequest(values);
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
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Row>
                <Col md="8" className="ml-auto mr-auto">
                  <FormGroup>
                    <Label>Old Password *</Label>
                    <Input
                      type="password"
                      placeholder="**********"
                      className={
                        touched.oldPassword && errors.oldPassword
                          ? "form-control-alternative errorInput"
                          : "form-control-alternative"
                      }
                      id="oldPassword"
                      name="oldPassword"
                      type="password"
                      value={values.oldPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.oldPassword && errors.oldPassword ? (
                      <div className="text-danger mt-1 sm-font">
                        {errors.oldPassword}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>New Password *</Label>
                    <Input
                      type="password"
                      placeholder="**********"
                      className={
                        touched.password && errors.password
                          ? "form-control-alternative errorInput"
                          : "form-control-alternative"
                      }
                      id="password"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? (
                      <div className="text-danger mt-1 sm-font">
                        {errors.password}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>Confirm Password *</Label>
                    <Input
                      type="password"
                      placeholder="**********"
                      className={
                        touched.confirmPassword && errors.confirmPassword
                          ? "form-control-alternative errorInput"
                          : "form-control-alternative"
                      }
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <div className="text-danger mt-1 sm-font">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="8" className="ml-auto mr-auto">
                  <Button color="success" disabled={isSubmitting} size="md">
                    <i className="fa fa-save"></i> Save Changes
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    );
}
const mapStateToProps = (state) => {
  return {};
}
export default connect(mapStateToProps, {editUserRequest})(ChangePass)