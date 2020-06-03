import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { fetchProfitsDataRequest } from "../../actions/profitsActions";
import { Simpleloader } from "../view-elements/loader";

const Profits = (props) => {
    const { profitsData } = props
  //Line chart
  let lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Profits",
        borderWidth: 1,
        backgroundColor: "rgba(94,114,228,.1)",
        borderColor: "rgb(94,114,228)",
        pointBorderColor: "rgb(94,114,228)",
        pointBackgroundColor: "rgb(94,114,228)",
        data: profitsData,
      },
    ],
  };
  useEffect(() => {
      props.fetchProfitsDataRequest();
  }, [profitsData]);
  return (
    <>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Note this please...!!</CardTitle>
              <CardSubtitle>
                The graph below shows the amount of profits made per month of
                the current year 2019
              </CardSubtitle>
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
                <div
                  className="chart-wrapper"
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    height: 250,
                  }}
                >
                  {profitsData ? (
                    <Line
                      data={lineData}
                      options={{
                        maintainAspectRatio: false,
                        legend: {
                          display: false,
                          labels: {
                            fontFamily: "Nunito Sans",
                          },
                        },
                        scales: {
                          yAxes: [
                            {
                              stacked: true,
                              gridLines: { display: false },
                              ticks: {
                                fontFamily: "Nunito Sans",
                              },
                            },
                          ],
                          xAxes: [
                            {
                              gridLines: { display: false },
                              ticks: {
                                fontFamily: "Nunito Sans",
                              },
                            },
                          ],
                        },
                      }}
                    />
                  ) : (
                    <Simpleloader />
                  )}
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
};
const mapStateToProps = ({ profits }) => {
    const { profitsData } = profits;
    return {profitsData}
}
export default connect(mapStateToProps, { fetchProfitsDataRequest })(Profits);
