import React, { useEffect } from "react";
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
  Label,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { fetchExpencesRequest } from "../../actions/expencesActions";
import ExpencesDetails from "./expences";
import { Simpleloader } from "../view-elements/loader";

const Expences = (props) => {
  const { Expences, Loading } = props;
  useEffect(() => {
    props.fetchExpencesRequest();
  }, [Expences]);
  return (
    <Container>
      <Card>
        <CardBody>
          <Formik
            initialValues={{
              desc: "",
              amount: "",
            }}
            validationSchema={Yup.object({
              desc: Yup.string()
                .max(50, "Maximum of only 50 characters")
                .required("Expences Description is required"),
              amount: Yup.number().required("Amount Spent is Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
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
                  <Col md="5">
                    <FormGroup>
                      <Label>Expense Description</Label>
                      <Input
                        className={
                          touched.desc && errors.desc
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        rows="2"
                        id="desc"
                        type="textarea"
                        name="desc"
                        value={values.desc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.desc && errors.desc ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.desc}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>Amount</Label>
                      <Input
                        className={
                          touched.amount && errors.amount
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        placeholder="3000"
                        type="number"
                        id="amount"
                        name="amount"
                        autoComplete="off"
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.amount && errors.amount ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.amount}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="2" className="d-flex align-items-center">
                    <Button type="submit" disabled={isSubmitting} color="light" className="btn-sm">
                      <i className="fa fa-plus" /> Add Expenses
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
      {Loading ? <Simpleloader /> : <ExpencesDetails expenceData={Expences} />}
    </Container>
  );
};
const mapStateToProps = ({ expences }) => {
  const { Expences, Loading } = expences;
  return { Expences, Loading };
};

export default connect(mapStateToProps, { fetchExpencesRequest })(Expences);
