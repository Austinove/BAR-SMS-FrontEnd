import React from 'react'
import { 
    Form, 
    FormGroup, 
    Row, 
    Input, 
    Label, 
    Button, 
    Col,
    Card,
    CardBody,
    Container
} from 'reactstrap'

const Login = () => {
    return (
        <Container className="fluid login-container" style={{ height: "100vh"}}>
            <Row className="justify-content-md-center login-row" style={{ height: "100%" }}>
                <Col md="5" className="my-auto">
                    <Card color="light">
                        <CardBody>
                            <div className="text-center text-muted mb-4">
                                <h2> Login</h2>
                            </div>
                            <Form role="form">
                                    <FormGroup>
                                        <Label>User Name</Label>
                                        <Input
                                            className="form-control-alternative"
                                            id="exampleFormControlInput1"
                                            placeholder="Your Name"
                                            bsSize="lg"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input
                                            className="form-control-alternative"
                                            id="exampleFormControlInput2"
                                            placeholder="***************"
                                            bsSize="lg"
                                            type="password"
                                        />
                                    </FormGroup>
                                <FormGroup>
                                    <Button
                                        className="my-4"
                                        color="primary"
                                        type="button"
                                        block
                                    >
                                        Sign in
                                    </Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login
