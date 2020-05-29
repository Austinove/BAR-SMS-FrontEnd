import React from 'react'
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
  Label,
} from "reactstrap";

const AddUser = () => {
    const renderInput = (lebel, inputVal, type = "text", placeholder, name) => (
      <Col md="6">
        <FormGroup>
          <Label>{lebel}</Label>
          <Input
            className="form-control-alternative"
            name={name}
            value={inputVal}
            placeholder={placeholder}
            type={type}
            // autoComplete="off"
          />
        </FormGroup>
      </Col>
    );
    return (
      <Container>
        <Row>
          <Col md="10" className="ml-auto mr-auto">
            <Form>
              <Row>
                {renderInput(
                  "User Names",
                  null,
                  null,
                  "User Names",
                  "userName"
                )}
                {renderInput(
                  "Place of Residence",
                  null,
                  "null",
                  "Where user lives",
                  "residence"
                )}
                {renderInput(
                  "Email (optional)",
                  null,
                  "email",
                  "user@gmail.com",
                  "email"
                )}
                {renderInput(
                  "Phone Number",
                  null,
                  null,
                  "User Phone Number",
                  "number"
                )}
              </Row>
              <hr/>
              <Row className="mt-3">
                {renderInput(
                  "Parent's Names",
                  null,
                  null,
                  "Parent's Names",
                  "parentName"
                )}
                {renderInput(
                  "Phone Number",
                  null,
                  null,
                  "Parent's Phone Number",
                  "parentNumber"
                )}
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup className="has-success">
                    <Label></Label>
                    <Button color="info" size="md">
                      <i class="fa fa-plus-circle"></i> Add User
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

export default AddUser