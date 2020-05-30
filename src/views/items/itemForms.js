import React from "react";
import {
    Form,
    Row,
    Col,
    FormGroup,
    Input,
    Card,
    CardBody,
    CardTitle,
    Container,
    Button,
    Label

} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const ItemForms = ({item, toggle}) => {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Card>
              <Button
                color="secondary"
                size="sm"
                onClick={toggle}
                className="float-left back-btn"
              >
                <i className="fa fa-arrow-left"></i>
              </Button>
              <CardBody>
                <CardTitle>Add New Items</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="10" className="ml-auto mr-auto">
            <Formik
              initialValues={{
                itemName: item.name,
                manufacturer: item.manufacturer,
                price: item.price,
                crateSize:item.crateSize
              }}
              validationSchema={Yup.object({
                itemName: Yup.string()
                  .required("Item Name is Required"),
                manufacturer: Yup.string()
                  .required("Item Manufacturer is Required"),
                price: Yup.number().required("Price is Required")
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
                    <Col md="6">
                      <FormGroup>
                        <Label>Item Name</Label>
                        <Input
                          className={
                            formik.touched.itemName && formik.errors.itemName
                              ? "form-control-alternative errorInput"
                              : "form-control-alternative"
                          }
                          placeholder="Item Name"
                          {...formik.getFieldProps("itemName")}
                        />
                        {formik.touched.itemName && formik.errors.itemName ? (
                          <div className="text-danger mt-1 sm-font">
                            {formik.errors.itemName}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Item Manufacturer</Label>
                        <Input
                          className={
                            formik.touched.manufacturer &&
                            formik.errors.manufacturer
                              ? "form-control-alternative errorInput"
                              : "form-control-alternative"
                          }
                          placeholder="Item Manufacture"
                          {...formik.getFieldProps("manufacturer")}
                        />
                        {formik.touched.manufacturer &&
                        formik.errors.manufacturer ? (
                          <div className="text-danger mt-1 sm-font">
                            {formik.errors.manufacturer}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Price</Label>
                        <Input
                          className={
                            formik.touched.price && formik.errors.price
                              ? "form-control-alternative errorInput"
                              : "form-control-alternative"
                          }
                          placeholder="3200"
                          {...formik.getFieldProps("price")}
                        />
                        {formik.touched.price && formik.errors.price ? (
                          <div className="text-danger mt-1 sm-font">
                            {formik.errors.price}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Crate type</Label>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="25Crate"
                            type="radio"
                            value="25"
                            name='crateSize'
                            onChange={formik.handleChange}
                            defaultChecked={formik.values.crateRadio === "25"}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="25Crate"
                          >
                            25 Bottles
                          </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            name='crateSize'
                            id="20Crate"
                            value="20"
                            defaultChecked={formik.values.crateRadio === "20"}
                            onChange={formik.handleChange}
                            type="radio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="20Crate"
                          >
                            20 Bottles
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup className="has-success">
                        <Label></Label>
                        <Button type="submit" color="success" size="md">
                          <i className="fa fa-plus-circle"></i> Add Item
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    );
}

export default ItemForms;