import React from 'react';
import {
    Card,
    CardBody,
    Table,
    Input,
    Row,
    Col
} from "reactstrap";

const ExpencesDetails = ({ expenceData }) => {
    return (
        <Card>
            <CardBody>
                <Row>
                    <Col md="3" className="mr-auto mb-4 d-flex">
                        <strong className="mr-2 mt-2">Date: </strong>
                        <Input placeholder="select" type="date" />
                    </Col>
                </Row>
                <Table className="no-wrap v-middle" responsive>
                    <tbody>
                        {expenceData.map((expence, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{expence.desc}</td>
                                <td className="blue-grey-text  text-darken-4 font-medium">{expence.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default ExpencesDetails