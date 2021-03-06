import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Line } from 'react-chartjs-2';

//Line chart
let lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
    datasets: [{
        label: 'Profits',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [100000, 150000, 60000, 70000]
    }]
};

const Profits = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Note this please...!!</CardTitle>
                            <CardSubtitle>The graph below shows the amount of profits made per month of the current year 2019</CardSubtitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Profits Summary</CardTitle>
                            <CardSubtitle>summary of this year</CardSubtitle>
                        </div>
                    </div>
                    <Row>
                        <Col lg="12">
                            <div className="campaign ct-charts">
                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                    <Line
                                        data={lineData}
                                        options={{
                                            maintainAspectRatio: false,
                                            legend: {
                                                display: false,
                                                labels: { fontFamily: "Nunito Sans" }
                                            },
                                            scales: {
                                                yAxes: [
                                                    {
                                                        stacked: true,
                                                        gridLines: { display: false },
                                                        ticks: { fontFamily: "Nunito Sans" }
                                                    }
                                                ],
                                                xAxes: [
                                                    {
                                                        gridLines: { display: false },
                                                        ticks: { fontFamily: "Nunito Sans" }
                                                    }
                                                ]
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Month with best profits.</CardTitle>
                            <CardSubtitle>Febrary, year 2019</CardSubtitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
export default Profits;
