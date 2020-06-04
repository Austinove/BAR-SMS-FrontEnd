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
import { connect } from "react-redux";
import {
  createStoreItemRequest,
  editStoreItemRequest
} from "../../actions/itemsActions"
import { Simpleloader } from "../view-elements/loader";

const ItemForms = (props) => {
  const {
    editFlag, 
    item, 
    toggle, 
    Loading, 
    addNewItem, 
    editSelectedItem 
  } = props;
  const submitForms = (editFlag, itemData) => {
    console.log(itemData);
    switch (editFlag) {
      case true:
        editSelectedItem(itemData);
        toggle()
        break;
      case false:
        addNewItem(itemData);
        toggle()
        break;
      default:
        break;
    }
  }
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
              crateSize: item.crateSize,
            }}
            validationSchema={Yup.object({
              itemName: Yup.string().required("Item Name is Required"),
              manufacturer: Yup.string().required(
                "Item Manufacturer is Required"
              ),
              price: Yup.number().required("Price is Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                submitForms(editFlag, values);
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
                  <Col md="6">
                    <FormGroup>
                      <Label>Item Name</Label>
                      <Input
                        id="itemName"
                        className={
                          touched.itemName && errors.itemName
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        placeholder="Item Name"
                        name="itemName"
                        type="text"
                        value={values.itemName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.itemName && errors.itemName ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.itemName}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Item Manufacturer</Label>
                      <Input
                        id="manufacturer"
                        className={
                          touched.manufacturer && errors.manufacturer
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        placeholder="Item Manufacture"
                        type="text"
                        name="manufacturer"
                        value={values.manufacturer}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.manufacturer && errors.manufacturer ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.manufacturer}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Price</Label>
                      <Input
                        type="number"
                        id="price"
                        className={
                          touched.price && errors.price
                            ? "form-control-alternative errorInput"
                            : "form-control-alternative"
                        }
                        placeholder="3200"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.price && errors.price ? (
                        <div className="text-danger mt-1 sm-font">
                          {errors.price}
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
                          name="crateSize"
                          onChange={handleChange}
                          defaultChecked={values.crateRadio === "25"}
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
                          name="crateSize"
                          id="20Crate"
                          value="20"
                          defaultChecked={values.crateRadio === "20"}
                          onChange={handleChange}
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
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        color="success"
                        size="md"
                      >
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
const mapStateToProps = ({ storeData }) => {
  const { back, Loading } = storeData;
  return { back, Loading }
}
export default connect(mapStateToProps, {
  createStoreItemRequest,
  editStoreItemRequest
})(ItemForms);