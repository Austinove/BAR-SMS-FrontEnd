import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import Item from "./item";
import { counterItemsRequest, saleRequest } from "../../actions/counterActions";
import { Simpleloader } from "../view-elements/loader";

class Home extends Component {
  componentDidMount() {
    this.props.counterItemsRequest();
  }
  makeSale = (itemData) => {
    console.log(itemData);
    this.props.saleRequest(itemData);
  }
  render() {
    return (
      <>
        <Row>
          {this.props.Loading ? (
            <div className="full-width">
              <Simpleloader />
            </div>
          ) : (
            this.props.counterItems.map((item, index) => (
              <Item item={item} makeSale={this.makeSale} key={index} />
            ))
          )}
        </Row>
      </>
    );
  }
}
const mapStateToProps = ({ counter }) => {
  const { Loading, counterItems } = counter;
  return {
    Loading,
    counterItems,
  };
};
export default connect(mapStateToProps, { counterItemsRequest, saleRequest })(Home);
