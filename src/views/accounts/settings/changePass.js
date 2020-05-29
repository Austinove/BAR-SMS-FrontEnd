import React from 'react';
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
import {Formik} from 'formik';
import * as Yup from "yup";

const ChangePass = () => {

    const renderInput = (lebel, inputVal, name) => (
      <FormGroup>
        <Label>{lebel}</Label>
        <Input
          type="password"
          placeholder="**********"
          className="form-control-alternative"
          name={name}
          id={name}
          value={inputVal}
        />
      </FormGroup>
    );
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
              .min(6, "Password Must be Atlease 6 Characters")
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
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <Form className="mt-4" onSubmit={formik.handleSubmit}>
              <Row>
                <Col md="8" className="ml-auto mr-auto">
                  <FormGroup>
                    <Label>Old Password</Label>
                    <Input
                      type="password"
                      placeholder="**********"
                      className={
                        formik.touched.oldPassword && formik.errors.oldPassword
                          ? "form-control-alternative errorInput"
                          : "form-control-alternative"
                      }
                      id="oldPassword"
                      {...formik.getFieldProps("oldPassword")}
                    />
                    {formik.touched.oldPassword && formik.errors.oldPassword ? (
                      <div className="text-danger mt-1 sm-font">
                        {formik.errors.oldPassword}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>New Password</Label>
                    <Input
                      type="password"
                      placeholder="**********"
                      className={
                        formik.touched.password && formik.errors.password
                          ? "form-control-alternative errorInput"
                          : "form-control-alternative"
                      }
                      id="password"
                      {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger mt-1 sm-font">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="**********"
                      className={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? "form-control-alternative errorInput"
                          : "form-control-alternative"
                      }
                      id="confirmPassword"
                      {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="text-danger mt-1 sm-font">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="8" className="ml-auto mr-auto">
                  <Button color="success" size="md">
                    <i class="fa fa-save"></i> Save Changes
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    );
}

export default ChangePass