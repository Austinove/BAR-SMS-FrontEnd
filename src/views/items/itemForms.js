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

const ItemForms = ({item, toggle}) => {
    
    const renderInput = (lebel,inputVal, type = "text", placeholder, name) => (
      <Col md="6">
        <FormGroup>
          <Label>{lebel}</Label>
          <Input
            className="form-control-alternative"
            name={name}
            value={inputVal}
            placeholder={placeholder}
            type={type}
          />
        </FormGroup>
      </Col>
      
    );
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
            <Form>
              <Row>
                {renderInput(
                  "Item Name",
                  item ? item.name : null,
                  null,
                  "Item Name",
                  "item_name"
                )}
                {renderInput(
                  "Item Manifacturer",
                  item ? item.manifacturer : null,
                  null,
                  "Manifactured by..",
                  "manufacturer"
                )}
                {renderInput(
                  "Price",
                  item ? item.price : null,
                  "number",
                  "3200",
                  "price"
                )}
                <Col md="6">
                  <FormGroup>
                    <Label>Crate type</Label>
                    <div className="custom-control custom-radio mb-3">
                      <input
                        className="custom-control-input"
                        id="customRadio5"
                        name="custom-radio-2"
                        type="radio"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio5"
                      >
                        25 Bottles
                      </label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                      <input
                        className="custom-control-input"
                        id="customRadio6"
                        name="custom-radio-2"
                        type="radio"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio6"
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
                    <Button color="success" size="md">
                      <i class="fa fa-plus-circle"></i> Add Item
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
}

export default ItemForms;