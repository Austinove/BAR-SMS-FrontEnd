import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardSubtitle, CardTitle, Row } from "reactstrap";
import StoreItem from "./storeItem";
import { fetchStoreItemsRequest } from "../../actions/itemsActions";
import { Simpleloader } from "../view-elements/loader";

const Stock = (props) => {
  const { Loading, storeItems } = props;
  useEffect(() => {
      props.fetchStoreItemsRequest();
  }, [storeItems]);
  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Items in Your Store</CardTitle>
              <CardSubtitle>
                This shows the amount of all the items in your store
              </CardSubtitle>
              <CardSubtitle>
                This is where you can add items to store, and from store to
                Counter
              </CardSubtitle>
            </div>
          </div>
        </CardBody>
      </Card>
      <Row>
        {Loading ? (
          <div className="full-width">
            <Simpleloader />
          </div>
        ) : (
          storeItems.map((item, index) => (
            <StoreItem key={index} item={item} loading={Loading} />
          ))
        )}
      </Row>
    </div>
  );
};
const mapStateToProps = ({ storeData }) => {
  const { Loading, storeItems } = storeData;
  return { Loading, storeItems };
};

export default connect(mapStateToProps, { fetchStoreItemsRequest })(Stock);
