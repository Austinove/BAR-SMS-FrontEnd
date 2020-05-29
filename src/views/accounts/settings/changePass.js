import React from 'react'
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
} from 'reactstrap'

const ChangePass = () => {

    const renderInput = (lebel, inputVal, name) => (
      <FormGroup>
        <Label>{lebel}</Label>
        <Input
          type="password"
          placeholder="**********"
          className="form-control-alternative"
          name={name}
          value={inputVal}
        />
      </FormGroup>
    );
    return (
      <Container>
        <CardHeader>
          <strong>Account Name:</strong>{" "}
          <span className=" ml-4 font-italic"> bryanovicaustenove@gmail.com</span>
        </CardHeader>
        <Form className="mt-4">
          <Row>
            <Col md="8" className="ml-auto mr-auto">
              {renderInput("Old Password *", null, "old_password")}
              {renderInput("New Password *", null, "new_password")}
              {renderInput("Confirm Password *", null, "confirm_password")}
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
      </Container>
    );
}

export default ChangePass